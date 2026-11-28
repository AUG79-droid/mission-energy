import hashlib, html, json, os, re, time, urllib.parse, urllib.request
from pathlib import Path
from PIL import Image, ImageOps
from io import BytesIO

ROOT=Path(__file__).resolve().parents[1]
TOPICS=json.loads((ROOT/'photo-topics.json').read_text())
DEST=ROOT/'assets'/'questions'
DEST.mkdir(parents=True,exist_ok=True)
UA='MissionEnergyEducational/3.1 (https://github.com/AUG79-droid/mission-energy; educational photo attribution)'
used=set()
hashes=[]
manifest=[]
def get(url):
    for attempt in range(4):
        try:
            req=urllib.request.Request(url,headers={'User-Agent':UA,'Accept':'*/*'})
            with urllib.request.urlopen(req,timeout=30) as r:
                return r.read()
        except Exception as e:
            if attempt==3: raise
            time.sleep(2**attempt)
def clean(s):
    return html.unescape(re.sub(r'<[^>]*>','',s or '')).strip()
def search(q):
    args={'action':'query','format':'json','generator':'search','gsrnamespace':6,'gsrsearch':q+' filetype:bitmap','gsrlimit':40,'prop':'imageinfo','iiprop':'url|size|sha1|mime|extmetadata','iiurlwidth':960}
    if q.startswith('FILE:'):
        for k in ['generator','gsrnamespace','gsrsearch','gsrlimit']:args.pop(k,None)
        args['titles']='File:'+q[5:]
    data=json.loads(get('https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode(args)))
    return sorted(data.get('query',{}).get('pages',{}).values(),key=lambda p:p.get('index',999))
def dhash(im):
    a=list(ImageOps.grayscale(im).resize((9,8)).getdata())
    return sum((a[y*9+x]>a[y*9+x+1])<<(y*8+x) for y in range(8) for x in range(8))
for i,group in enumerate(TOPICS):
    row=[]
    for j,(es,en,*queries) in enumerate(group):
        pattern=queries.pop()[6:]
        found=None
        for q in queries:
            try: pages=search(q)
            except Exception as e:
                print('Search error',q,str(e),flush=True);continue
            for page in pages:
                info=page.get('imageinfo',[{}])[0]
                meta=info.get('extmetadata',{})
                val=lambda k:clean(meta.get(k,{}).get('value',''))
                license=val('LicenseShortName')
                title=page.get('title','')
                if re.search(r'\b(EFTA\d*|historic district|museum|archive|194[0-9]|195[0-9]|196[0-9]|197[0-9]|chemical agent|weapon|portrait)\b',title,re.I):continue
                if not q.startswith('FILE:') and not re.search(pattern,title,re.I):continue
                if info.get('mime') not in ('image/jpeg','image/png','image/webp') or info.get('width',0)<850 or info.get('height',0)<400 or info.get('width',0)/max(1,info.get('height',1))<1.15:continue
                if not re.match(r'^(CC BY(?:-SA)? |CC0|Public domain|PD)',license,re.I):continue
                if re.search(r'\b(map|diagram|schematic|logo|icon|drawing|chart|flag|screenshot|portrait)\b',title,re.I):continue
                sha=info.get('sha1')
                if not sha or sha in used:continue
                try:
                    im=ImageOps.exif_transpose(Image.open(BytesIO(get(info.get('thumburl') or info['url'])))).convert('RGB')
                    if im.width<700 or im.height<350:continue
                    d=dhash(im)
                    if any((d^old).bit_count()<9 for old in hashes):continue
                    im.thumbnail((1200,850),Image.Resampling.LANCZOS)
                    name=f'm{i+1:02d}-q{j+1:02d}.jpg'
                    im.save(DEST/name,quality=86,optimize=True)
                    found={'path':'assets/questions/'+name,'es':es,'en':en,'title':title,'source':info['descriptionurl'],'credit':val('Artist') or val('Credit') or 'See source file page','license':license,'licenseUrl':meta.get('LicenseUrl',{}).get('value',''),'sha1':sha,'query':q}
                    used.add(sha);hashes.append(d)
                    print(f'{i+1}.{j+1} {title} [{license}]',flush=True)
                    break
                except Exception as e: print('Candidate skipped',title,str(e),flush=True)
            if found:break
        if not found:raise RuntimeError(f'No distinct licensed landscape photo for {i+1}.{j+1}: {en}')
        row.append(found)
        time.sleep(0.4)
    manifest.append(row)
assert len(used)==50 and len(hashes)==50
(ROOT/'question-photos.js').write_text('const ENERGY_QUESTION_PHOTOS='+json.dumps(manifest,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
(ROOT/'assets'/'questions'/'CREDITS.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('PASS: 50 unique licensed local photographs, 50 distinct source SHA1 and perceptual hashes',flush=True)
