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
        "El límite de potencia es 110 kW. La demanda simultánea es 125 kW. Una mejora validada libera 22 kW durante ese intervalo. ¿Cuál es el nuevo margen?|The power limit is 110 kW. Simultaneous demand is 125 kW. A validated improvement frees 22 kW in that interval. What is the new headroom?",
        "7 kW.|7 kW.",
        "22 kW.|22 kW.",
        "15 kW.|15 kW.",
        "125−22=103 kW; 110−103=7 kW. Los 22 kW son la reducción, no el margen; 15 kW era el déficit inicial.|125−22=103 kW; 110−103=7 kW. The 22 kW is the reduction, not headroom; 15 kW was the initial shortfall."
      ],
      [
        "A reduce 15 kW durante el pico de las 11 h; B reduce 30 kW únicamente de noche. El déficit a las 11 h es 12 kW. Ambas conservan el servicio. ¿Qué medida cubre ese déficit?|A cuts 15 kW at the 11 am peak; B cuts 30 kW only at night. The 11 am shortfall is 12 kW. Both preserve service. Which covers the shortfall?",
        "A, con 3 kW de margen durante el pico.|A, with 3 kW headroom during the peak.",
        "B, porque libera el doble de potencia.|B, because it frees twice the power.",
        "Ambas, porque las reducciones superan 12 kW.|Both, because both reductions exceed 12 kW.",
        "Importa la coincidencia temporal. B puede ahorrar energía, pero no modifica el déficit a las 11 h.|Timing matters. B may save energy but does not change the 11 am shortfall."
      ],
      [
        "De 8 a 10 h hay 25 kW de margen. A necesita 20 kW durante 2 h y vence a las 10 h. B necesita 15 kW durante 2 h y vence a las 14 h. De 10 a 14 h hay 20 kW de margen. ¿Qué plan cumple ambos plazos?|From 8 to 10 there is 25 kW headroom. A needs 20 kW for two hours and is due at 10. B needs 15 kW for two hours and is due at 14. From 10 to 14 there is 20 kW headroom. Which plan meets both deadlines?",
        "A de 8 a 10; B de 10 a 12.|A from 8 to 10; B from 10 to 12.",
        "B de 8 a 10; A de 10 a 12.|B from 8 to 10; A from 10 to 12.",
        "A y B de 8 a 10.|A and B from 8 to 10.",
        "A cabe en la primera franja y B en la segunda. La segunda opción incumple el plazo de A; la tercera requiere 35 kW frente a 25 disponibles.|A fits the first slot and B the second. The second option misses A's deadline; the third needs 35 kW against 25 available."
      ],
      [
        "Una tarea de 18 kW durante 3 h se traslada íntegramente a la noche, sin cambiar potencia ni duración. ¿Qué ahorro energético produce el desplazamiento por sí solo?|An 18 kW task lasting three hours moves entirely to night, with unchanged power and duration. What energy saving does shifting alone produce?",
        "0 kWh; desplaza 54 kWh a otra franja.|0 kWh; it shifts 54 kWh to another slot.",
        "54 kWh, porque desaparece del periodo diurno.|54 kWh, because it disappears from daytime.",
        "18 kWh, porque libera 18 kW durante el día.|18 kWh, because it frees 18 kW during daytime.",
        "18×3=54 kWh antes y después. Puede mejorar margen y coste, pero no reduce energía por sí mismo.|18×3=54 kWh before and after. It may improve headroom and cost but does not itself save energy."
      ],
      [
        "Antes: 120 ciclos equivalentes y 7.200 kWh. Después: 100 ciclos y 5.400 kWh. Sin efecto relevante de carga fija ni cambios de condiciones, ¿cuánto baja la intensidad?|Before: 120 equivalent cycles and 7,200 kWh. After: 100 cycles and 5,400 kWh. With no significant fixed-load effect or condition changes, how much does intensity fall?",
        "10 %.|10%.",
        "25 %.|25%.",
        "16,7 %.|16.7%.",
        "60 frente a 54 kWh/ciclo: (60−54)/60=10 %. 25 % es la reducción total y 16,7 % la caída de actividad.|60 versus 54 kWh/cycle: (60−54)/60=10%. 25% is total reduction and 16.7% is reduced activity."
      ],
      [
        "Una restricción deja 82 kW. Control 12 kW, refrigeración 45 kW y ventilación obligatoria 20 kW; un auxiliar aplazable requiere 18 kW. ¿Qué plan es viable con los requisitos dados?|A constraint leaves 82 kW. Controls 12 kW, cooling 45 kW and mandatory ventilation 20 kW; a deferrable auxiliary needs 18 kW. Which plan is feasible under the stated requirements?",
        "Aplazar el auxiliar: 77 kW y 5 kW de margen.|Defer the auxiliary: 77 kW and 5 kW headroom.",
        "Reducir refrigeración 15 kW sin validación y mantener el auxiliar.|Cut cooling by 15 kW without validation and retain the auxiliary.",
        "Parar control y mantener el resto: 83 kW.|Stop controls and retain the rest: 83 kW.",
        "La primera conserva todos los requisitos y respeta capacidad. Las otras eliminan o reducen funciones obligatorias sin justificación; la última además excede el límite.|The first preserves all requirements and respects capacity. The others remove or reduce mandatory functions without justification; the last also exceeds the limit."
      ],
      [
        "Tras una restricción quedan 35 kW de margen durante cuatro horas. Dos tareas aplazadas requieren 25 y 20 kW, dos horas cada una, sin dependencias y con plazo al final de la franja. ¿Qué plan evita el rebote?|After a constraint, 35 kW headroom remains for four hours. Two deferred tasks need 25 and 20 kW, two hours each, with no dependencies and due at the end of the slot. Which plan avoids rebound?",
        "Ejecutarlas consecutivamente, dos horas cada una.|Run them sequentially, two hours each.",
        "Arrancarlas juntas durante dos horas y dejar dos horas libres.|Start both together for two hours and leave two hours free.",
        "Ejecutar solo la de 25 kW y aplazar la otra más allá del plazo.|Run only the 25 kW task and defer the other beyond its deadline.",
        "La secuencia ocupa cuatro horas y no supera 35 kW. El arranque conjunto requiere 45 kW; aplazar más incumple el plazo.|Sequential operation takes four hours and stays within 35 kW. Concurrent operation requires 45 kW; further deferral misses the deadline."
      ],
      [
        "Un equipo de 8 kW mantiene el registro válido de ensayos; otro de 50 kW realiza una tarea aplazable. ¿Qué clasificación permite decidir durante una restricción?|An 8 kW unit maintains valid test records; a 50 kW unit performs a deferrable task. Which classification supports a decision during a constraint?",
        "Separar consumo significativo de criticidad: proteger el registro y evaluar el aplazamiento del otro equipo.|Separate significant consumption from criticality: protect recording and assess deferral of the other unit.",
        "Priorizar el equipo de 50 kW porque representa el mayor uso energético.|Prioritise the 50 kW unit because it is the larger energy use.",
        "Priorizar el equipo de 8 kW únicamente porque es el más eficiente.|Prioritise the 8 kW unit solely because it is more efficient.",
        "El registro es crítico por su función, no por consumir menos. El equipo mayor puede ser prioritario para eficiencia y aplazable durante una restricción.|Recording is critical because of its function, not its lower consumption. The larger unit may be an efficiency priority and deferrable during a constraint."
      ],
      [
        "Déficit de 18 kW. A libera 20 kW por 14.000 €; B libera 15 kW por 9.000 €. C libera otros 5 kW por 3.000 €, sin solapamiento con B y con prestaciones verificadas. ¿Qué opción viable tiene menor coste?|Shortfall 18 kW. A frees 20 kW for €14,000; B frees 15 kW for €9,000. C frees another 5 kW for €3,000, with no overlap with B and verified performance. Which feasible option costs least?",
        "B+C: 20 kW por 12.000 €.|B+C: 20 kW for €12,000.",
        "B: 15 kW por 9.000 €.|B: 15 kW for €9,000.",
        "A: 20 kW por 14.000 €.|A: 20 kW for €14,000.",
        "B+C y A cubren el déficit con 2 kW de margen; B+C cuesta menos. B sola no cumple el requisito.|B+C and A cover the shortfall with 2 kW headroom; B+C costs less. B alone fails the requirement."
      ],
      [
        "Un proyecto promete liberar 20 kW en el pico. La prueba comparable solo confirma 12 kW; el déficit previsto es 16 kW. ¿Qué comunicarías?|A project promises to free 20 kW at peak. A comparable test confirms only 12 kW; expected shortfall is 16 kW. What would you report?",
        "Quedan 4 kW de déficit; investigar desviación y evaluar medidas complementarias.|A 4 kW shortfall remains; investigate the deviation and assess complementary measures.",
        "La medida cubre el déficit porque el diseño preveía 20 kW.|The measure covers the shortfall because design predicted 20 kW.",
        "La medida es inútil porque no alcanza el objetivo inicial.|The measure is useless because it misses the initial target.",
        "La evidencia confirma una contribución parcial, no el cierre de la brecha. Hay que revisar supuestos y complementar la solución.|Evidence confirms a partial contribution, not closure of the gap. Review assumptions and complement the solution."
      ]
    ],
    [
      [
        "Dos fuentes independientes de 55 kW y 80 kW comparten un cuadro. La carga es 60 kW. Si falla la fuente de 80 kW, ¿qué ocurre suponiendo que el cuadro funciona?|Two independent 55 kW and 80 kW sources share a switchboard. Load is 60 kW. If the 80 kW source fails, what happens assuming the switchboard works?",
        "Quedan 55 kW: déficit de 5 kW.|55 kW remain: 5 kW shortfall.",
        "Quedan 135 kW porque las fuentes son independientes.|135 kW remain because sources are independent.",
        "Quedan 80 kW porque el cuadro sigue disponible.|80 kW remain because the switchboard remains available.",
        "La fuente superviviente entrega 55 kW. Independencia no garantiza capacidad suficiente.|The surviving source delivers 55 kW. Independence does not guarantee sufficient capacity."
      ],
      [
        "Una batería y un generador cubren individualmente la carga, pero comparten una sala expuesta a inundación. ¿Qué medida aborda el escenario de pérdida simultánea?|A battery and generator each cover the load but share a flood-exposed room. Which measure addresses simultaneous loss?",
        "Evaluar separación física y rutas independientes, verificando exposición y transferencia.|Assess physical separation and independent paths, verifying exposure and transfer.",
        "Aumentar la capacidad de ambos equipos en la misma sala.|Increase capacity of both units in the same room.",
        "Añadir un segundo proveedor de combustible sin cambiar la ubicación.|Add a second fuel supplier without changing location.",
        "La vulnerabilidad es exposición compartida. Capacidad y diversificación comercial no eliminan la pérdida simultánea por inundación.|The vulnerability is shared exposure. Capacity and commercial diversification do not eliminate simultaneous flood loss."
      ],
      [
        "Una instalación solar aislable aporta 35 kW durante 5 h; la carga es 50 kW. ¿Qué mínimo debe aportar el almacenamiento en ese intervalo?|An island-capable solar installation provides 35 kW for five hours; load is 50 kW. What minimum must storage provide in that interval?",
        "15 kW y 75 kWh útiles.|15 kW and 75 usable kWh.",
        "50 kW y 250 kWh útiles.|50 kW and 250 usable kWh.",
        "35 kW y 175 kWh útiles.|35 kW and 175 usable kWh.",
        "Déficit=50−35=15 kW; energía=15×5=75 kWh. Los otros valores corresponden a demanda total o generación solar.|Shortfall=50−35=15 kW; energy=15×5=75 kWh. Other values correspond to total demand or solar generation."
      ],
      [
        "Una planta solar de 200 kW nominales tiene inversores que se desconectan al perder red. ¿Qué evidencia permitiría contar con ella durante un corte?|A nominal 200 kW solar plant has inverters that disconnect on grid loss. What evidence would allow reliance on it during an outage?",
        "Configuración aislada autorizada y prueba integrada con generación y carga representativas.|Authorised island configuration and integrated test with representative generation and load.",
        "Histórico anual de generación superior al consumo anual.|Annual generation history exceeding annual consumption.",
        "Certificado de potencia nominal y contrato de mantenimiento.|Nameplate rating certificate and maintenance contract.",
        "El balance anual y la potencia nominal no demuestran funcionamiento aislado. Deben verificarse controles, protecciones y entrega.|Annual balance and nameplate rating do not demonstrate island operation. Controls, protection and delivery must be verified."
      ],
      [
        "Batería de 600 kWh nominales, completamente cargada, descarga permitida del 75 % y eficiencia de entrega del 80 %. ¿Energía útil calculada?|A fully charged 600 kWh nominal battery has a 75% permitted discharge window and 80% delivery efficiency. Calculated usable energy?",
        "360 kWh.|360 kWh.",
        "450 kWh.|450 kWh.",
        "480 kWh.|480 kWh.",
        "600×0,75×0,80=360 kWh. Los otros resultados aplican solo uno de los factores.|600×0.75×0.80=360 kWh. The other results apply only one factor."
      ],
      [
        "Hay 120 kWh útiles y descarga máxima de 25 kW. Otra fuente entrega 20 kW constantes; la carga es 40 kW. ¿Cuánto dura la contribución conjunta antes de agotar la batería?|There are 120 usable kWh and maximum discharge of 25 kW. Another source delivers 20 kW continuously; load is 40 kW. How long does the combined supply last before battery depletion?",
        "6 h.|6 h.",
        "3 h.|3 h.",
        "4,8 h.|4.8 h.",
        "La batería aporta 20 kW, dentro de su límite. 120/20=6 h. No se divide por carga total ni por potencia máxima si no es la demanda real.|The battery provides 20 kW, within its limit. 120/20=6 h. Do not divide by total load or maximum rating when neither is actual battery demand."
      ],
      [
        "Se pueden almacenar 80 kWh de excedente, con eficiencia de almacenamiento y entrega del 75 % y espacio suficiente. ¿Cuánta energía útil se recupera?|80 kWh of surplus can be stored with storage-to-delivery efficiency of 75% and sufficient space. How much usable energy is recovered?",
        "60 kWh.|60 kWh.",
        "80 kWh.|80 kWh.",
        "106,7 kWh.|106.7 kWh.",
        "80×0,75=60 kWh. La eficiencia reduce energía recuperable; no la aumenta.|80×0.75=60 kWh. Efficiency reduces recoverable energy; it does not increase it."
      ],
      [
        "Un respaldo tiene 720 L útiles y consume 24 L/h. La reposición prevista a las 25 h podría retrasarse 9 h. ¿Qué reserva adicional mínima cubriría el retraso?|Backup has 720 usable L and consumes 24 L/h. Replenishment scheduled at hour 25 could be delayed nine hours. What minimum additional reserve covers the delay?",
        "96 L útiles.|96 usable L.",
        "216 L útiles.|216 usable L.",
        "120 L útiles.|120 usable L.",
        "Autonomía 30 h; entrega desfavorable a 34 h. Faltan 4×24=96 L. No se necesita cubrir las nueve horas completas con reserva adicional porque ya había cinco de margen.|Autonomy 30 h; adverse delivery at hour 34. Shortfall 4×24=96 L. The full nine hours need not be added because five hours of margin already existed."
      ],
      [
        "Un combustible alternativo de producción local podría reducir transporte en una base remota. ¿Qué evaluación permite considerarlo como opción de continuidad?|A locally produced alternative fuel could reduce transport at a remote base. What assessment allows it to be considered a continuity option?",
        "Validar compatibilidad y autorización, capacidad local, insumos, almacenamiento y disponibilidad en el escenario.|Validate compatibility and authorisation, local capacity, inputs, storage and availability in the scenario.",
        "Comparar solo emisiones de ciclo de vida y coste por litro.|Compare only life-cycle emissions and cost per litre.",
        "Comparar solo volumen anual de producción local y demanda anual.|Compare only annual local production and annual demand.",
        "La producción local puede reducir transporte pero introduce otras dependencias. Emisiones y volumen anual no demuestran compatibilidad ni continuidad.|Local production may reduce transport but introduces other dependencies. Emissions and annual volume do not demonstrate compatibility or continuity."
      ],
      [
        "A y B cumplen los requisitos de continuidad. A cuesta 30.000 € más 7.000 €/año; B, 46.000 € más 3.000 €/año. Horizonte de 5 años, sin descuento ni otros costes. ¿Cuál cuesta menos?|A and B meet continuity requirements. A costs €30,000 plus €7,000/year; B €46,000 plus €3,000/year. Five-year horizon, no discounting or other costs. Which costs less?",
        "B: 61.000 €, frente a 65.000 € de A.|B: €61,000 versus €65,000 for A.",
        "A: 30.000 €, frente a 46.000 € de B.|A: €30,000 versus €46,000 for B.",
        "A: 37.000 €, frente a 49.000 € de B.|A: €37,000 versus €49,000 for B.",
        "A=30.000+5×7.000=65.000; B=46.000+5×3.000=61.000. Se comparan costes del mismo horizonte, no solo inversión o primer año.|A=30,000+5×7,000=65,000; B=46,000+5×3,000=61,000. Compare costs over the same horizon, not just investment or first year."
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
