import json, urllib.request, time
from pathlib import Path
from PIL import Image,ImageOps,ImageDraw
from io import BytesIO
ROOT=Path(__file__).resolve().parents[1];OUT=ROOT/'assets/questions';REVIEW=ROOT/'editorial-review'
old=json.loads((OUT/'CREDITS.json').read_text())
chosen=json.loads((ROOT/'editorial-selection.json').read_text())
for key,p in chosen.items():
    i,j=map(int,key.split('.'));before=old[i-1][j-1]
    for attempt in range(3):
        try:
            req=urllib.request.Request(p['download'],headers={'User-Agent':'MissionEnergyEducational/4.2 (https://github.com/AUG79-droid/mission-energy)'})
            with urllib.request.urlopen(req,timeout=30) as r:im=ImageOps.exif_transpose(Image.open(BytesIO(r.read()))).convert('RGB')
            break
        except Exception:
            if attempt==2:raise
            time.sleep(2)
    assert im.width>=900 and im.height>=500
    im.thumbnail((1400,1000),Image.Resampling.LANCZOS)
    name=f'm{i:02d}-q{j:02d}-r2.jpg';im.save(OUT/name,quality=90,optimize=True)
    (ROOT/before['path']).unlink()
    old[i-1][j-1]={**before,**{k:v for k,v in p.items() if k!='download'},'path':'assets/questions/'+name}
    print(key,p['title'],flush=True)
allp=[p for row in old for p in row]
assert len(allp)==50 and len({p['sha1'] for p in allp})==50 and len({p['path'] for p in allp})==50
(ROOT/'question-photos.js').write_text('const ENERGY_QUESTION_PHOTOS='+json.dumps(old,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
(OUT/'CREDITS.json').write_text(json.dumps(old,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
for i,row in enumerate(old):
    canvas=Image.new('RGB',(760,5*246),'#10283a');d=ImageDraw.Draw(canvas)
    for j,p in enumerate(row):
        im=ImageOps.contain(Image.open(ROOT/p['path']).convert('RGB'),(372,220));x=j%2*380;y=j//2*246
        canvas.paste(im,(x+(380-im.width)//2,y+(220-im.height)//2));d.text((x+8,y+224),f'{i+1}.{j+1}',fill='white')
    canvas.save(REVIEW/f'final-{i+1}.jpg',quality=85)
print('PASS: 50 unique photographs, '+str(len(chosen))+' individually selected replacements',flush=True)
