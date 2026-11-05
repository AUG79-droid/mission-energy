
// Mission Energy adaptation layer. Reuses the tested Material Sovereignty interaction engine.
function energyPair(s){const k=s.indexOf("|");return {es:s.slice(0,k),en:s.slice(k+1)};}
const E=ENERGY_DATA, L=ENERGY_THEORY;
const energyMeta=E.titles;
const energyLessons=L.map(group=>group.map(part=>({
 heading:energyPair(part[0]),body:energyPair(part[1]),
 bullets:{es:part.slice(2).map(t=>energyPair(t).es),en:part.slice(2).map(t=>energyPair(t).en)}
})));
const energyMissions=E.rows.map((rows,i)=>({
 id:["supply-shock","critical-demand","supply-diversity","infrastructure","72h-challenge"][i],
 title:{es:energyMeta[i][0],en:energyMeta[i][1]},
 subtitle:{es:energyMeta[i][2],en:energyMeta[i][3]},
 image:"energy",
 theory:{
  es:{intro:energyLessons[i][0].body.es,concepts:energyLessons[i].slice(0,3).map(x=>x.heading.es),relevance:energyLessons[i][4].body.es},
  en:{intro:energyLessons[i][0].body.en,concepts:energyLessons[i].slice(0,3).map(x=>x.heading.en),relevance:energyLessons[i][4].body.en}
 },
 questions:rows.map((r,q)=>{const correct=(q*2+Math.floor(q/3))%3;const options=[null,null,null];options[correct]=energyPair(r[1]);const wrong=[energyPair(r[2]),energyPair(r[3])];for(let k=0;k<3;k++)if(!options[k])options[k]=wrong.shift();return {q:energyPair(r[0]),options,correct,reason:energyPair(r[4]),weight:[6,5,5,5]};})
}));
MISSIONS.splice(0,MISSIONS.length,...energyMissions);
THEORY.splice(0,THEORY.length,...energyLessons);
MATERIALS.splice(0,MATERIALS.length,
 {es:"Red y distribución",en:"Grid and distribution",img:"grid",es_desc:"Dependencias físicas, cuadros y transformadores.",en_desc:"Physical dependencies, switchboards and transformers."},
 {es:"Alimentación eléctrica en tierra",en:"Aircraft ground power",img:"solar",es_desc:"Suministro eléctrico a aeronaves mediante equipos de apoyo en tierra.",en_desc:"Electrical power to aircraft via ground-support equipment."},
 {es:"Almacenamiento",en:"Energy storage",img:"storage",es_desc:"Potencia, energía útil, seguridad y autonomía.",en_desc:"Power, usable energy, safety and autonomy."},
 {es:"Equipos de respaldo",en:"Backup equipment",img:"backup",es_desc:"Repuestos, combustible y comprobación técnica.",en_desc:"Spares, fuels and technical testing."},
 {es:"Gestión de demanda en hangares",en:"Hangar demand management",img:"demand",es_desc:"Priorizar las cargas críticas de mantenimiento, iluminación y equipos auxiliares.",en_desc:"Prioritize critical maintenance, lighting and auxiliary loads."},
 {es:"Infraestructura y OT",en:"Infrastructure and OT",img:"control",es_desc:"Mantenimiento, protección y restauración.",en_desc:"Maintenance, protection and restoration."}
);
SOURCES.splice(0,SOURCES.length,
 {es:"IEA · Seguridad del suministro eléctrico",en:"IEA · Electricity security",url:"https://www.iea.org/reports/analytical-frameworks-for-electricity-security"},
 {es:"IEA · Resiliencia de sistemas energéticos",en:"IEA · Energy system resilience",url:"https://www.iea.org/reports/energy-system-resilience/executive-summary"},
 {es:"IEA · Flexibilidad de demanda",en:"IEA · Demand flexibility",url:"https://www.iea.org/reports/scaling-up-demand-flexibility"},
 {es:"ISO · Gestión energética ISO 50001:2018",en:"ISO · Energy management ISO 50001:2018",url:"https://www.iso.org/standard/69426.html"},
 {es:"Comisión Europea · Directiva de eficiencia energética",en:"European Commission · Energy Efficiency Directive",url:"https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficiency-targets-directive-and-rules/energy-efficiency-directive_en"},
 {es:"NIST · Guía de seguridad OT",en:"NIST · OT Security Guide",url:"https://csrc.nist.gov/pubs/sp/800/82/r3/final"}
);
Object.assign(T.es,{
 brand:"MISSION ENERGY",title:"Energía para mantener la misión",
 heroSub:"Continuidad operativa, dependencia energética y respuesta ante una crisis.",
 pill3:"Seguridad energética y resiliencia",pill4:"Continuidad de servicio",
 introTitle:"La resiliencia energética empieza antes de un apagón.",
 introBody:"Explora cómo decisiones sobre suministro, demanda e infraestructura protegen funciones esenciales durante una interrupción. Cada misión comienza con una lección completa y continúa con diez decisiones, feedback y evaluación.",
 intro1:"Seguridad del suministro",intro1b:"Red, combustibles, dependencias y autonomía verificada.",
 intro2:"Eficiencia y flexibilidad",intro2b:"Menos demanda evitable sin sacrificar prestaciones ni seguridad.",
 intro3:"Resiliencia operativa",intro3b:"Diversificación, mantenimiento y crisis de 72 horas.",
 materials:"Soluciones energéticas y activos",metric1:"Continuidad de misión",metric2:"Autonomía y flexibilidad",
 metric3:"Seguridad operativa",metric4:"Eficiencia y recursos",
 reportText:"Evaluación didáctica de decisiones sobre suministro, continuidad, cargas, infraestructura y recuperación.",
 routeBody:"En cada misión: una lección extensa, un escenario y diez decisiones con consecuencias. El recorrido culmina con una crisis ficticia de 72 horas.",
 safety:"En instalaciones reales prevalecen la seguridad, los procedimientos aprobados y las decisiones de técnicos autorizados.",
 sourceNote:"Casos ficticios: no representan datos, capacidades, instalaciones ni instrucciones internas de Airbus.",
 note:"Prototipo didáctico con supuestos genéricos. No sustituye los procedimientos internos ni certifica capacidades.",
 finalPoints:["La seguridad energética comienza por el mapa de dependencias físicas y cargas esenciales.","La eficiencia y flexibilidad pueden liberar capacidad para proteger la misión.","La resiliencia exige suministro alternativo probado, infraestructura preparada y recuperación segura."]
});
Object.assign(T.en,{
 brand:"MISSION ENERGY",title:"Energy that keeps missions running",
 heroSub:"Operational continuity, energy dependencies and response to disruption.",
 pill3:"Energy security and resilience",pill4:"Service continuity",
 introTitle:"Energy resilience starts before an outage.",
 introBody:"Explore how supply, demand and infrastructure decisions protect essential functions during disruption. Each mission begins with an in-depth lesson and continues with ten decisions, feedback and an assessment.",
 intro1:"Energy supply security",intro1b:"Grid, fuels, dependencies and verified autonomy.",
 intro2:"Efficiency and flexibility",intro2b:"Less avoidable demand without sacrificing performance or safety.",
 intro3:"Operational resilience",intro3b:"Diversification, maintenance and the 72-hour challenge.",
 materials:"Energy solutions and assets",metric1:"Mission continuity",metric2:"Autonomy and flexibility",
 metric3:"Operational safety",metric4:"Efficiency and resources",
 reportText:"Educational assessment of choices about supply, continuity, loads, infrastructure and recovery.",
 routeBody:"Every mission includes an extended lesson, a scenario and ten decisions with consequences. The course ends with a fictional 72-hour crisis.",
 safety:"At real sites, safety, approved procedures and decisions by authorised technical staff always take precedence.",
 sourceNote:"Fictional cases: these do not represent Airbus site data, equipment capability or internal instructions.",
 note:"Educational prototype with generic assumptions. Not a substitute for internal procedures or proof of readiness.",
 finalPoints:["Energy security begins with physical dependency and essential-load mapping.","Efficiency and demand flexibility can free capacity to protect missions.","Resilience requires tested alternatives, prepared infrastructure and safe restoration."]
});
const ENERGY_SCENES=[
["SUPPLY ALERT","CONTRACT RISK","SUBSTATION","METERING","FUEL LOGISTICS","ESSENTIAL LOADS","SHARED GRID","AUTONOMY","SAFE SHUTDOWN","RISK MAP"],
["PRIORITY","LIGHTING","PEAK SHIFT","BASELINE","AIR LOSSES","CLIMATE CONTROL","FLEXIBILITY","NORMALISED USE","HEADROOM","VERIFY BENEFIT"],
["SOLAR BACKUP","BATTERY STORAGE","FUEL DEPENDENCY","CONTRACT","SUPPLY MIX","MICROGRID","SPARES","DAY / NIGHT","RESIDUAL RISK","LAYERED SYSTEM"],
["TESTING","HEAT","FLOOD","OT ALARM","TEAM READINESS","SPARES","MAIN BREAKER","TRANSFER","EXERCISE","RESTORATION"],
["HOUR 00","HOUR 02","HOUR 06","HOUR 10","HOUR 18","HOUR 24","HOUR 36","HOUR 48","HOUR 60","HOUR 72"]
];
const ENERGY_COLORS=["#6fe3ee","#91eccf","#ffd28f","#b9b4ff","#ffbd99"];
function energyGraphic(m,q){
 const accent=ENERGY_COLORS[m%5],label=ENERGY_SCENES[m%5][q%10],seed=m*10+q+1;
 const grid=Array.from({length:15},(_,k)=>'<path d="M'+k*90+' 0V320" stroke="#527b98" opacity=".14"/>').join("");
 const bars=Array.from({length:11},(_,k)=>'<rect x="'+(594+k*49)+'" y="'+(230-((k*31+seed*17)%118))+'" width="26" height="'+(24+((k*31+seed*17)%118))+'" rx="6" fill="'+accent+'" opacity="'+(.20+k*.055)+'"/>').join("");
 const wave=Array.from({length:24},(_,k)=>(k?"L":"M")+(550+k*27)+" "+(160+Math.sin(k*.76+seed*.35)*23+Math.cos(k*.24+seed)*12)).join(" ");
 const symbol=m===0?'<path d="M966 52l-45 91h44l-23 92 111-130h-58l17-53z" fill="'+accent+'" opacity=".85"/>':
 m===1?'<path d="M895 205h210M924 205v-85h40v85M991 205v-119h40v119M1058 205v-52h37v52" stroke="'+accent+'" stroke-width="7" fill="none"/>':
 m===2?'<rect x="911" y="76" width="176" height="146" rx="18" stroke="'+accent+'" fill="none" stroke-width="10"/><path d="M980 97l-33 75h37l-18 37 70-78h-44l15-34z" fill="'+accent+'"/>':
 m===3?'<path d="M940 219l26-134h74l26 134M947 176h113M955 130h95" stroke="'+accent+'" stroke-width="10" stroke-linecap="round" fill="none"/>':
 '<circle cx="1000" cy="151" r="89" stroke="'+accent+'" fill="none" stroke-width="11"/><path d="M1000 95v57l42 27" stroke="'+accent+'" stroke-width="11" stroke-linecap="round" fill="none"/>';
 const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 320" width="1200" height="320"><defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#143751"/><stop offset="1" stop-color="#071725"/></linearGradient></defs><rect width="1200" height="320" fill="url(#bg)"/>'+grid+'<circle cx="'+(730+seed%4*30)+'" cy="92" r="172" fill="'+accent+'" opacity=".05"/><rect x="38" y="32" width="154" height="45" rx="11" fill="'+accent+'" opacity=".14"/><text x="54" y="61" font-family="Arial" font-size="21" font-weight="800" fill="'+accent+'">MISSION '+String(m+1).padStart(2,"0")+'</text><text x="38" y="139" font-family="Arial" font-size="38" font-weight="800" fill="#fff">'+label+'</text><text x="38" y="185" font-family="Arial" font-size="22" fill="#c4d9e7">ENERGY SECURITY  /  RESILIENCE</text><path d="M38 223h435" stroke="'+accent+'" stroke-width="3" opacity=".6"/><text x="38" y="274" font-family="Arial" font-size="19" fill="#c5deec">DECISION '+String(q+1).padStart(2,"0")+' / 10  ·  ILLUSTRATIVE SCENARIO</text><g opacity=".35">'+bars+'</g><path d="'+wave+'" stroke="'+accent+'" stroke-width="4" fill="none" opacity=".6"/>'+symbol+'</svg>';
 return "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg);
}

function energyHero(){
 const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="960" height="360" viewBox="0 0 960 360" role="img" aria-label="Illustration of energy infrastructure supporting aircraft operations">'
 +'<defs>'
 +'<linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#103952"/><stop offset=".52" stop-color="#0d2d42"/><stop offset="1" stop-color="#081c2c"/></linearGradient>'
 +'<radialGradient id="glow"><stop stop-color="#56dbe8" stop-opacity=".20"/><stop offset="1" stop-color="#56dbe8" stop-opacity="0"/></radialGradient>'
 +'<linearGradient id="flow"><stop stop-color="#69dde9"/><stop offset=".54" stop-color="#8bc5ff"/><stop offset="1" stop-color="#a7eed2"/></linearGradient>'
 +'<pattern id="mesh" width="46" height="46" patternUnits="userSpaceOnUse"><path d="M46 0H0V46" stroke="#90bcd3" stroke-opacity=".09" fill="none"/></pattern>'
 +'</defs>'
 +'<rect width="960" height="360" fill="url(#bg)"/><rect width="960" height="360" fill="url(#mesh)"/>'
 +'<ellipse cx="510" cy="178" rx="430" ry="245" fill="url(#glow)"/>'
 +'<path d="M54 284H909" stroke="#80b8d0" stroke-width="1" opacity=".15"/>'
 +'<path d="M180 179H777" stroke="#64dfe8" stroke-width="18" opacity=".055"/>'
 +'<path d="M180 179H777" stroke="url(#flow)" stroke-width="3.5" stroke-dasharray="14 13" stroke-linecap="round" opacity=".85"/>'
 +'<path d="M180 179L318 179 365 129 425 129 477 179 554 179 600 223 652 223 780 179" stroke="#6edce4" stroke-width="1.2" fill="none" opacity=".38"/>'
 +'<circle cx="180" cy="179" r="92" fill="#0c3347" stroke="#67c6d3" stroke-width="1.5" stroke-opacity=".52"/>'
 +'<circle cx="180" cy="179" r="76" fill="none" stroke="#66ccda" stroke-width="1" stroke-dasharray="3 9" opacity=".48"/>'
 +'<path d="M152 233L179 112 207 233 M163 184H194 M158 205H201 M166 164H191" stroke="#a1e7ed" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
 +'<path d="M148 149L124 168 152 180 M207 149L233 168 205 180" stroke="#65bbd4" stroke-width="3" fill="none" opacity=".65"/>'
 +'<path d="M114 168L77 157M246 168L281 157" stroke="#65bbd4" stroke-width="2.5" fill="none" opacity=".58"/>'
 +'<circle cx="477" cy="179" r="72" fill="#0d3b4d" stroke="#7edcf0" stroke-width="1.6" stroke-opacity=".6"/>'
 +'<circle cx="477" cy="179" r="55" fill="none" stroke="#74dce8" stroke-opacity=".28" stroke-width="1"/>'
 +'<rect x="442" y="139" width="70" height="80" rx="12" fill="#153d55" stroke="#b1e7f5" stroke-width="3"/>'
 +'<path d="M454 158H500 M454 170H500" stroke="#73bed3" stroke-width="3" opacity=".45"/>'
 +'<path d="M473 182l-9 15h12l-6 15 20-22h-13l5-8z" fill="#8ff0e0"/>'
 +'<rect x="464" y="131" width="26" height="8" rx="2" fill="#9be8ea" opacity=".75"/>'
 +'<circle cx="780" cy="179" r="103" fill="#0c2c40" stroke="#7dabbf" stroke-opacity=".42" stroke-width="1.6"/>'
 +'<circle cx="780" cy="179" r="88" fill="none" stroke="#7dabbf" stroke-opacity=".25" stroke-dasharray="4 10"/>'
 +'<path d="M780 88C789 94 792 113 792 130V165L871 206V224L792 200V254L820 270V281L780 271 740 281V270L768 254V200L689 224V206L768 165V130C768 113 771 94 780 88Z" fill="#c3e3ee" fill-opacity=".16" stroke="#b4e5f0" stroke-width="4" stroke-linejoin="round"/>'
 +'<path d="M780 117V267" stroke="#7cd2e7" stroke-width="2" opacity=".52"/>'
 +'<circle cx="325" cy="179" r="6" fill="#8ee7eb"/><circle cx="627" cy="179" r="6" fill="#a4e2d4"/>'
 +'<path d="M180 64V44 M477 95V64 M780 66V42" stroke="#a4e3e6" stroke-width="2" opacity=".38"/>'
 +'<circle cx="180" cy="39" r="4" fill="#9adddf" opacity=".55"/><circle cx="780" cy="36" r="4" fill="#9adddf" opacity=".55"/>'
 +'</svg>';
 return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
}

Object.assign(IMG,{
 aircraft:energyGraphic(4,8),titanium:energyGraphic(2,5),carbon:energyGraphic(1,5),
 aluminum:energyGraphic(1,3),machining:energyGraphic(3,7),ingots:energyGraphic(0,0),
 factory:energyGraphic(3,0),flightline:energyHero(),
 grid:energyGraphic(0,2),solar:energyGraphic(2,0),storage:energyGraphic(2,1),
 backup:energyGraphic(2,4),demand:energyGraphic(1,0),control:energyGraphic(3,3)
});
QUESTION_GALLERY.forEach((g,i)=>g.forEach((v,j)=>{g[j]=energyGraphic(i,j)}));
GALLERY.splice(0,GALLERY.length,["grid","solar","backup","control"],["demand","storage","solar","factory"],["solar","storage","backup","grid"],["control","factory","storage","backup"],["backup","grid","control","demand"]);
if(MISSIONS.length!==5||MISSIONS.some(m=>m.questions.length!==10)||THEORY.some(g=>g.length!==5)||QUESTION_GALLERY.length!==5)throw Error("Mission Energy content validation failed");
