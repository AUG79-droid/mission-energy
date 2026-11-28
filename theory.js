// Bilingual theory, five lessons. Professional rewrite candidate: lesson 1.
const ENERGY_THEORY=[
  [
    [
      "Seguridad energética, continuidad y resiliencia|Energy security, continuity and resilience",
      "Una instalación aeronáutica no consume energía como un fin en sí mismo: la necesita para prestar servicios. Por ejemplo, un banco de ensayos requiere alimentación eléctrica estable, refrigeración, control y registros válidos. Una interrupción puede obligar a repetir el ensayo, inmovilizar un equipo o retrasar una entrega. El coste relevante no es únicamente el precio de la electricidad, sino también la pérdida de servicio.\n\nConviene distinguir cuatro conceptos. La seguridad energética es la capacidad de disponer de energía suficiente y accesible. La fiabilidad describe la frecuencia y duración de fallos en unas condiciones determinadas. La continuidad se refiere a mantener una función concreta dentro de límites aceptables. La resiliencia añade la capacidad de prepararse, absorber una perturbación, adaptarse y recuperar la función. Un suministro normalmente fiable puede no resistir una interrupción excepcional.\n\nLa descarbonización persigue reducir emisiones; puede contribuir a la resiliencia si modifica una dependencia física. Un contrato renovable cambia el origen contractual de la energía, pero no crea por sí mismo una ruta alternativa. Una instalación solar también puede depender de la red para funcionar. Su capacidad de respaldo debe comprobarse.\n\nEjemplo: dos instalaciones ficticias reciben el mismo volumen anual de electricidad renovable. Una tiene un respaldo independiente probado; la otra no. Su balance ambiental contractual puede ser similar, pero su capacidad de mantener un servicio durante un fallo de red es diferente.|An aerospace facility does not consume energy as an end in itself: it needs energy to deliver services. A test bench, for example, requires stable electricity, cooling, controls and valid records. An interruption may force a test to be repeated, keep equipment unavailable or delay delivery. The relevant cost includes lost service, not just the electricity tariff.\n\nDistinguish four concepts. Energy security is the ability to access sufficient energy. Reliability describes the frequency and duration of failures under specified conditions. Continuity concerns keeping a particular function within acceptable limits. Resilience adds the ability to prepare for, absorb, adapt to and recover from disruption. A normally reliable supply may not withstand an exceptional outage.\n\nDecarbonisation aims to reduce emissions; it can contribute to resilience if it changes a physical dependency. A renewable electricity contract changes contractual energy sourcing but does not itself create an alternative supply path. Solar generation may also depend on the grid to operate. Its backup capability must be demonstrated.\n\nExample: two fictional facilities receive the same annual volume of renewable electricity. One has tested independent backup; the other does not. Their contractual environmental balance can be similar while their ability to maintain service during a grid failure differs.",
      "Pregunta clave: ¿qué servicio debe mantenerse, durante cuánto tiempo y con qué nivel mínimo de prestación?|Key question: which service must continue, for how long and at what minimum performance?",
      "No confundir un atributo ambiental con una capacidad física demostrada.|Do not confuse an environmental attribute with demonstrated physical capability."
    ],
    [
      "Mapa de dependencias y fallos de causa común|Dependency mapping and common-cause failures",
      "Una función depende de una cadena de suministro físico. Para una actividad de mantenimiento, esa cadena puede incluir red exterior, transformador, distribución interior, sistema de alimentación ininterrumpida (SAI), refrigeración, equipos, comunicaciones y personal autorizado. El fallo de cualquiera de los elementos imprescindibles puede detener la actividad, aunque los demás funcionen.\n\nUn punto único de fallo es un elemento cuya pérdida impide prestar el servicio si no existe una alternativa utilizable. La redundancia consiste en disponer de capacidad adicional para soportar determinados fallos. Sin embargo, duplicar un equipo no basta si ambos comparten una dependencia. Dos generadores pueden depender del mismo combustible, dos líneas del mismo transformador y dos servidores de la misma refrigeración. Un incidente compartido puede anular la redundancia: es un fallo de causa común.\n\nEjemplo: un hangar dispone de dos contratos eléctricos, pero ambos suministros atraviesan el mismo transformador. La contratación reduce una exposición comercial; no elimina ese punto único de fallo. Una segunda ruta físicamente independiente podría reducirlo, siempre que tenga capacidad suficiente, controles compatibles y disponibilidad comprobada.\n\nPara construir el mapa, identifica la función, sus entradas esenciales, los activos que las proporcionan y sus dependencias aguas arriba. Después compara qué fallos afectan al sistema principal y al respaldo. No basta con contar proveedores o equipos: importa qué servicio sigue disponible bajo cada escenario de fallo.|A function depends on a physical supply chain. For maintenance, that chain may include the external grid, transformer, internal distribution, uninterruptible power supply (UPS), cooling, equipment, communications and authorised staff. Failure of any indispensable element may halt the activity even if the others operate.\n\nA single point of failure is an element whose loss prevents service delivery when no usable alternative exists. Redundancy means providing additional capacity to withstand specified failures. However, duplicating equipment is insufficient if both units share a dependency. Two generators may depend on the same fuel supply, two feeders on one transformer and two servers on the same cooling system. A shared incident can defeat redundancy: a common-cause failure.\n\nExample: a hangar has two electricity contracts but both supplies pass through one transformer. Contractual diversification reduces commercial exposure; it does not eliminate this single point of failure. A physically independent second path could reduce it, provided capacity, compatible controls and availability are demonstrated.\n\nTo construct the map, identify the function, its essential inputs, the assets providing them and upstream dependencies. Then compare which failures affect the primary and backup systems. Counting suppliers or units is insufficient: what matters is which service remains available in each failure scenario.",
      "Contrasta independencia eléctrica, logística, ambiental y de control.|Check electrical, logistical, environmental and control-system independence.",
      "La redundancia solo cubre los fallos para los que ha sido diseñada y comprobada.|Redundancy covers only the failures for which it has been designed and tested."
    ],
    [
      "Priorizar funciones y definir tiempos de interrupción|Prioritise functions and define interruption limits",
      "No todos los consumos tienen la misma prioridad, y la criticidad de una función cambia con su estado. Un equipo de ensayo puede admitir una parada programada, pero no una pérdida de control en mitad de un ciclo. La primera clasificación distingue protección de personas, conservación de equipos y datos, funciones esenciales para entregar un servicio y tareas aplazables. Las obligaciones de seguridad y los procedimientos aprobados no son negociables.\n\nPara cada función debe definirse la prestación mínima aceptable, el tiempo máximo tolerable de interrupción y un objetivo de recuperación. Este último es el plazo objetivo para recuperar el servicio; debe ser compatible con las consecuencias de superar el límite tolerable. También importa el tiempo de transición al respaldo y si el proceso puede detenerse y reiniciarse conservando su validez.\n\nEjemplo ficticio: control y registro de un ensayo requieren 15 kW y admiten una interrupción máxima de 30 segundos; refrigeración requiere 25 kW y admite 2 minutos; un banco auxiliar de 30 kW puede aplazarse. Una fuente alternativa necesita 5 minutos para asumir carga. Aunque disponga de suficiente potencia, no satisface por sí sola los dos límites de interrupción. Se necesita evaluar una solución de transición o una estrategia aprobada de parada segura.\n\nLa priorización debe acordarse con quienes conocen las consecuencias del fallo. El menor consumo no es automáticamente la función más importante. Tampoco toda actividad ligada a un cliente debe continuar a cualquier precio.|Not all loads have the same priority, and a function's criticality changes with its operating state. Test equipment may tolerate a scheduled shutdown but not loss of control mid-cycle. First distinguish protection of people, preservation of assets and data, functions essential to service delivery, and deferrable tasks. Safety obligations and approved procedures are non-negotiable.\n\nFor each function, define minimum acceptable performance, maximum tolerable interruption and a recovery time objective. The latter is the target time to restore service; it must be compatible with the consequences of exceeding the tolerable limit. Backup transfer time also matters, as does whether a process can stop and restart while retaining validity.\n\nFictional example: test control and recording require 15 kW and tolerate a maximum 30-second interruption; cooling requires 25 kW and tolerates two minutes; a 30 kW auxiliary bench can be deferred. An alternative source needs five minutes to take load. Even with enough power, it cannot alone meet either interruption limit. A bridging solution or an approved safe shutdown strategy must be assessed.\n\nPrioritisation requires agreement with those who understand the consequences of failure. The lowest-consuming function is not automatically the most important. Nor must every customer-related activity continue at any cost.",
      "Protege primero las funciones cuya pérdida produce consecuencias inaceptables.|First protect functions whose loss creates unacceptable consequences.",
      "Compara el tiempo de transición al respaldo con los límites del proceso.|Compare backup transfer time with process interruption limits."
    ],
    [
      "Potencia, energía útil y autonomía: cómo calcularlas|Power, usable energy and autonomy: how to calculate them",
      "La potencia, medida en kW, indica la demanda o capacidad instantánea. La energía, en kWh, expresa la cantidad consumida o entregada durante un periodo. Una carga constante de 40 kW durante 6 horas consume 240 kWh. La capacidad de un respaldo se debe verificar en ambas dimensiones: que pueda suministrar la potencia necesaria y que disponga de energía suficiente durante el tiempo objetivo.\n\nEn una batería, la energía nominal no coincide necesariamente con la energía útil. Influyen el estado de carga, el margen de descarga permitido, la degradación, la temperatura y las pérdidas. Si ya conocemos la energía utilizable entregada a la carga, no deben descontarse por segunda vez las mismas pérdidas. Para demanda constante, autonomía teórica (h) = energía útil (kWh) / demanda (kW). Con demanda variable se suman los consumos de cada intervalo.\n\nEjemplo resuelto: un respaldo entrega como máximo 60 kW y dispone de 240 kWh útiles. La carga esencial es 40 kW. Su autonomía teórica es 240 / 40 = 6 h. Para mantenerla 8 h se requieren 320 kWh, por lo que faltan 80 kWh. Si una carga adicional eleva la demanda a 65 kW, también se incumple el límite de potencia, incluso aunque haya energía almacenada.\n\nEstas cuentas son un filtro inicial. El dimensionamiento real necesita verificar picos de arranque, límites térmicos, potencia disponible, calidad de suministro, transición, protecciones y márgenes.|Power, measured in kW, indicates instantaneous demand or capacity. Energy, in kWh, expresses the amount consumed or delivered over a period. A constant 40 kW load over six hours uses 240 kWh. Backup capacity must be verified in both dimensions: it must supply the required power and provide sufficient energy for the target duration.\n\nA battery's nominal energy is not necessarily its usable energy. State of charge, permitted discharge window, degradation, temperature and losses matter. If usable energy delivered to the load is already known, the same losses must not be deducted twice. At constant demand, theoretical autonomy (h) = usable energy (kWh) / demand (kW). With variable demand, sum energy consumption over each interval.\n\nWorked example: a backup unit delivers up to 60 kW and has 240 usable kWh. The essential load is 40 kW. Theoretical autonomy is 240 / 40 = 6 h. Eight hours require 320 kWh, leaving an 80 kWh shortfall. If an additional load increases demand to 65 kW, the power limit is also exceeded, even when stored energy remains.\n\nThese calculations are an initial screening tool. Real sizing requires verification of start-up peaks, thermal limits, available power, supply quality, transfer, protection and margins.",
      "Energía necesaria = suma de potencia × duración de cada intervalo.|Required energy = sum of power × duration for each interval.",
      "Una autonomía teórica no es una prueba de funcionamiento del sistema.|Theoretical autonomy is not evidence that the system will operate."
    ],
    [
      "Comparar alternativas y demostrar una contribución a la resiliencia|Compare alternatives and demonstrate a resilience contribution",
      "Una decisión de inversión debe partir de un escenario de referencia: qué falla, qué servicio se pierde, durante cuánto tiempo y cuáles son las consecuencias. A continuación se comparan alternativas bajo los mismos supuestos. Una nueva ruta de suministro puede reducir un fallo común; una batería puede cubrir la transición; una reducción autorizada de demanda puede prolongar la autonomía. Cada medida resuelve una vulnerabilidad distinta y puede introducir nuevas dependencias.\n\nEjemplo ficticio: un servicio de 40 kW debe mantenerse durante 8 h. La referencia dispone de 240 kWh útiles, suficientes para 6 h. La alternativa A añade 120 kWh útiles y mantiene la carga: autonomía teórica de 9 h. La alternativa B reduce la carga a 30 kW: autonomía de 8 h. Ambas alcanzan el objetivo en el cálculo ideal, pero B no deja margen y exige probar que la reducción no degrada el servicio. A requiere verificar compatibilidad, potencia, seguridad y coste.\n\nPara justificar una mejora, el indicador debe corresponderse con el problema: horas de autonomía bajo una carga definida, horas de interrupción, energía no suministrada a funciones esenciales o proporción de funciones cubiertas para una duración concreta. El ahorro anual de energía y las emisiones son indicadores útiles, pero no sustituyen estas métricas de continuidad.\n\nUna afirmación defendible especifica escenario, referencia, alternativa, resultado, supuestos y evidencia pendiente. Diferencia un cálculo, una simulación y una prueba funcional. Si no existen datos de probabilidad, no conviertas horas evitadas en ahorros anuales garantizados.|An investment decision should begin with a baseline scenario: what fails, which service is lost, for how long, and with what consequences. Then compare alternatives under the same assumptions. A new supply path may reduce common-cause failure; a battery may bridge transfer; authorised demand reduction may extend autonomy. Each measure addresses a different vulnerability and may introduce new dependencies.\n\nFictional example: a 40 kW service must continue for eight hours. The baseline has 240 usable kWh, sufficient for six hours. Alternative A adds 120 usable kWh and retains the load: nine hours of theoretical autonomy. Alternative B reduces load to 30 kW: eight hours of autonomy. Both meet the target in the ideal calculation, but B leaves no margin and requires proof that reduction does not degrade service. A requires compatibility, power, safety and cost verification.\n\nA measure of improvement should match the problem: hours of autonomy at a defined load, hours of interruption, unserved energy for essential functions, or proportion of functions covered for a specified duration. Annual energy savings and emissions are useful indicators, but cannot replace continuity metrics.\n\nA defensible statement specifies scenario, baseline, alternative, result, assumptions and evidence still needed. Distinguish a calculation, simulation and functional test. Without probability data, do not convert avoided outage hours into guaranteed annual savings.",
      "Compara alternativas en igualdad de condiciones y explicita qué riesgo residual permanece.|Compare alternatives under equivalent conditions and identify the residual risk.",
      "Utiliza datos de carga, límites operativos y pruebas autorizadas, no únicamente fichas nominales.|Use load data, operating limits and authorised tests, not only nameplate specifications."
    ]
  ],
  [
    [
      "La eficiencia libera capacidad|Efficiency frees capacity",
      "La eficiencia permite obtener el servicio requerido con menos recursos. Eliminar fugas, tiempos en vacío o pérdidas puede liberar potencia disponible para funciones esenciales. Su utilidad operativa depende de mantener prestaciones, seguridad, calidad y condiciones de conservación. Ejemplo ficticio: 300 kWh útiles y 100 kW de demanda dan 3 h. Si se desplazan 40 kW no críticos autorizados, quedan 60 kW y 5 h. La función y la seguridad deben mantenerse.|Efficiency delivers required service with fewer resources. Eliminating leaks, idle demand or losses can free power for essential functions. Its operational value depends on preserving performance, safety, quality and storage conditions. Fictional example: 300 usable kWh and 100 kW demand give 3 h. Deferring 40 kW of approved non-critical demand leaves 60 kW and 5 h. Function and safety must be preserved.",
      "Reducir primero desperdicios.|Reduce avoidable losses first.",
      "No degradar el servicio.|Do not degrade service.",
      "Verificar el margen obtenido.|Verify the headroom gained."
    ],
    [
      "Flexibilidad no significa interrupción indiscriminada|Flexibility is not arbitrary curtailment",
      "La flexibilidad consiste en desplazar o modular demanda compatible con límites técnicos, no en apagar procesos críticos sin consulta. Una planificación escalonada puede disminuir picos. Solo son flexibles los equipos o servicios cuya modificación ha sido validada con las áreas competentes.|Flexibility means shifting or modulating demand within technical limits, not arbitrarily disabling critical processes. Staggered scheduling can reduce peaks. Only loads whose changes have been validated by competent teams should be considered flexible.",
      "Clasificar cargas desplazables.|Classify shiftable loads.",
      "Coordinar cambios con operaciones.|Coordinate changes with operations.",
      "Mantener condiciones de seguridad.|Preserve safety conditions."
    ],
    [
      "Medir antes de prometer ahorros|Measure before claiming savings",
      "Las reducciones de kWh deben contrastarse con una línea base, periodo y actividad comparables. Si disminuye la producción, puede caer el consumo sin que mejore el desempeño energético. Indicadores de producción, clima, turnos o uso ayudan a interpretar los resultados y sus límites.|Reductions in kWh require comparable baselines, periods and activity. When output falls, energy demand may decline without an efficiency improvement. Output, weather, shifts and utilisation variables help interpret results and limitations.",
      "Fijar referencia verificable.|Set a verifiable baseline.",
      "Normalizar cuando proceda.|Normalise when appropriate.",
      "Registrar límites metodológicos.|Record methodological limitations."
    ],
    [
      "Usos relevantes de energía|Significant energy uses",
      "Iluminación, aire comprimido, refrigeración, ensayos, climatización y servicios auxiliares tienen perfiles distintos. Para priorizar oportunidades hay que cruzar consumo, máximos de potencia, posibilidades de ajuste y criticidad del servicio. Ninguna intervención debe anular protecciones ni requisitos de proceso.|Lighting, compressed air, cooling, testing, HVAC and utilities have different profiles. Prioritise improvements by energy use, peak power, adjustment potential and service criticality. No intervention should bypass protections or process requirements.",
      "Analizar pérdidas y consumos en vacío.|Analyse losses and idle consumption.",
      "Involucrar a mantenimiento.|Involve maintenance.",
      "Evaluar efectos sobre calidad.|Assess quality impacts."
    ],
    [
      "Mejora continua e ISO 50001|Continual improvement and ISO 50001",
      "ISO 50001:2018 ofrece un marco para medir y mejorar el desempeño energético con objetivos, seguimiento y revisión. No debe confundirse con una certificación automática ni con un procedimiento específico de respuesta a apagones. Su disciplina de datos puede complementar la preparación energética.|ISO 50001:2018 provides a framework for measuring and improving energy performance with objectives, monitoring and review. It should not be confused with automatic certification or a specific blackout procedure. Its data discipline can support energy preparedness.",
      "Objetivos medibles y revisables.|Measurable and reviewable objectives.",
      "Verificación posterior a las medidas.|Verify after measures.",
      "Distinguir eficiencia y continuidad.|Distinguish efficiency and continuity."
    ]
  ],
  [
    [
      "Diversidad comercial y física|Commercial and physical diversity",
      "Diversificar proveedores no garantiza que los electrones lleguen por rutas independientes. Hay que estudiar el conjunto: red, generación distribuida, almacenamiento, combustible y protección eléctrica. Las soluciones se comparan bajo el mismo escenario y nivel de servicio requerido.|Supplier diversification does not guarantee independent physical delivery paths. Examine the whole system: grid, distributed generation, storage, fuel and electrical protection. Compare solutions under the same scenario and required service level.",
      "Analizar rutas físicas y no solo contratos.|Assess physical routes, not only contracts.",
      "Identificar dependencias compartidas.|Identify shared dependencies.",
      "Verificar el servicio aportado.|Verify delivered service."
    ],
    [
      "Generación renovable variable|Variable renewable generation",
      "La solar y la eólica pueden reducir dependencia de ciertos combustibles y contribuir a objetivos ambientales, pero su producción no es constante. Una planta conectada a red normalmente necesita diseño específico para alimentar cargas durante un apagón. Evita afirmar que generación local equivale a autonomía garantizada.|Solar and wind can reduce some fuel dependencies and support environmental objectives, but output varies. A grid-connected installation generally needs specific design to supply loads through a blackout. Do not claim local generation equals guaranteed autonomy.",
      "Comprobar horas de generación.|Check generation times.",
      "Verificar posibilidad de operación en isla.|Verify islanding capability.",
      "Separar beneficios ambientales de respaldo.|Separate environmental benefits from backup."
    ],
    [
      "Almacenamiento, potencia y duración|Storage, power and duration",
      "Una batería posee potencia de descarga y energía utilizable distintas. Las horas de respaldo dependen de ambas y del perfil de consumo, de pérdidas y de las reservas de seguridad. También deben considerarse envejecimiento, temperatura, mantenimiento, requisitos de protección y final de vida. Una batería de 400 kWh con límite de 50 kW no puede alimentar por sí sola una carga de 80 kW. Compara primero elegibilidad técnica, después energía, disponibilidad, dependencias, costes y riesgos residuales.|A battery has distinct discharge power and usable energy. Backup duration depends on both, demand profile, losses and safety margins. Ageing, temperature, maintenance, protection requirements and end of life also matter. A 400 kWh battery limited to 50 kW cannot supply an 80 kW load alone. Compare technical eligibility first, then energy, availability, dependencies, costs and residual risks.",
      "Distinguir potencia y capacidad energética.|Distinguish power and energy capacity.",
      "Utilizar energía realmente disponible.|Use truly available energy.",
      "Considerar seguridad y mantenimiento.|Consider safety and maintenance."
    ],
    [
      "Respaldo basado en combustible|Fuel-based backup",
      "Los equipos de respaldo pueden cubrir cargas específicas, pero dependen de mantenimiento, inventarios, abastecimiento, condiciones ambientales, permisos y transferencias seguras. Dos unidades con el mismo depósito pueden compartir un modo de fallo. Su rendimiento debe verificarse sin perturbar actividades críticas.|Backup equipment can support specific loads but depends on maintenance, inventories, supply chains, environmental conditions, permits and safe transfers. Two units sharing one tank may have a common failure. Performance must be tested without disrupting critical activity.",
      "Evaluar logística y reservas.|Assess logistics and reserves.",
      "Considerar emisiones y permisos.|Consider emissions and permits.",
      "Comprobar transferencias de forma segura.|Test transfers safely."
    ],
    [
      "Cartera energética y ciclo de vida|Energy portfolio and life cycle",
      "La mejor opción depende de la función, escenarios, riesgos y horizonte de uso. Una cartera puede combinar eficiencia, flexibilidad, generación, almacenamiento y respaldo. Conviene comparar inversión, mantenimiento, seguridad, residuos, emisiones, cadena de repuestos y capacidad real de recuperación.|The best solution depends on functions, scenarios, risks and time horizon. A portfolio may combine efficiency, flexibility, generation, storage and backup. Compare investment, maintenance, safety, waste, emissions, spare-part chains and actual recovery capability.",
      "Evitar soluciones universales.|Avoid universal solutions.",
      "Evaluar riesgos residuales.|Evaluate residual risks.",
      "Usar datos y supuestos transparentes.|Use transparent data and assumptions."
    ]
  ],
  [
    [
      "La infraestructura es una cadena|Infrastructure is a chain",
      "La resiliencia de una instalación depende de la continuidad de equipos, distribución, protecciones, sensores, procedimientos y personas. Un elemento compartido puede inutilizar varias fuentes de respaldo. El análisis debe seguir las conexiones desde el origen hasta cada carga esencial.|Facility resilience depends on equipment, distribution, protection, sensors, procedures and people. A shared component can disable several backup sources. Analysis should trace connections from source to each essential load.",
      "Examinar el sistema completo.|Examine the complete system.",
      "Localizar puntos únicos de fallo.|Find single points of failure.",
      "No confundir instalar con verificar.|Do not confuse installing with verifying."
    ],
    [
      "Clima y riesgos físicos|Weather and physical hazards",
      "El calor puede reducir prestaciones de equipos; una inundación o tormenta puede dañar cuadros, impedir accesos y retrasar combustible. La evaluación debe incorporar exposición del emplazamiento y condiciones de diseño. Los planes físicos y logísticos se coordinan con los responsables pertinentes. En calor extremo, compara capacidad utilizable frente a carga crítica. En inundaciones, revisa exposición compartida y protección o reubicación. En tormentas, considera fallos simultáneos de red y comunicaciones. Las medidas deben validarse para el escenario concreto, no solo para condiciones normales.|Heat can degrade equipment performance; flood or storms can damage switchgear, block access and delay fuel. Assessment should include site exposure and design conditions. Physical and logistics plans require coordination with relevant owners. In extreme heat, compare usable capacity with critical load. For flooding, review shared exposure and protection or relocation. In storms, consider simultaneous grid and communication failures. Measures must be validated for the specific scenario, not only normal conditions.",
      "Analizar riesgos por activo.|Assess risks asset by asset.",
      "Preparar acceso y recuperación.|Prepare access and recovery.",
      "Validar medidas con especialistas.|Validate measures with specialists."
    ],
    [
      "Mantenimiento y pruebas|Maintenance and testing",
      "El estado real del respaldo no se demuestra con su existencia en inventario. Se requieren mantenimiento, ensayos planificados y registros de incidencias, siempre con medidas de seguridad. El mismo principio se aplica a dispositivos de transferencia, baterías, protecciones y repuestos esenciales.|Having backup listed in inventory does not prove readiness. Maintenance, planned tests and issue records are needed under safe conditions. The same applies to transfer devices, batteries, protective systems and essential spare parts.",
      "Ensayar según procedimientos aprobados.|Test under approved procedures.",
      "Registrar resultados y anomalías.|Record results and anomalies.",
      "Cerrar acciones correctivas.|Close corrective actions."
    ],
    [
      "Seguridad de sistemas OT|Operational technology security",
      "Los sistemas de control energético son tecnología operacional, con requisitos de seguridad, fiabilidad y disponibilidad. Ante anomalías, el personal debe aplicar los protocolos autorizados y escalar a equipos competentes. La referencia NIST SP 800-82 aporta orientaciones públicas, pero no sustituye procedimientos internos.|Energy control systems are operational technology with safety, reliability and availability requirements. During anomalies, staff follow authorised procedures and escalate to competent teams. NIST SP 800-82 provides public guidance, not a replacement for internal procedures.",
      "No desactivar salvaguardas.|Do not disable safeguards.",
      "Proteger acceso y trazabilidad.|Protect access and traceability.",
      "Coordinar continuidad y ciberseguridad.|Coordinate continuity and cybersecurity."
    ],
    [
      "Recuperación y simulacros|Restoration and drills",
      "Una preparación eficaz requiere responsabilidades claras, criterios de activación y secuencia segura de restablecimiento. Los simulacros detectan fallos de comunicación o de capacidad antes de una crisis real. Los resultados deben traducirse en medidas con seguimiento, responsables y fechas.|Effective preparation needs clear responsibilities, activation criteria and safe restoration sequence. Drills can reveal communication and capability gaps before a real crisis. Results must turn into tracked actions with owners and dates.",
      "Definir autoridad de decisión.|Define decision authority.",
      "Medir tiempos de respuesta.|Measure response times.",
      "Aprender de las desviaciones.|Learn from deviations."
    ]
  ],
  [
    [
      "Escenario ficticio de 72 horas|A fictional 72-hour scenario",
      "Este ejercicio plantea un horizonte de 72 horas solo con fines didácticos. No corresponde a la autonomía de ninguna instalación real. Los recursos, la demanda y las previsiones cambian con el tiempo, de modo que una decisión adecuada al principio puede requerir revisión más tarde.|This learning exercise uses a 72-hour fictional horizon. It does not describe the autonomy of any actual facility. Resources, demand and forecasts change over time, so a suitable early decision may need to change later.",
      "No extrapolar al mundo real.|Do not extrapolate to actual sites.",
      "Actualizar datos y supuestos.|Update data and assumptions.",
      "Priorizar personas y funciones esenciales.|Prioritise people and essential functions."
    ],
    [
      "Fase inicial: activación y seguridad|Initial phase: activation and safety",
      "La alerta exige confirmar la situación y activar la coordinación prevista, sin improvisar maniobras eléctricas. Se revisan cargas esenciales, riesgos para personas y equipos y capacidad confirmada. La comunicación debe distinguir lo verificado de lo que todavía es incierto.|An alert requires confirmation and activation of designated coordination, without improvised electrical actions. Review essential loads, risks to people and equipment and verified capacity. Communication should separate confirmed facts from uncertainties.",
      "Activar responsables designados.|Activate designated owners.",
      "Aplicar clasificación aprobada.|Apply approved priorities.",
      "Registrar el estado inicial.|Log initial status."
    ],
    [
      "Fase de adaptación: recursos y demanda|Adaptation phase: resources and demand",
      "A medida que transcurren las horas puede cambiar el combustible disponible, el funcionamiento de la red y la demanda. Es necesario revisar autonomía y cargas autorizadas. Las alternativas renovables o de respaldo solo pueden usarse dentro de configuraciones técnicamente validadas. Ejemplo ficticio: 360 kWh útiles / 45 kW = 8 h; una reposición a 12 h deja 4 h sin cobertura prevista. La respuesta requiere revisar alternativas y escalar a responsables, no improvisar maniobras.|As hours pass, fuel availability, grid conditions and demand can change. Autonomy and authorised loads must be reviewed. Renewable and backup alternatives can be used only within technically validated configurations. Fictional example: 360 usable kWh / 45 kW = 8 h; replenishment after 12 h leaves 4 h without forecast coverage. Review alternatives and escalate to owners rather than improvising operations.",
      "Recalcular con datos actuales.|Recalculate using current evidence.",
      "Proteger paradas seguras.|Protect safe shutdowns.",
      "Reprogramar cargas flexibles.|Reschedule flexible loads."
    ],
    [
      "Fase de coordinación: información y decisiones|Coordination phase: information and decisions",
      "Las instrucciones contradictorias pueden provocar decisiones incompatibles. Un centro de coordinación o responsable definido debe emitir información clara y registrar cambios. No se prometen impactos nulos ni se publican capacidades sin comprobar. El equipo técnico conserva la autoridad sobre los equipos.|Contradictory instructions can lead to incompatible decisions. Designated coordination should provide clear information and log changes. Never promise zero impacts or publish unverified capacities. Technical owners retain authority over equipment.",
      "Establecer fuente única de información.|Establish one authoritative information source.",
      "Comunicar límites y cambios.|Communicate limits and changes.",
      "Trazar cada decisión relevante.|Trace each material decision."
    ],
    [
      "Fase final: recuperación y aprendizaje|Final phase: recovery and learning",
      "La llegada de tensión no significa retorno instantáneo a la normalidad. Pueden requerirse comprobaciones y arranques secuenciados. El informe final debe incluir impacto en el servicio, incidentes, autonomía observada, decisiones, incertidumbres y mejoras con responsables y plazos.|The return of power does not mean instant normal operation. Checks and staged restarts may be required. The final report should include service impact, incidents, observed autonomy, decisions, uncertainties and improvements with owners and deadlines.",
      "Restaurar según procedimientos seguros.|Restore under safe procedures.",
      "Registrar desviaciones de la previsión.|Record forecast deviations.",
      "Asignar acciones de mejora.|Assign improvement actions."
    ]
  ]
];
