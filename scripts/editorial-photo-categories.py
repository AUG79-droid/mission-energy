import json,re,html,urllib.parse,urllib.request,time,concurrent.futures,random
from pathlib import Path
from PIL import Image,ImageOps,ImageDraw
from io import BytesIO
ROOT=Path(__file__).resolve().parents[1];OUT=ROOT/'editorial-review'
TOPICS=json.loads((ROOT/'editorial-categories.json').read_text())
used={p['sha1'] for row in json.loads((ROOT/'assets/questions/CREDITS.json').read_text()) for p in row}
UA='MissionEnergyEducational/4.1 (https://github.com/AUG79-droid/mission-energy; educational photo attribution)'
def get(url):
    for a in range(3):
        try:
            with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':UA}),timeout=25) as r:return r.read()
        except Exception:
            if a==2:raise
            time.sleep(1+a)
def api(args):return json.loads(get('https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode({'action':'query','format':'json',**args})))
def clean(s):return html.unescape(re.sub('<[^>]*>','',s or '')).strip()
def run(item):
    key,categories=item;found=[];imgs=[];seen=set()
    for cat in categories:
        try:
            pages=api({'generator':'categorymembers','gcmtitle':'Category:'+cat,'gcmtype':'file','gcmlimit':100,'prop':'imageinfo','iiprop':'url|size|sha1|mime|extmetadata','iiurlwidth':1200}).get('query',{}).get('pages',{})
        except Exception as e:print(key,cat,str(e),flush=True);continue
        eligible=[]
        for p in pages.values():
            info=p.get('imageinfo',[{}])[0];title=p.get('title','');meta=info.get('extmetadata',{});val=lambda k:clean(meta.get(k,{}).get('value',''));license=val('LicenseShortName');sha=info.get('sha1')
            if not sha or sha in used or sha in seen or info.get('mime')!='image/jpeg' or info.get('width',0)<1200 or info.get('height',0)<650 or info['width']/info['height']<1.15:continue
            if not re.match(r'^(CC BY(?:-SA)? |CC0|Public domain|PD)',license,re.I):continue
            if re.search(r'\b(logo|portrait|ceremony|ribbon|museum|historic|bus stop|map|diagram|screenshot|flag|USAF|US Navy|soldiers|military|marines|EFTA\d*|weapon|abandoned|derelict|194\d|195\d|196\d|197\d|198\d)\b',title,re.I):continue
            eligible.append((p,info))
        # sample across file names rather than many adjacent photos of one installation
        random.Random(cat).shuffle(eligible)
        count=0
        for p,info in eligible:
            if info['sha1'] in seen:continue
            try:
                im=ImageOps.exif_transpose(Image.open(BytesIO(get(info.get('thumburl') or info['url'])))).convert('RGB')
                if im.width<900 or im.height<500:continue
                meta=info['extmetadata'];val=lambda k:clean(meta.get(k,{}).get('value',''))
                found.append({'title':p['title'],'source':info['descriptionurl'],'credit':val('Artist') or val('Credit') or 'See source file page','license':val('LicenseShortName'),'licenseUrl':meta.get('LicenseUrl',{}).get('value',''),'sha1':info['sha1'],'download':info.get('thumburl') or info['url'],'query':'Category:'+cat})
                imgs.append(im);seen.add(info['sha1']);count+=1
                if count>=7 or len(found)>=24:break
            except Exception as e:print(key,'skip',str(e),flush=True)
        print(key,cat,count,flush=True)
        if len(found)>=24:break
    if imgs:
        cols=4;w=290;h=165;canvas=Image.new('RGB',(cols*w,((len(imgs)+cols-1)//cols)*(h+24)),'#10283a');d=ImageDraw.Draw(canvas)
        for n,im in enumerate(imgs):
            x=n%cols*w;y=n//cols*(h+24);thumb=ImageOps.contain(im,(w-6,h-6));canvas.paste(thumb,(x+(w-thumb.width)//2,y+(h-thumb.height)//2));d.text((x+6,y+h+3),f'{key} / {n+1}',fill='white')
        canvas.save(OUT/f'category-{key}.jpg',quality=84,optimize=True)
    return key,found
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:result=dict(pool.map(run,TOPICS.items()))
(OUT/'categories.json').write_text(json.dumps(result,ensure_ascii=False,indent=2))
