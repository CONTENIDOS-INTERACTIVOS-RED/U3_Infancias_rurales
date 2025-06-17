export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Leyes y normas de la educación rural',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Normatividad de la educación rural',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Contexto internacional',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Contexto nacional',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La Escuela Nueva',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Movimiento de Escuela Nueva',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Características y principios de la Escuela Nueva',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Estrategias pedagógicas y didácticas de la Escuela Nueva',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bohórquez Forero, J. P. (2021). Políticas educativas rurales en Colombia 1990-2018: dos tendencias. <i>Revista Aletheia</i>, 13(2), 15-40. ',
      link:
        'https://aletheia.cinde.org.co/index.php/ALETHEIA/article/view/632/363',
    },
    {
      referencia:
        'Trad. Bertelli, F. (2012). <i>Educación para la población rural. El papel de la educación, la formación y el desarrollo de capacidades para la reducción de la pobreza y la seguridad alimentaria</i>. FAO.',
      link:
        'https://www.fao.org/fileadmin/templates/ERP/docs2012/ERPBookSpanish2012.pdf',
    },
    {
      referencia:
        'Galván Mora, L. (2020). <i>Educación rural en América Latina. Escenarios, tendencias y horizontes de investigación</i>. Estudios y Ensayos, 1 (2), 48-69. ',
      link: 'https://doi.org/10.24310/mgnmar.v1i2.8598',
    },
    {
      referencia:
        'Jurado Valencia, F. (2022). Sobre el “plan especial de educación rural” – PEER. <i>Ruta Maestra</i>, 34. ',
      link:
        'https://rutamaestra.santillana.com.co/sobre-el-plan-especial-de-educacion-rural-peer/',
    },
    {
      referencia:
        'UNESCO. (2004). Educación de la población rural: una baja prioridad. <i>Educación hoy, 9</i>(88).',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000134440_spa',
    },
    {
      referencia:
        'Resolución 21598 del 2021 (Ministerio de Educación Nacional). Por la cual se adopta el Plan Especial de Educación Rural (PEER) en cumplimiento de lo establecido en el Punto 1.3.2.2. del Acuerdo Final para la Terminación del Conflicto y la Construcción de una Paz Estable y Duradera. 16 de noviembre de 2021. ',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=118790#:~:text=del%20Acuerdo%20Final%20establece%20como,el%20campo%2C%20y%20acercar%20las',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2021). Escuela Nueva. <i>Modelo escolarizado de educación formal, con respuestas al multigrado rural y a la heterogeneidad de edades y orígenes culturales de los alumnos de las escuelas urbano - marginales</i>.',
      link:
        'https://www.mineducacion.gov.co/portal/Preescolar-basica-y-media/Modelos-Educativos-Flexibles/340089:Escuela-Nueva',
    },
    {
      referencia:
        'Decreto. Por el cual se adiciona el Decreto 1075 de 2015 Único Reglamentario del Sector Educación, para reglamentar la Ley 1740 de 2014.',
      link:
        'https://www.mineducacion.gov.co/1759/articles-353594_recurso_1.pdf',
    },
    {
      referencia:
        'Perfetti, M. (2003). <i>Estudio sobre la educación para la población rural en Colombia</i>. REDUC.',
      link:
        'https://fundaec.org/wp-content/uploads/2021/01/Perfetti-M.-2003.-Estudio-sobre-la-Educacion-para-la-poblacion-rural-en-Colombia.-Proyecto-FAO-UNESCO-DOGCS-ITALIA-CIDE-REDUC.-pp.-164-216..pdf',
    },
    {
      referencia:
        'Suárez Caro, L. K. & Camacho Bonilla, A. (2023). Políticas Públicas de Educación Rural y Desarrollo territorial: Una Revisión Sistemática de la Literatura (2012-2023). <i>Boletín de Antropología, 38</i>(65), 11-33. ',
      link:
        'https://www.researchgate.net/publication/372672253_Politicas_Publicas_de_Educacion_Rural_y_Desarrollo_territorial_Una_Revision_Sistematica_de_la_Literatura_2012-2023',
    },
  ],
  glosario: [
    {
      termino: 'Analfabetismo',
      significado:
        'Proceso de enseñanza y aprendizaje que permite a las personas adquirir las competencias básicas de lectura, escritura y cálculo, lo que les habilita para comunicarse, comprender e interactuar con su entorno.',
    },
    {
      termino: 'Decreto',
      significado:
        'Es un acto administrativo emitido por una autoridad con competencia legal, generalmente el poder ejecutivo, que contiene normas de carácter reglamentario o decisiones sobre asuntos específicos dentro de su ámbito de acción.',
    },
    {
      termino: 'Entidades territoriales',
      significado:
        'Son personas jurídicas de derecho público que gozan de autonomía para la gestión de sus intereses dentro de los límites de la Constitución y la Ley. Esta autonomía se manifiesta en la capacidad de gobernarse por autoridades propias, ejercer competencias asignadas, administrar recursos, establecer tributos necesarios para cumplir sus funciones y participar en las rentas nacionales.',
    },
    {
      termino: 'Escolarización ',
      significado:
        'Es el acto y resultado de escolarizar, es decir, hacer que los niños accedan a la escuela para recibir la enseñanza obligatoria establecida por el Estado.',
    },
    {
      termino: 'Escuela Nueva',
      significado:
        'Modelo educativo innovador que surgió en Colombia hace aproximadamente 35 años, diseñado para ofrecer educación primaria completa con calidad en zonas rurales, especialmente en escuelas multigrado con uno o dos maestros.',
    },
    {
      termino: 'Intersectorialidad',
      significado:
        'Acción coordinada y articulada entre diferentes sectores sociales e instituciones públicas, para abordar problemas complejos que afectan el bienestar social, como la salud, la educación, el trabajo y otros determinantes sociales.',
    },
    {
      termino: 'Jornada única',
      significado:
        'Estrategia educativa que consiste en ampliar el tiempo diario que los estudiantes dedican a actividades académicas y complementarias en los establecimientos educativos oficiales, con el fin de mejorar la calidad y la integralidad de la educación.',
    },
    {
      termino: 'Mapa conceptual',
      significado:
        'Herramienta gráfica que organiza y representa conocimientos mostrando las relaciones jerárquicas y de vinculación entre conceptos e ideas claves de un tema específico. Se utiliza para definir, explicar y analizar sistemas complejos dividiendo una gran idea en fragmentos que facilitan su comprensión.',
    },
    {
      termino: 'Multigrado',
      significado:
        'Modalidad educativa en la que un solo docente enseña simultáneamente a estudiantes de dos o más grados escolares diferentes dentro de un mismo aula o espacio físico. Esta organización es común en escuelas rurales o en zonas con baja concentración de alumnos, donde no es viable tener un maestro por cada grado.',
    },
    {
      termino: 'Resolución',
      significado:
        'Es un acto administrativo, instrucción, providencia, auto o fallo, emitido por una autoridad gubernativa o judicial.',
    },
  ],
}
