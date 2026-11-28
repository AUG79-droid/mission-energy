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
        "Una ola de calor afecta a un hangar; un inversor pierde potencia por encima de su límite térmico y un ensayo se interrumpe. ¿Cuál es la vulnerabilidad?|A heatwave affects a hangar; an inverter loses power above its thermal limit and a test stops. What is the vulnerability?",
        "La sensibilidad térmica del inversor.|The inverter's thermal sensitivity.",
        "La ola de calor.|The heatwave.",
        "La interrupción del ensayo.|The test interruption.",
        "El calor es amenaza, el inversor está expuesto, su sensibilidad es vulnerabilidad y la interrupción es consecuencia.|Heat is hazard, the inverter is exposed, its sensitivity is vulnerability, and interruption is consequence."
      ],
      [
        "Una instalación solar reduce emisiones, pero el respaldo permanece expuesto a inundación. ¿Qué conclusión procede?|Solar reduces emissions but backup remains exposed to flooding. What conclusion follows?",
        "Puede contribuir a mitigación; la adaptación a inundación requiere evaluar y reducir esa vulnerabilidad.|It may contribute to mitigation; flood adaptation requires assessing and reducing that vulnerability.",
        "La reducción de emisiones demuestra adaptación a inundación.|Emissions reduction demonstrates flood adaptation.",
        "La solar no puede contribuir a resiliencia en ningún escenario.|Solar cannot contribute to resilience in any scenario.",
        "Los objetivos son distintos. La solar podría ayudar en otros escenarios, pero no demuestra reducción de vulnerabilidad a inundación.|Objectives differ. Solar might help in other scenarios but does not demonstrate reduced flood vulnerability."
      ],
      [
        "Una fuente de 160 kW conserva el 70 % de capacidad durante calor extremo. Demanda esencial: 120 kW. ¿Margen?|A 160 kW source retains 70% capacity in extreme heat. Essential demand: 120 kW. Headroom?",
        "−8 kW.|−8 kW.",
        "40 kW.|40 kW.",
        "−48 kW.|−48 kW.",
        "160×0,70=112 kW; 112−120=−8 kW. 40 es margen nominal; 48 es pérdida de capacidad.|160×0.70=112 kW; 112−120=−8 kW. 40 is nominal headroom; 48 is lost capacity."
      ],
      [
        "Con calor hay 105 kW efectivos y 118 kW de demanda. A libera 10 kW; B añade 16 kW efectivos. Ambas verificadas. ¿Cuál cubre por sí sola el déficit?|Heat leaves 105 effective kW and demand of 118 kW. A frees 10 kW; B adds 16 effective kW. Both verified. Which alone closes the gap?",
        "B, con 3 kW de margen.|B, with 3 kW headroom.",
        "A, con 10 kW de margen.|A, with 10 kW headroom.",
        "Ambas, porque mejoran el balance.|Both, because they improve the balance.",
        "Déficit 13 kW. A deja 3 kW de déficit; B deja 3 kW de margen.|Shortfall 13 kW. A leaves a 3 kW shortfall; B leaves 3 kW headroom."
      ],
      [
        "Dos respaldos de 90 kW comparten sala. El escenario de inundación inutiliza ambos. Carga: 70 kW. ¿Capacidad superviviente?|Two 90 kW backups share a room. The flood scenario disables both. Load: 70 kW. Surviving capacity?",
        "0 kW.|0 kW.",
        "90 kW.|90 kW.",
        "180 kW.|180 kW.",
        "El escenario especifica pérdida simultánea; la redundancia frente a fallo individual no cubre exposición común.|The scenario specifies simultaneous loss; redundancy against individual failure does not cover common exposure."
      ],
      [
        "Se eleva un generador sobre la cota de inundación, pero cuadro y acceso permanecen expuestos. ¿Qué falta evaluar?|A generator is raised above flood level, but switchboard and access remain exposed. What remains to assess?",
        "Ruta completa, controles, acceso y recuperación en el mismo escenario.|Full path, controls, access and recovery in the same scenario.",
        "Solo la altura del generador sobre el agua.|Only generator height above water.",
        "Solo la potencia nominal del generador.|Only generator rated power.",
        "Proteger un componente no acredita supervivencia de la cadena completa.|Protecting one component does not establish survival of the entire chain."
      ],
      [
        "Un respaldo arranca sin carga. El servicio necesita 65 kW y admite 45 s de interrupción. ¿Qué prueba falta?|Backup starts without load. Service needs 65 kW and tolerates 45 s interruption. What test is missing?",
        "Transferencia y funcionamiento autorizados con carga, duración y calidad representativas.|Authorised transfer and operation with representative load, duration and quality.",
        "Otra prueba de arranque sin carga a distinta temperatura.|Another no-load start test at a different temperature.",
        "Revisión del historial de mantenimiento y potencia nominal.|Review of maintenance history and rated power.",
        "El arranque no acredita transferencia en 45 s ni prestación bajo carga.|Start-up does not demonstrate transfer within 45 s or loaded performance."
      ],
      [
        "Durante una tormenta hay potencia disponible, pero falla comunicación con el control. ¿Qué opción permite continuar?|During a storm power is available but control communication fails. Which option permits continuation?",
        "Modo alternativo autorizado y verificado; si no existe, parada segura.|Authorised and verified fallback mode; if none exists, safe shutdown.",
        "Mantener el plan porque la potencia está disponible.|Keep the plan because power is available.",
        "Reiniciar según horario normal sin comprobar controles.|Restart on the normal schedule without checking controls.",
        "El control forma parte de la cadena. Solo un modo validado cubre esa pérdida.|Controls are part of the chain. Only a validated mode covers that loss."
      ],
      [
        "Inspección 3 h; después reparación 6 h y controles 4 h en paralelo; prueba final 2 h tras ambas. ¿Duración mínima?|Inspection 3 h; then repair 6 h and controls 4 h in parallel; final test 2 h after both. Minimum duration?",
        "11 h.|11 h.",
        "15 h.|15 h.",
        "9 h.|9 h.",
        "3+máximo(6,4)+2=11 h. Sumar ambas tareas da 15 h; elegir la menor ignora una dependencia.|3+max(6,4)+2=11 h. Adding both tasks gives 15 h; choosing the shorter ignores a dependency."
      ],
      [
        "Objetivo 10 h. Plan: inspección 3 h, reparación 6 h y controles 4 h en paralelo, prueba 2 h. ¿Qué cambio validado cumple?|Target 10 h. Plan: inspection 3 h, repair 6 h and controls 4 h in parallel, test 2 h. Which validated change meets target?",
        "Reparación de 6 a 5 h.|Repair from 6 to 5 h.",
        "Controles de 4 a 3 h.|Controls from 4 to 3 h.",
        "Controles de 4 a 2 h.|Controls from 4 to 2 h.",
        "3+máximo(5,4)+2=10 h. Reducir controles no acorta la tarea paralela más larga.|3+max(5,4)+2=10 h. Cutting controls does not shorten the longest parallel task."
      ]
    ],
    [
      [
        "Hora 0: carga 55 kW, generador 35 kW y batería de 180 kWh útiles con potencia suficiente. ¿Cuánto dura la combinación antes de agotar batería?|Hour 0: load 55 kW, generator 35 kW and battery with 180 usable kWh and sufficient power. How long does combined supply last before battery depletion?",
        "9 h.|9 h.",
        "3,27 h.|3.27 h.",
        "5,14 h.|5.14 h.",
        "La batería aporta 20 kW: 180/20=9 h. No se divide por demanda total ni por potencia del generador.|Battery supplies 20 kW: 180/20=9 h. Do not divide by total demand or generator power."
      ],
      [
        "Hora 2: 95 kW disponibles. Seguridad y control 25 kW, refrigeración esencial 45 kW, auxiliar aplazable 35 kW. ¿Qué plan cumple?|Hour 2: 95 kW available. Safety and controls 25 kW, essential cooling 45 kW, deferrable auxiliary 35 kW. Which plan meets requirements?",
        "Aplazar auxiliar: 70 kW y 25 kW de margen.|Defer auxiliary: 70 kW and 25 kW headroom.",
        "Mantener todas: 105 kW.|Keep all: 105 kW.",
        "Reducir refrigeración 15 kW sin validar y mantener auxiliar.|Cut cooling by 15 kW without validation and retain auxiliary.",
        "25+45=70 kW; margen 25 kW. Todas juntas superan capacidad; reducir refrigeración sin validar incumple requisitos.|25+45=70 kW; headroom 25 kW. All together exceed capacity; cutting cooling without validation violates requirements."
      ],
      [
        "Hora 6: respaldo suficiente tarda 90 s en transferir. Control admite 20 s. ¿Qué debe comprobarse antes de continuar un ensayo que no tolera esa pérdida?|Hour 6: sufficient backup takes 90 s to transfer. Controls tolerate 20 s. What must be checked before continuing a test that cannot tolerate that loss?",
        "Transición validada dentro de 20 s o parada segura aprobada.|Validated transfer within 20 s or approved safe shutdown.",
        "Capacidad energética para el resto de las 72 h, sin revisar transición.|Energy capacity for the remaining 72 h without reviewing transfer.",
        "Reducción de demanda manteniendo transferencia de 90 s.|Demand reduction retaining 90 s transfer.",
        "La brecha es temporal: 90 s exceden 20 s. Potencia y energía no garantizan transición.|The gap is timing: 90 s exceeds 20 s. Power and energy do not guarantee transfer."
      ],
      [
        "Hora 20: 520 L útiles. Consumo 20 L/h durante 6 h; después 10 L/h. ¿Hora de agotamiento sin reposición?|Hour 20: 520 usable L. Consumption 20 L/h for six hours, then 10 L/h. Depletion hour without replenishment?",
        "Hora 66.|Hour 66.",
        "Hora 46.|Hour 46.",
        "Hora 72.|Hour 72.",
        "6×20=120 L; quedan 400 L para 40 h. Hora 20+6+40=66; 46 h es autonomía restante.|6×20=120 L; 400 L remain for 40 h. Hour 20+6+40=66; 46 h is remaining autonomy."
      ],
      [
        "Hora 30: 420 L utilizables; reserva mínima 60 L. Consumo 15 L/h. ¿Cuándo se alcanza el umbral?|Hour 30: 420 usable L; minimum reserve 60 L. Consumption 15 L/h. When is threshold reached?",
        "Hora 54.|Hour 54.",
        "Hora 58.|Hour 58.",
        "Hora 24.|Hour 24.",
        "(420−60)/15=24 h; hora 30+24=54. Hora 58 es agotamiento total.|(420−60)/15=24 h; hour 30+24=54. Hour 58 is total depletion."
      ],
      [
        "Hora 36: autonomía hasta reserva mínima 14 h. Entrega entre 10 y 18 h desde ahora. ¿Brecha desfavorable?|Hour 36: autonomy to minimum reserve 14 h. Delivery in 10 to 18 h from now. Adverse gap?",
        "4 h: umbral a hora 50 y entrega tardía a la 54.|4 h: threshold at hour 50 and late delivery at 54.",
        "0 h: media de entrega 14 h.|0 h: average delivery 14 h.",
        "8 h: amplitud del intervalo de entrega.|8 h: delivery window width.",
        "18−14=4 h. La media oculta la brecha y la amplitud no es el déficit.|18−14=4 h. The midpoint hides the gap and window width is not the shortfall."
      ],
      [
        "Hora 42: 180 L medidos, consumo 20 L/h. Entrega prevista en 7 h, no confirmada, posible retraso 5 h. ¿Qué informe permite decidir?|Hour 42: 180 measured L, consumption 20 L/h. Delivery expected in seven hours, unconfirmed, possible five-hour delay. Which report supports decisions?",
        "Autonomía 9 h; entrega prevista 7 h, tardía 12 h; déficit potencial 3 h. Evaluar alternativa autorizada y próxima revisión.|Autonomy 9 h; expected delivery 7 h, late 12 h; potential 3 h gap. Assess authorised alternative and next review.",
        "Autonomía 9 h; entrega en 7 h; continuidad garantizada.|Autonomy 9 h; delivery in 7 h; continuity guaranteed.",
        "Déficit de 5 h por retraso, con independencia de reserva.|5 h shortfall from delay regardless of reserve.",
        "180/20=9 h. Entrega tardía en 12 h: faltan 3 h. Separa medición y previsión.|180/20=9 h. Late delivery in 12 h: 3 h gap. Separate measurement and forecast."
      ],
      [
        "Hora 54: A entrega 50 kW durante 10 h por 4.000 €; B, 45 kW durante 18 h por 3.000 €. Carga 48 kW durante 8 h sin otra fuente. ¿Cuál cumple?|Hour 54: A supplies 50 kW for 10 h for €4,000; B, 45 kW for 18 h for €3,000. Load 48 kW for eight hours with no other source. Which meets requirements?",
        "A: cubre potencia y duración.|A: meets power and duration.",
        "B: dura más y cuesta menos.|B: lasts longer and costs less.",
        "Ambas: superan ocho horas.|Both: exceed eight hours.",
        "B incumple potencia pese a mayor duración. A satisface ambas restricciones.|B fails power despite longer duration. A satisfies both constraints."
      ],
      [
        "Hora 66: reinicio autorizado, 115 kW disponibles, 80 kW esenciales en marcha. Dos tareas independientes de 30 y 25 kW duran 1 h y vencen en 2 h. ¿Qué secuencia cumple?|Hour 66: restart authorised, 115 kW available, 80 kW essential load running. Two independent tasks of 30 and 25 kW last one hour and are due in two hours. Which sequence meets requirements?",
        "Una cada hora: 110 y 105 kW.|One each hour: 110 and 105 kW.",
        "Ambas la primera hora: 135 kW.|Both in first hour: 135 kW.",
        "Solo la de 30 kW, aplazar la otra más allá del plazo.|Only the 30 kW task, defer the other beyond deadline.",
        "Margen 35 kW; cada tarea cabe por separado, juntas no. La secuencia cumple plazos.|Headroom 35 kW; each task fits separately, together they do not. Sequential operation meets deadlines."
      ],
      [
        "Hora 72: déficit esencial de 12 kW durante 3 h y 8 kW durante 2 h, sin solapamiento. ¿Qué resultado se calcula directamente?|Hour 72: essential shortfall 12 kW for three hours and 8 kW for two hours, without overlap. What result is calculated directly?",
        "52 kWh no suministrados; analizar funciones para determinar consecuencias.|52 kWh unserved; analyse functions to determine consequences.",
        "5 h de indisponibilidad de todos los servicios.|5 h of unavailability of all services.",
        "20 kWh no suministrados.|20 kWh unserved.",
        "12×3+8×2=52 kWh. Cinco horas son duración de déficit, no indisponibilidad de todas las funciones.|12×3+8×2=52 kWh. Five hours is shortfall duration, not unavailability of all functions."
      ]
    ]
  ]
};
