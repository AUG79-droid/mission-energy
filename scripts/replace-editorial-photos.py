import json,html,re,time,urllib.parse,urllib.request,hashlib
from pathlib import Path
from PIL import Image, ImageOps
from io import BytesIO
ROOT=Path(__file__).resolve().parents[1]
targets={"1.1":["Rolls-Royce Trent 7000 tested at Arnold Air Force Base Engineering Development Complex.jpg","Banco de ensayo de motor aeronáutico","Aircraft engine test bench"],"2.3":["AIRBUS A400M .jpg","Aeronave Airbus A400M en tierra","Airbus A400M on the ground"],"2.8":["Electric Motor Test Stand Will Help With Future X-planes (AFRC2016-0100-05).jpg","Banco de ensayo eléctrico instrumentado","Instrumented electrical test stand"],"2.10":["Digital Power Analyzer.gif","Instrumento de análisis eléctrico digital","Digital electrical analysis instrument"],"3.5":["Tesvolt Batteriespeicher in Container.jpg","Baterías industriales en contenedor","Industrial containerised batteries"],"4.9":["Generator Transfer Switch Front.jpg","Armario de transferencia para inspección eléctrica","Transfer switch cabinet for electrical inspection"],"5.2":["A 400 M.jpg","Aeronave de transporte A400M","A400M transport aircraft"]}
manifest=json.loads((ROOT/'assets/questions/CREDITS.json').read_text())
def get(url):
    for n in range(4):
        try:
            with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'MissionEnergyEducation/3.2 (https://github.com/AUG79-droid/mission-energy)'}),timeout=40) as r:return r.read()
        except Exception:
            if n==3:raise
            time.sleep(2**n)
def clean(s):return html.unescape(re.sub(r'<[^>]*>','',s or '')).strip()
used={x['sha1'] for row in manifest for x in row}
for k,(name,es,en) in targets.items():
    args={'action':'query','format':'json','titles':'File:'+name,'prop':'imageinfo','iiprop':'url|size|sha1|mime|extmetadata','iiurlwidth':1600}
    page=next(iter(json.loads(get('https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode(args)))['query']['pages'].values()))
    info=page['imageinfo'][0];meta=info.get('extmetadata',{})
    val=lambda key:clean(meta.get(key,{}).get('value',''))
    lic=val('LicenseShortName')
    assert re.match(r'^(CC BY(?:-SA)? |CC0|Public domain|PD)',lic,re.I),(name,lic)
    assert info['sha1'] not in used,name
    im=ImageOps.exif_transpose(Image.open(BytesIO(get(info.get('thumburl') or info['url'])))).convert('RGB')
    assert min(im.size)>=480,(name,im.size)
    im.thumbnail((1600,1600),Image.Resampling.LANCZOS)
    if k=='control':
        path='assets/mission-control-2025.jpg'
    else:
        i,j=map(int,k.split('.'));path=f'assets/questions/m{i:02d}-q{j:02d}-r5.jpg'
    im.save(ROOT/path,quality=90,optimize=True)
    p={'path':path,'es':es,'en':en,'title':page['title'],'source':info['descriptionurl'],'credit':val('Artist') or val('Credit'),'license':lic,'licenseUrl':meta.get('LicenseUrl',{}).get('value',''),'sha1':info['sha1'],'query':'FILE:'+name,'modification':'Resized / redimensionada'}
    used.add(info['sha1'])
    if k=='control':
        (ROOT/'assets/mission-control-credits.json').write_text(json.dumps(p,ensure_ascii=False,indent=2)+'\n')
    else:manifest[i-1][j-1]=p
    print('REPLACED',k,name,im.size,lic,flush=True)
assert len({x['sha1'] for row in manifest for x in row})==50
(ROOT/'assets/questions/CREDITS.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
(ROOT/'question-photos.js').write_text('const ENERGY_QUESTION_PHOTOS='+json.dumps(manifest,ensure_ascii=False,indent=2)+';\n')

from PIL import ImageDraw
for i,row in enumerate(manifest):
    sheet=Image.new('RGB',(1200,900),'#ffffff');d=ImageDraw.Draw(sheet)
    for j,p in enumerate(row):
        im=Image.open(ROOT/p['path']).convert('RGB');im.thumbnail((390,245))
        x=(j%3)*400;y=(j//3)*225
        im.thumbnail((390,195));sheet.paste(im,(x+(400-im.width)//2,y+20));d.text((x+8,y+3),f'{i+1}.{j+1}',fill='black')
    folder=ROOT/'photo-review';folder.mkdir(exist_ok=True);sheet.save(folder/f'mission-{i+1}.jpg',quality=85)
