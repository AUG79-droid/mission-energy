// Bilingual decision bank. Professional rewrite candidate: mission 1.
const ENERGY_DATA={
  "titles": [
    [
      "Interrupción del suministro",
      "Supply disruption",
      "Dependencias y puntos de fallo",
      "Dependencies and failure points",
      "Con una alerta energética en una instalación de soporte, identifica dependencias y prioridades antes de seleccionar soluciones.",
      "With an energy alert at a support facility, identify dependencies and priorities before selecting solutions."
    ],
    [
      "Eficiencia que protege misiones",
      "Efficiency that protects missions",
      "Cargas esenciales y demanda flexible",
      "Essential loads and demand flexibility",
      "La potencia disponible se reduce. Conserva funciones críticas evitando consumos innecesarios y desplazando operaciones autorizadas.",
      "Available power is reduced. Protect critical functions by eliminating waste and shifting approved non-essential operations."
    ],
    [
      "Diversificar el suministro",
      "Diversifying supply",
      "Fuentes, almacenamiento y respaldo",
      "Sources, storage and backup",
      "Evalúa opciones de suministro complementarias sin confundir compras renovables con autonomía física.",
      "Assess complementary energy options without confusing renewable purchasing with physical autonomy."
    ],
    [
      "Infraestructura preparada",
      "Infrastructure readiness",
      "Mantenimiento, clima y recuperación",
      "Maintenance, weather and recovery",
      "Examina la capacidad de una infraestructura genérica de sostener y recuperar operaciones con seguridad.",
      "Assess the ability of a generic facility to sustain and safely restore operations."
    ],
    [
      "Desafío de las 72 horas",
      "The 72-hour challenge",
      "Resiliencia ante restricciones acumuladas",
      "Resilience under compounding constraints",
      "Simula una crisis ficticia de 72 horas; coordina cargas, seguridad, abastecimiento, información y recuperación.",
      "Simulate a fictional 72-hour crisis; coordinate loads, safety, supply, information and recovery."
    ]
  ],
  "rows": [
    [
      [
        "Un ensayo de certificación requiere control, registro y refrigeración. Un análisis confirma riesgo de cortes de 2 h. ¿Qué información necesitas primero para especificar una solución de continuidad?|A certification test needs controls, recording and cooling. Analysis identifies a risk of two-hour outages. What information do you need first to specify a continuity solution?",
        "Las funciones imprescindibles, demanda y picos, interrupción tolerable y condiciones de reinicio.|Essential functions, demand and peaks, tolerable interruption and restart conditions.",
        "El consumo anual del área, los precios horarios y la potencia contratada.|Annual area consumption, hourly prices and contracted power.",
        "La potencia nominal de los equipos de respaldo y el coste de instalar otros iguales.|Backup equipment nameplate power and the cost of installing identical units.",
        "La solución debe proteger el ensayo, no solamente cubrir una cantidad de energía. Consumo anual y catálogo de equipos sirven para otras fases, pero no determinan la demanda crítica ni el tiempo de transferencia admisible.|The solution must protect the test, not just deliver an amount of energy. Annual consumption and equipment catalogues help later, but do not determine critical demand or allowable transfer time."
      ],
      [
        "Dos ofertas cubren el mismo consumo anual: A, electricidad renovable con garantías de origen; B, electricidad de mix convencional y respaldo independiente probado para 4 h. El objetivo es mantener una función durante un corte de 3 h. ¿Qué conclusión es defendible?|Two offers cover the same annual consumption: A, renewable electricity with guarantees of origin; B, conventional mix electricity with independent backup tested for four hours. The objective is maintaining a function during a three-hour outage. What conclusion is defensible?",
        "B aporta evidencia de continuidad si las condiciones de prueba cubren la función; A aporta un atributo ambiental, no una garantía de respaldo.|B provides continuity evidence if test conditions cover the function; A provides an environmental attribute, not a backup guarantee.",
        "A aporta mayor resiliencia porque diversifica el origen de generación contratado.|A offers greater resilience because it diversifies contracted generation sources.",
        "Ambas aportan la misma resiliencia porque cubren idéntico consumo anual.|Both offer equal resilience because they cover identical annual consumption.",
        "El objetivo se refiere a servicio durante un corte, no al balance anual. B debe contrastarse con carga, transición y condiciones de prueba; las garantías de origen no demuestran una ruta física alternativa.|The objective concerns service during an outage, not the annual balance. B must be checked against load, transfer and test conditions; guarantees of origin do not demonstrate an alternative physical path."
      ],
      [
        "Dos líneas de 100 kW alimentan una carga esencial de 70 kW. Ambas pasan por un transformador común. ¿Qué mejora aborda directamente el fallo de ese transformador?|Two 100 kW feeders supply a 70 kW essential load. Both pass through a common transformer. Which improvement directly addresses failure of that transformer?",
        "Evaluar una ruta de suministro independiente que pueda entregar al menos 70 kW en las condiciones requeridas.|Assess an independent supply path able to deliver at least 70 kW under required conditions.",
        "Aumentar ambas líneas a 150 kW conservando el transformador compartido.|Increase both feeders to 150 kW while keeping the shared transformer.",
        "Contratar mantenimiento prioritario del transformador y mantener las dos líneas actuales.|Contract priority transformer maintenance and retain the two existing feeders.",
        "La capacidad de las líneas no elimina la dependencia común. El mantenimiento puede reducir frecuencia o duración del fallo, pero una ruta independiente aborda la pérdida del transformador. Su capacidad y transferencia deben verificarse.|Feeder capacity does not remove the common dependency. Maintenance may reduce failure frequency or duration, but an independent path addresses transformer loss. Its capacity and transfer must be verified."
      ],
      [
        "Una batería dispone de 360 kWh útiles y entrega hasta 65 kW. La carga es 45 kW durante las primeras 4 h y 30 kW después. ¿Cuánto tiempo total puede cubrir teóricamente?|A battery has 360 usable kWh and delivers up to 65 kW. Load is 45 kW for the first four hours and 30 kW thereafter. What total duration can it theoretically cover?",
        "10 horas.|10 hours.",
        "8 horas.|8 hours.",
        "12 horas.|12 hours.",
        "Las primeras 4 h consumen 180 kWh. Los 180 kWh restantes permiten 6 h a 30 kW: total 10 h. Dividir toda la energía por 45 o por 30 kW ignora el cambio de demanda. No se han añadido márgenes ni pérdidas adicionales, porque la energía indicada ya es útil.|The first four hours use 180 kWh. The remaining 180 kWh allow six hours at 30 kW: total ten hours. Dividing all energy by 45 or 30 kW ignores changing demand. No additional margins or losses have been added because the stated energy is already usable."
      ],
      [
        "Se comparan dos respaldos diésel de distintos fabricantes frente a un corte regional de 24 h. Ambos dependen de la misma entrega de combustible cada 8 h. ¿Qué análisis aporta más información sobre su independencia?|Two diesel backup units from different manufacturers are compared for a 24-hour regional outage. Both depend on the same fuel delivery every eight hours. Which analysis gives most insight into their independence?",
        "Comprobar reservas útiles, consumo a carga prevista, rutas de entrega y alternativas logísticas bajo el corte regional.|Check usable reserves, consumption at expected load, delivery routes and logistics alternatives under the regional outage.",
        "Comparar sus tasas de fallo mecánico y elegir el fabricante más fiable.|Compare mechanical failure rates and select the more reliable manufacturer.",
        "Verificar que ambos equipos tienen potencia suficiente para alimentar individualmente la carga.|Verify both units have sufficient power to supply the load individually.",
        "La pregunta se refiere a dependencia logística compartida. Fiabilidad mecánica y potencia son necesarias para el análisis completo, pero no aclaran si ambos equipos perderían combustible durante el mismo incidente.|The question concerns shared logistics dependency. Mechanical reliability and power matter to the complete analysis but do not show whether both units would lose fuel in the same incident."
      ],
      [
        "El control de un proceso admite 30 s de interrupción, la refrigeración admite 2 min y el respaldo de 80 kW tarda 5 min en asumir carga. Las dos funciones suman 40 kW. ¿Qué decisión es prioritaria antes de comprometer la continuidad?|Process controls tolerate a 30-second interruption, cooling tolerates two minutes, and an 80 kW backup takes five minutes to assume load. Both functions total 40 kW. What is the priority before committing to continuity?",
        "Evaluar una transición compatible con ambos límites o un modo de parada segura validado.|Assess a transfer solution compatible with both limits or a validated safe shutdown mode.",
        "Elevar la potencia del respaldo a 100 kW manteniendo la transición de cinco minutos.|Increase backup rating to 100 kW while retaining five-minute transfer.",
        "Mantener el respaldo de 80 kW y dedicar más presupuesto a combustible para aumentar autonomía.|Retain the 80 kW backup and spend more on fuel to increase autonomy.",
        "Existe capacidad de potencia, pero los dos límites de interrupción se incumplen. Aumentar potencia o duración no cierra esa brecha temporal. La transición y la validez del proceso deben comprobarse.|Power capacity is sufficient but both interruption limits are exceeded. More power or longer duration does not close this timing gap. Transfer and process validity must be verified."
      ],
      [
        "Dos baterías de 180 kWh cada una están en salas diferentes, pero ambas dependen del mismo inversor de 50 kW. La carga esencial es 40 kW. ¿Qué diagnóstico es correcto ante la pérdida del inversor?|Two 180 kWh batteries are in separate rooms but both depend on one 50 kW inverter. Essential load is 40 kW. What is the correct diagnosis for inverter failure?",
        "La energía almacenada puede quedar inaccesible: hay que evaluar una ruta de conversión alternativa compatible.|Stored energy may become inaccessible: assess a compatible alternative conversion path.",
        "La separación de salas conserva al menos 180 kWh entregables y garantiza 4,5 h.|Separate rooms preserve at least 180 deliverable kWh and guarantee 4.5 hours.",
        "La autonomía se reduce a la mitad porque queda una sola batería como respaldo.|Autonomy halves because only one battery remains as backup.",
        "Los dos depósitos siguen existiendo, pero el elemento común de conversión puede impedir entregar energía. No se puede calcular autonomía efectiva dividiendo energía almacenada entre demanda si falla la ruta de entrega.|Both energy stores remain, but the shared conversion component may prevent delivery. Effective autonomy cannot be calculated by dividing stored energy by demand when the delivery path fails."
      ],
      [
        "Una fuente tiene 480 kWh útiles y potencia máxima de 50 kW. Debe alimentar 35 kW continuos y durante 15 min una carga adicional de 20 kW. ¿Cumple una misión de 10 h sin otra fuente?|A source has 480 usable kWh and maximum power of 50 kW. It must supply 35 kW continuously and an additional 20 kW for 15 minutes. Does it meet a ten-hour mission without another source?",
        "No: la energía sería suficiente (355 kWh), pero el pico de 55 kW supera su potencia.|No: energy is sufficient (355 kWh), but the 55 kW peak exceeds its power rating.",
        "Sí: necesita 355 kWh, por debajo de los 480 kWh disponibles.|Yes: it needs 355 kWh, below the available 480 kWh.",
        "No: las dos cargas suman 55 kW y requieren 550 kWh durante toda la misión.|No: both loads total 55 kW and require 550 kWh throughout the mission.",
        "Energía = 35 × 10 + 20 × 0,25 = 355 kWh. Potencia máxima demandada = 55 kW. Deben cumplirse ambas restricciones; la carga adicional no se mantiene diez horas.|Energy = 35 × 10 + 20 × 0.25 = 355 kWh. Peak demand = 55 kW. Both constraints must be met; the additional load does not run for ten hours."
      ],
      [
        "Una prueba registra que la batería mantuvo 40 kW durante 6 h. El proceso requiere esa carga durante 8 h. Una propuesta reduce 10 kW de consumo. ¿Qué aprobación permite avanzar con rigor?|A test records that a battery maintained 40 kW for six hours. The process requires that load for eight hours. A proposal reduces consumption by 10 kW. What approval enables rigorous progress?",
        "Validar que el proceso conserva sus prestaciones y repetir la prueba con 30 kW y las condiciones objetivo.|Validate that process performance is preserved and repeat the test at 30 kW under target conditions.",
        "Aceptar la propuesta con el cálculo de 240 kWh / 30 kW = 8 h como evidencia suficiente.|Accept the proposal using 240 kWh / 30 kW = 8 h as sufficient evidence.",
        "Descartar la propuesta porque el ensayo previo no alcanzó 8 h a 40 kW.|Reject the proposal because the previous test did not reach eight hours at 40 kW.",
        "El cálculo indica viabilidad teórica, sin margen y suponiendo idéntica energía útil. Debe comprobarse que reducir carga no perjudica el servicio, y verificar la duración con las condiciones de uso. El ensayo anterior no prueba ni descarta por sí solo la nueva configuración.|The calculation indicates theoretical feasibility, with no margin and assuming identical usable energy. Verify that the lower load preserves service, and test duration under use conditions. The previous test neither proves nor rules out the new configuration on its own."
      ],
      [
        "Una función de 45 kW dispone de 270 kWh útiles. Una alternativa añade 180 kWh y el objetivo es mantener la función durante 9 h. ¿Qué mensaje presentarías al responsable de programa?|A 45 kW function has 270 usable kWh. An alternative adds 180 kWh and the target is maintaining the function for nine hours. What message would you give the programme manager?",
        "La autonomía teórica pasa de 6 a 10 h, con 1 h de margen calculado; falta validar potencia, transición, condiciones de funcionamiento y coste.|Theoretical autonomy rises from six to ten hours, with a one-hour calculated margin; power, transfer, operating conditions and cost still need validation.",
        "La alternativa elimina el riesgo de interrupción y mejora la disponibilidad anual aproximadamente un 67 %.|The alternative eliminates outage risk and improves annual availability by approximately 67%.",
        "La alternativa permite evitar 3 horas de interrupción por cada fallo futuro y justifica la inversión por sí sola.|The alternative avoids three hours of interruption for every future failure and justifies investment on its own.",
        "270 / 45 = 6 h; (270 + 180) / 45 = 10 h. Margen frente al objetivo: 1 h. El aumento aproximado del 67 % es de autonomía teórica, no de disponibilidad anual. No se puede garantizar el resultado de todos los fallos ni la rentabilidad sin escenarios, costes y evidencias adicionales.|270 / 45 = 6 h; (270 + 180) / 45 = 10 h. Margin over target: one hour. The approximate 67% increase is theoretical autonomy, not annual availability. Outcomes for all failures and return on investment cannot be guaranteed without further scenarios, costs and evidence."
      ]
    ],
    [
      [
        "Hay 80 kW disponibles. Seguridad y conservación requieren 50 kW; un ensayo flexible requiere 45 kW. ¿Qué decisión mantiene las funciones críticas?|80 kW is available. Safety and preservation require 50 kW; a flexible test requires 45 kW. Which decision preserves critical functions?",
        "Reservar 50 kW para las funciones críticas y reprogramar el ensayo con autorización.|Reserve 50 kW for critical functions and reschedule the test with authorisation.",
        "Ejecutar todo: 95 kW es aceptable durante cuatro horas.|Run everything: 95 kW is acceptable for four hours.",
        "Reducir las cargas de seguridad a 35 kW sin validar.|Reduce safety loads to 35 kW without validation.",
        "95 kW supera los 80 disponibles. Las funciones críticas caben y quedan 30 kW; el ensayo requiere reprogramación.|95 kW exceeds the available 80. Critical functions fit, leaving 30 kW; the test needs rescheduling."
      ],
      [
        "Una sala desocupada sigue iluminada. ¿Qué hacer?|An empty room remains fully lit. What is appropriate?",
        "Controlar iluminación preservando seguridad y emergencia.|Control lighting while preserving safety and emergency requirements.",
        "Eliminar alumbrado de emergencia.|Remove emergency lighting.",
        "Ignorar el consumo indefinidamente.|Ignore demand indefinitely.",
        "Eliminar consumo evitable libera capacidad.|Avoiding unnecessary demand releases capacity."
      ],
      [
        "Dos procesos flexibles crean un pico simultáneo. ¿Qué propuesta sirve?|Two flexible processes create a shared peak. What helps?",
        "Escalonar operaciones con autorización técnica.|Stagger operations with technical authorisation.",
        "Desactivar protecciones.|Disable protective devices.",
        "Cambiar horarios sin informar.|Change schedules without informing teams.",
        "La flexibilidad puede reducir picos sin perder resultados.|Flexibility can reduce peaks without losing output."
      ],
      [
        "Se anuncia un ahorro sin línea base. ¿Qué falta?|A saving is announced without a baseline. What is missing?",
        "Método, periodo y variables de comparación.|Method, period and comparison variables.",
        "Una cifra de ahorro mayor.|A larger savings number.",
        "Más gráficos decorativos.|More decorative charts.",
        "Sin referencia verificable no puede demostrarse la mejora.|Without a verifiable baseline, improvement cannot be demonstrated."
      ],
      [
        "Se detectan fugas de aire comprimido. ¿Qué conviene?|Compressed-air leaks are found. What is appropriate?",
        "Repararlas y medir la reducción de pérdidas.|Repair them and measure loss reduction.",
        "Aumentar presión sin estudio.|Increase pressure without assessment.",
        "Desactivar el sistema de seguridad.|Disable the safety system.",
        "Corregir pérdidas favorece eficiencia y disponibilidad.|Fixing losses supports efficiency and availability."
      ],
      [
        "Un material necesita temperatura controlada. ¿Puede apagarse climatización?|Materials need controlled temperature. May climate control be switched off?",
        "Solo si responsables validan límites y conformidad.|Only if owners validate limits and compliance.",
        "Sí, siempre que suba la tarifa.|Yes, whenever tariffs rise.",
        "Sí, la climatización nunca es esencial.|Yes, climate control is never essential.",
        "La preservación de materiales puede ser una función crítica.|Material preservation may be a critical function."
      ],
      [
        "¿Qué significa gestionar flexibilidad de demanda?|What is demand flexibility?",
        "Desplazar cargas autorizadas manteniendo el servicio.|Shifting approved loads while preserving service.",
        "Eliminar mantenimiento preventivo.|Eliminating preventive maintenance.",
        "Alterar procesos sin autorización.|Altering processes without authorisation.",
        "La función se conserva mientras cambia el momento de consumo.|The function is preserved while demand timing changes."
      ],
      [
        "Baja el consumo porque hay menos producción. ¿Hay mejora probada?|Consumption falls as production falls. Is efficiency improvement proven?",
        "No; debe normalizarse por actividad relevante.|No; it must be normalised for relevant activity.",
        "Sí, cualquier descenso prueba eficiencia.|Yes, any decline proves efficiency.",
        "Sí, ya no hace falta medir.|Yes, measurement is no longer needed.",
        "Consumo absoluto y desempeño energético son diferentes.|Absolute energy use and energy performance differ."
      ],
      [
        "Una reserva útil de 300 kWh alimenta 60 kW esenciales y 40 kW desplazables. ¿Qué cambia si se desplaza la carga flexible autorizada?|A 300 kWh usable reserve supplies 60 kW essential and 40 kW shiftable demand. What changes if the approved flexible load is deferred?",
        "La autonomía teórica pasa de 3 a 5 horas, sin reducir la carga esencial.|Theoretical autonomy rises from 3 to 5 hours without reducing essential load.",
        "La autonomía permanece en 3 horas.|Autonomy remains 3 hours.",
        "La autonomía pasa a 7,5 horas porque se divide por la carga desplazada.|Autonomy rises to 7.5 hours by dividing by the deferred load.",
        "300/100 = 3 h; 300/60 = 5 h. La flexibilidad aumenta la autonomía bajo los supuestos indicados.|300/100 = 3 h; 300/60 = 5 h. Flexibility increases autonomy under the stated assumptions."
      ],
      [
        "¿Cómo verificar que una medida no degrada el servicio?|How do you verify that a measure does not degrade service?",
        "Revisar energía, seguridad, calidad y disponibilidad.|Review energy, safety, quality and availability.",
        "Mirar solo el ahorro mensual.|Look only at monthly savings.",
        "Dar por bueno todo descenso de consumo.|Accept every consumption reduction.",
        "Eficiencia y continuidad deben evaluarse juntas.|Efficiency and continuity must be assessed together."
      ]
    ],
    [
      [
        "¿Funcionan paneles solares conectados a red durante cualquier apagón?|Will grid-tied solar work through every blackout?",
        "No; requiere arquitectura de isla autorizada y protecciones.|No; approved islanding architecture and protection are needed.",
        "Sí, siempre.|Yes, always.",
        "Sí, por tener garantías de origen.|Yes, if guarantees of origin exist.",
        "Generación renovable no significa respaldo automático.|Renewable generation is not automatic backup."
      ],
      [
        "Una batería dispone de 400 kWh útiles, pero solo puede entregar 50 kW. La función requiere 80 kW. ¿Puede mantenerla por sí sola?|A battery has 400 usable kWh but can deliver only 50 kW. The function requires 80 kW. Can it sustain the function alone?",
        "No: falta potencia, aunque la energía almacenada parezca suficiente.|No: power is insufficient even though stored energy appears sufficient.",
        "Sí: 400/80 = 5 horas de respaldo garantizado.|Yes: 400/80 = 5 hours of guaranteed backup.",
        "Sí: la potencia máxima no afecta a la autonomía.|Yes: maximum power does not affect autonomy.",
        "El límite de 50 kW impide alimentar 80 kW. Deben cumplirse simultáneamente potencia y energía.|The 50 kW limit cannot support 80 kW. Both power and energy constraints must be satisfied."
      ],
      [
        "Dos generadores comparten combustible. ¿Son totalmente independientes?|Two generators share fuel. Are they fully independent?",
        "No; comparten una dependencia logística.|No; they share a logistics dependency.",
        "Sí, porque son dos máquinas.|Yes, because two units exist.",
        "Sí, si son del mismo color.|Yes, if they are the same colour.",
        "Los modos de fallo comunes importan más que el recuento.|Shared failure modes matter more than equipment count."
      ],
      [
        "Un contrato renovable cubre consumo anual. ¿Qué no demuestra?|A renewable contract covers annual demand. What does it not prove?",
        "Suministro físico instantáneo durante contingencias.|Instant physical supply during disruption.",
        "Un atributo contractual.|A contractual attribute.",
        "Un documento de compra.|A purchase document.",
        "La cobertura anual no equivale a respaldo operativo.|Annual coverage is not operational backup."
      ],
      [
        "Una carga de 60 kW necesita 8 h. A: 480 kWh útiles, 70 kW, pero comparte la subestación que falla. B: 540 kWh útiles, 70 kW y ruta independiente verificada. ¿Cuál cubre el escenario descrito?|A 60 kW load needs 8 h. A: 480 usable kWh, 70 kW, but shares the failed substation. B: 540 usable kWh, 70 kW and a verified independent path. Which covers the stated scenario?",
        "B: cubre potencia y 480 kWh requeridos, sin el fallo común indicado.|B: it covers power and the required 480 kWh without the specified common failure.",
        "A: 480 kWh bastan aunque la ruta esté interrumpida.|A: 480 kWh is enough even if its path is interrupted.",
        "Ambas por igual: solo importa la capacidad nominal.|Both equally: only rated capacity matters.",
        "B cumple los requisitos del supuesto. A no está disponible durante ese fallo. Costes, protecciones y otras dependencias siguen pendientes.|B meets the stated requirements. A is unavailable during that failure. Costs, protection and other dependencies still require review."
      ],
      [
        "¿Qué validación necesita una microred antes de usarse?|What validation does a microgrid need before reliance?",
        "Transferencia, protección, control y reconexión ensayadas.|Tested transfer, protection, control and reconnection.",
        "Solo una animación comercial.|Only a commercial animation.",
        "Ninguna prueba si tiene software moderno.|No tests if it uses modern software.",
        "La continuidad en isla requiere ingeniería y pruebas.|Islanded continuity needs engineering and testing."
      ],
      [
        "El almacenamiento depende de repuestos remotos. ¿Qué estudiar?|Storage relies on distant spare parts. What should be studied?",
        "Logística, reparabilidad y sustitución de componentes.|Logistics, repairability and replacement of components.",
        "Solo aspecto exterior.|Exterior appearance only.",
        "Nada, porque las baterías no fallan.|Nothing, because batteries never fail.",
        "Diversificar una fuente puede crear nuevas dependencias.|Diversifying sources can create new dependencies."
      ],
      [
        "La demanda máxima es nocturna y la solar diurna. ¿Qué analizar?|Peak demand is nocturnal and solar output daytime. What matters?",
        "Coincidencia horaria, flexibilidad y almacenamiento.|Time matching, flexibility and storage.",
        "Solo energía total anual.|Only total annual energy.",
        "Ignorar las horas nocturnas.|Ignore nighttime hours.",
        "El momento de producción afecta a la utilidad operativa.|Generation timing affects operational usefulness."
      ],
      [
        "Un vendedor garantiza «cero riesgo energético». ¿Qué pedir?|A supplier promises “zero energy risk”. What should you ask for?",
        "Escenarios, pruebas y riesgos residuales.|Scenarios, tests and residual risks.",
        "Aceptar el lema.|Accept the slogan.",
        "Eliminar auditorías.|Eliminate audits.",
        "Las afirmaciones absolutas no sustituyen evidencias.|Absolute claims cannot replace evidence."
      ],
      [
        "¿Qué estrategia proporciona protección en capas?|Which strategy offers layered protection?",
        "Eficiencia, flexibilidad, fuentes y respaldo probado.|Efficiency, flexibility, sources and tested backup.",
        "Una sola tecnología milagrosa.|One miracle technology.",
        "Cambiar el contrato sin revisar la red.|Change contracts without reviewing the grid.",
        "Las distintas defensas cubren fallos distintos.|Different safeguards address different failures."
      ]
    ],
    [
      [
        "Un respaldo no se prueba desde hace meses. ¿Qué proceder?|Backup has not been tested for months. What is appropriate?",
        "Prueba autorizada bajo condiciones seguras.|An authorised test under safe conditions.",
        "Declararlo disponible sin evidencias.|Declare availability without evidence.",
        "Probarlo sin supervisión.|Test it without supervision.",
        "La preparación requiere resultados comprobables.|Readiness requires verifiable results."
      ],
      [
        "Durante calor extremo, una fuente baja de 100 a 70 kW. La función crítica requiere 80 kW. ¿Qué adaptación evaluar?|During extreme heat, a source drops from 100 to 70 kW. The critical function needs 80 kW. What adaptation should be assessed?",
        "Protección térmica o respaldo independiente capaz de cubrir el déficit, verificando límites y ensayos.|Thermal protection or independent backup covering the shortfall, verifying limits and tests.",
        "Mantener la planificación de 100 kW porque es la potencia nominal.|Keep planning for 100 kW because that is the rated power.",
        "Aceptar 70 kW sin comprobar si la función sigue siendo segura.|Accept 70 kW without checking whether the function remains safe.",
        "Hay un déficit de 10 kW. La adaptación debe recuperar capacidad utilizable o proteger la función mediante una alternativa validada.|There is a 10 kW shortfall. Adaptation must restore usable capacity or protect the function with a validated alternative."
      ],
      [
        "Una inundación puede dejar fuera de servicio dos cuadros situados en la misma zona baja. ¿Qué propuesta reduce el fallo común?|Flooding may disable two switchboards in the same low-lying area. Which proposal reduces common failure?",
        "Evaluar protección o reubicación fuera de la exposición y una ruta alternativa independiente, con estudio hidráulico y eléctrico.|Assess protection or relocation outside exposure and an independent alternative path, with hydraulic and electrical review.",
        "Duplicar otro cuadro en la misma zona sin protección adicional.|Duplicate another switchboard in the same area without extra protection.",
        "Aumentar la potencia contratada sin cambiar la exposición.|Increase contracted power without changing exposure.",
        "La duplicación en la misma zona no elimina la amenaza compartida. Deben evaluarse exposición, independencia y recuperación.|Duplication in the same area does not remove shared exposure. Assess exposure, independence and recovery."
      ],
      [
        "Una alarma OT aparece sin explicación. ¿Qué respuesta es correcta?|An unexplained OT alarm appears. What is appropriate?",
        "Seguir protocolo y escalar sin anular protecciones.|Follow protocol and escalate without bypassing protection.",
        "Desactivar la alarma.|Disable the alarm.",
        "Compartir credenciales abiertamente.|Share credentials openly.",
        "Seguridad y trazabilidad prevalecen sobre la prisa.|Safety and traceability outweigh haste."
      ],
      [
        "Existe un respaldo pero el personal desconoce el protocolo. ¿Qué falta?|Backup exists but staff do not know the response plan. What is missing?",
        "Roles, formación y simulacros autorizados.|Roles, training and authorised drills.",
        "Otro folleto comercial.|Another sales brochure.",
        "Más potencia sin formar al equipo.|More capacity without staff training.",
        "La preparación humana es parte de la continuidad.|Human readiness is part of continuity."
      ],
      [
        "Una pieza esencial tarda semanas. ¿Qué analizar?|A key replacement part takes weeks. What matters?",
        "Criticidad, existencias y alternativas cualificadas.|Criticality, inventories and qualified alternatives.",
        "Esperar siempre a que falle.|Always wait for failure.",
        "Instalar una pieza no compatible.|Install an incompatible part.",
        "La logística condiciona el tiempo de recuperación.|Logistics affects recovery time."
      ],
      [
        "Una tormenta puede cortar la línea exterior y la comunicación con el control remoto. ¿Qué medida aporta resiliencia?|A storm may cut the external feeder and remote-control communications. Which measure supports resilience?",
        "Evaluar una alimentación alternativa y un modo de control local seguro, con pruebas de pérdida simultánea.|Assess alternative power and safe local control, testing simultaneous loss.",
        "Contratar otro comercializador sobre la misma línea y mantener solo control remoto.|Contract another retailer on the same feeder and retain remote-only control.",
        "Probar cada sistema por separado y asumir que nunca fallan juntos.|Test each system separately and assume they never fail together.",
        "La tormenta puede afectar varias dependencias a la vez. La validación debe incluir el fallo combinado y la recuperación segura.|A storm can affect several dependencies at once. Validation should include combined failure and safe recovery."
      ],
      [
        "Se propone transferir fuentes automáticamente. ¿Qué debe validarse?|Automatic source transfer is proposed. What must be validated?",
        "Protecciones, enclavamientos y escenarios de fallo.|Protection, interlocks and failure scenarios.",
        "Ponerlo en producción sin ensayos.|Deploy without testing.",
        "Retirar controles manuales antes de aprobarlo.|Remove manual controls before approval.",
        "La automatización exige una validación segura.|Automation requires safe validation."
      ],
      [
        "Un simulacro descubre fallos de coordinación. ¿Qué hacer?|A drill reveals coordination failures. What should happen?",
        "Registrar causas, propietarios y acciones correctivas.|Record causes, owners and corrective actions.",
        "Anunciar éxito perfecto.|Announce perfect success.",
        "No dejar evidencia del fallo.|Leave no evidence of the failure.",
        "El aprendizaje real exige cerrar brechas.|Real learning requires closing gaps."
      ],
      [
        "¿Qué demuestra mejor capacidad de recuperación?|What better demonstrates recoverability?",
        "Tiempo de restablecimiento ensayado y acciones cerradas.|Tested restoration time and closed actions.",
        "Número de reuniones.|Number of meetings.",
        "Presupuesto inicial sin resultados.|Initial budget without outcomes.",
        "Los resultados verificados superan los compromisos genéricos.|Verified outcomes are stronger than generic commitments."
      ]
    ],
    [
      [
        "Hora 0: se alerta de un corte prolongado. ¿Qué primero?|Hour 0: a prolonged outage warning arrives. What comes first?",
        "Activar la coordinación prevista y verificar seguridad.|Activate designated coordination and check safety.",
        "Esperar al fallo generalizado.|Wait for widespread failure.",
        "Comunicar normalidad sin verificar.|Announce normality without checks.",
        "Una activación temprana reduce errores.|Early activation reduces errors."
      ],
      [
        "Hora 2: cae la potencia disponible. ¿Qué proteger?|Hour 2: available power declines. What should be protected?",
        "Cargas esenciales definidas y operaciones seguras.|Defined essential loads and safe operations.",
        "Todas las cargas hasta agotar reserva.|All loads until backup runs out.",
        "Solo las áreas más ruidosas.|Only the loudest departments.",
        "La capacidad limitada exige prioridades objetivas.|Limited capacity demands objective priorities."
      ],
      [
        "Hora 6: tensión inestable en un sistema sensible. ¿Qué hacer?|Hour 6: voltage instability affects sensitive equipment. What should happen?",
        "Aplicar la secuencia segura y escalar a responsables.|Follow safe procedures and escalate to owners.",
        "Ignorar las alertas.|Ignore alerts.",
        "Desactivar protecciones.|Disable safeguards.",
        "La presión de producción no justifica riesgos técnicos.|Production pressure cannot justify technical risks."
      ],
      [
        "Hora 10: quedan 360 kWh útiles y una carga esencial de 45 kW. La reposición se retrasa 12 h. ¿Qué conclusión debes escalar?|Hour 10: 360 usable kWh remain and essential load is 45 kW. Replenishment is delayed 12 h. What conclusion should be escalated?",
        "Autonomía teórica de 8 h; faltan 4 h de cobertura y se necesita una alternativa autorizada.|Theoretical autonomy is 8 h; 4 h of coverage are missing and an approved alternative is needed.",
        "Hay cobertura de 12 h porque 360 kWh es una reserva grande.|There is 12 h of coverage because 360 kWh is a large reserve.",
        "Se puede garantizar continuidad reduciendo cargas críticas sin validación.|Continuity can be guaranteed by reducing critical loads without validation.",
        "360/45 = 8 h. El déficit temporal es de 4 h bajo demanda constante; no autoriza cambios inseguros.|360/45 = 8 h. The time shortfall is 4 h at constant demand; this does not authorise unsafe changes."
      ],
      [
        "Hora 18: existe sol pero no red. ¿Qué comprobar?|Hour 18: sunlight is available but the grid is down. What should be checked?",
        "Capacidad de funcionamiento en isla verificada.|Verified islanding capability.",
        "Suponer que cualquier panel alimenta toda la planta.|Assume any panel powers the whole site.",
        "Anular protecciones de red.|Bypass grid protection.",
        "La generación solar no garantiza aislamiento operativo.|Solar generation does not guarantee islanded operation."
      ],
      [
        "Hora 24: piden reanudar un ensayo no esencial. ¿Qué decides?|Hour 24: a non-essential test is requested. What do you decide?",
        "Evaluar reserva, prioridad y autorización antes de programarlo.|Assess reserves, priority and approval before scheduling.",
        "Reactivarlo sin consultar.|Restart without consultation.",
        "Prohibir cualquier actividad futura.|Ban all future activities.",
        "Las prioridades se revisan con el escenario.|Priorities should evolve with the scenario."
      ],
      [
        "Hora 36: la demanda real sube de 40 a 50 kW. Quedan 200 kWh útiles. ¿Cómo cambia la previsión?|Hour 36: actual demand rises from 40 to 50 kW. 200 usable kWh remain. How does the forecast change?",
        "De 5 a 4 horas; actualizar el plan y comprobar el nuevo perfil.|From 5 to 4 hours; update the plan and check the new profile.",
        "De 5 a 6 horas porque aumenta la demanda.|From 5 to 6 hours because demand increases.",
        "No cambia porque la reserva es la misma.|It does not change because the reserve is unchanged.",
        "200/40 = 5 h; 200/50 = 4 h. La autonomía es sensible a la demanda.|200/40 = 5 h; 200/50 = 4 h. Autonomy is sensitive to demand."
      ],
      [
        "Hora 48: llegan instrucciones contradictorias. ¿Qué hacer?|Hour 48: contradictory instructions arrive. What is appropriate?",
        "Unificar mensajes y documentar decisiones.|Unify messages and log decisions.",
        "Dejar que cada área improvise.|Let every unit improvise.",
        "Distribuir rumores.|Spread rumours.",
        "La coordinación de información es parte de la resiliencia.|Information coordination is part of resilience."
      ],
      [
        "Hora 60: la red vuelve de forma intermitente. ¿Cómo reanudar?|Hour 60: grid supply returns intermittently. How should service resume?",
        "Seguir restablecimiento progresivo y seguro verificado.|Use a verified safe staged restoration.",
        "Arrancar todas las máquinas a la vez.|Restart all machines together.",
        "Desactivar protecciones para ganar tiempo.|Disable safeguards to save time.",
        "La recuperación exige coordinación técnica.|Restoration requires technical coordination."
      ],
      [
        "Hora 72: termina la crisis. ¿Qué informe sirve?|Hour 72: the event ends. What report is useful?",
        "Evidencias, impactos, autonomía y plan de acciones.|Evidence, impacts, autonomy and an action plan.",
        "Un comunicado de éxito sin datos.|A data-free success announcement.",
        "Solo coste diario de energía.|Only that day's energy cost.",
        "La mejora convierte las lecciones en medidas con responsables.|Improvement turns lessons into owned actions."
      ]
    ]
  ]
};
