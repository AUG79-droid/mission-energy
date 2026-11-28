import json, re, time, html, urllib.parse, urllib.request, concurrent.futures
from pathlib import Path
from PIL import Image, ImageOps, ImageDraw
from io import BytesIO
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'editorial-review';OUT.mkdir(exist_ok=True)
TOPICS=json.loads((ROOT/'editorial-specific.json').read_text())
old=json.loads((ROOT/'assets/questions/CREDITS.json').read_text())
used={p['sha1'] for row in old for p in row}
UA='MissionEnergyEducational/4.0 (https://github.com/AUG79-droid/mission-energy; educational image attribution)'
def get(url):
    for a in range(3):
        try:
            with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':UA}),timeout=25) as r:return r.read()
        except Exception:
            if a==2:raise
            time.sleep(1+a)
def clean(s):return html.unescape(re.sub('<[^>]*>','',s or '')).strip()
def sheet(items,path,cols=3,w=300,h=180):
    rows=(len(items)+cols-1)//cols
    canvas=Image.new('RGB',(cols*w,rows*(h+26)), '#10283a');d=ImageDraw.Draw(canvas)
    for n,(label,im) in enumerate(items):
        x=n%cols*w;y=n//cols*(h+26)
        thumb=ImageOps.contain(im.convert('RGB'),(w-8,h-6))
        canvas.paste(thumb,(x+(w-thumb.width)//2,y+(h-thumb.height)//2))
        d.text((x+6,y+h+4),label,fill='white')
    canvas.save(path,quality=83,optimize=True)

def candidates(item):
    key,queries=item;found=[];imgs=[];seen=set()
    for q in queries:
        args={'action':'query','format':'json','generator':'search','gsrnamespace':6,'gsrsearch':q+' filetype:bitmap','gsrlimit':30,'prop':'imageinfo','iiprop':'url|size|sha1|mime|extmetadata','iiurlwidth':1200}
        try:data=json.loads(get('https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode(args)))
        except Exception as e:print(key,'search',str(e),flush=True);continue
        count=0
        for page in sorted(data.get('query',{}).get('pages',{}).values(),key=lambda p:p.get('index',999)):
            info=page.get('imageinfo',[{}])[0];meta=info.get('extmetadata',{});val=lambda k:clean(meta.get(k,{}).get('value',''))
            title=page.get('title','');license=val('LicenseShortName');sha=info.get('sha1')
            if not sha or sha in seen or sha in used:continue
            if info.get('mime')!='image/jpeg' or info.get('width',0)<1200 or info.get('height',0)<650 or info['width']/info['height']<1.15:continue
            if not re.match(r'^(CC BY(?:-SA)? |CC0|Public domain|PD)',license,re.I):continue
            if re.search(r'\b(logo|portrait|ceremony|ribbon|group photo|museum|historic|bus stop|map|diagram|screenshot|flag|USAF|US Navy|soldiers|military|marines|EFTA\d*|weapon|chemical agent|explosive destruction|abandoned|derelict|194\d|195\d|196\d|197\d|198\d)\b',title,re.I):continue
            try:
                im=ImageOps.exif_transpose(Image.open(BytesIO(get(info.get('thumburl') or info['url'])))).convert('RGB')
                if im.width<900 or im.height<500:continue
                found.append({'title':title,'source':info['descriptionurl'],'credit':val('Artist') or val('Credit') or 'See source file page','license':license,'licenseUrl':meta.get('LicenseUrl',{}).get('value',''),'sha1':sha,'download':info.get('thumburl') or info['url'],'query':q})
                imgs.append((f'{key} / {len(found)}',im));seen.add(sha);count+=1
                if count>=5:break
            except Exception as e:print(key,'skip',str(e),flush=True)
        if len(found)>=15:break
    if imgs:sheet(imgs,OUT/f'specific-{key}.jpg',cols=3,w=320,h=185)
    print(key,len(found),flush=True)
    return key,found
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
    result=dict(pool.map(candidates,TOPICS.items()))
(OUT/'specific.json').write_text(json.dumps(result,ensure_ascii=False,indent=2))
