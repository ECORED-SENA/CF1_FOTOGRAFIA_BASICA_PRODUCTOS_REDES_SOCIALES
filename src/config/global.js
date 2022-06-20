export default {
  global: {
    componenteFormativo: 'Introducción a la fotografía',
    descripcionCurso:
      'Con la fotografía se pueden expresar sentimientos, estados de ánimo, y activar los sentidos, lo cual repercute en que potenciales audiencias se identifiquen. El propósito es realizar fotografías a partir de los elementos que nos rodean y  herramientas que se tienen a la mano con el fin de marcar la diferencia en los contenidos que se encuentran en las redes sociales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fotografía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fotografía análoga y digital',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Los pixeles',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La cámara como dispositivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Partes de la cámara fotográfica',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Lentes y tipos de lentes fotográficos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tipos de cámaras fotográficas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Características de la fotografía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Luz',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Velocidad',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'ISO',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Triángulo de exposición',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Redes sociales para publicación de fotografías',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
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
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      texto: 'Amador, P. (s.f.). La imagen fotográfica y su lectura.',
      tipo: 'Artículo PDF',
      link: 'https://core.ac.uk/download/pdf/30042969.pdf',
    },
    {
      texto: 'Zerbst, C. (2008). Introducción a la fotografía digital.',
      tipo: 'Libro',
      link:
        'https://www.uv.mx/personal/lenunez/files/2013/06/INICIACION-A-LA-FOTOGRAFIA-DIGITAL-DeCamaras.pdf',
    },
    {
      texto: 'Quique, Efe. (2016) Lentes fotográficos ¿cómo funcionan?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4kzojQOSUxU',
    },
    {
      texto:
        'Joel Lacey,BLUME. (2004). The Lex press limited, London. Guía completa de imagen digital',
      tipo: 'Libro',
    },
    {
      texto:
        'Antoine Desilets, Les Editions de I´Homme,Montréal (1971).La Technique de la photo',
      tipo: 'Libro',
    },
  ],
  glosario: [
    {
      termino: 'Compresión ',
      significado:
        'La compresión de las imágenes digitales se ha hecho imprescindible debido a que el tamaño de los archivos de imagen es cada vez mayor, La compresión de una fotografía es la reducción de los datos digitales que no resultan necesarios e importantes. Esta compresión permite almacenar mayor número de imágenes al conseguir que los archivos resultantes no ocupen mucho espacio.',
    },
    {
      termino: 'ISO',
      significado:
        'Capacidad que tiene el soporte, bien sea, digital o análogo para reaccionar ante la exposición de luz, también llamada sensibilidad.',
    },
    {
      termino: 'Dimensión',
      significado:
        '(como medida de tamaño o espacio) La dimensión también puede ser el área, el volumen o la longitud de una superficie, un cuerpo o una línea',
    },
    {
      termino: 'Imagen',
      significado:
        'Imagen significa figura o representación visual de algo o alguien',
    },
    {
      termino: 'Lente para cámara',
      significado:
        'Se denomina objetivo al dispositivo que contiene el conjunto de lentes convergentes y divergentes y, en algunos casos, el sistema de enfoque y/o obturación, que forman parte de la óptica de una cámara tanto fotográfica como de vídeo',
    },
    {
      termino: 'Diafragma',
      significado:
        'Dispositivo mecánico que se encuentra ubicado dentro del objetivo, cuya función es controlar por medio de su apertura o cierre, la cantidad de luz que entra al material fotosensible o al sensor.',
    },
    {
      termino: 'Obturador',
      significado:
        'Dispositivo mecánico que se encuentra ubicado dentro del objetivo, cuya función es controlar el tiempo que se expone un material fotosensible a la luz o un sensor, por medio del funcionamiento del diafragma.',
    },
    {
      termino: 'Saturación',
      significado:
        'Es la intensidad de cada color de una foto, según el grado de blanco, negro o gris de su composición, cuanta más ausencia de éstos sobre un color, más pureza e intensidad.',
    },
    {
      termino: 'Sensor',
      significado:
        'Dispositivo electrónico fabricado con materiales semiconductores y estructurado en forma de matriz, acumulan una carga eléctrica en cada celda de la matriz (o pixel) en proporción a la intensidad de la luz que incide sobre ella localmente.',
    },
    {
      termino: 'Píxel',
      significado:
        'Elemento más pequeño de la imagen digital, donde se guarda la información de color, iluminación y contraste de una imagen, que al juntarse forman la totalidad de la imagen digital.',
    },
    {
      termino: 'Megapíxeles',
      significado: 'La sumatoria de los píxeles de una fotografía digital.',
    },
    {
      termino: 'Velocidad de obturación',
      significado:
        'La velocidad de obturación es una variable que controla el tiempo de exposición de la luz en la imagen final.',
    },
    {
      termino: 'Visor',
      significado:
        'Es por donde la mirada observa y encuadra la toma fotográfica. En sí, se debe interpretar qué ve la cámara fotográfica.',
    },
    {
      termino: 'Sensor',
      significado:
        'Componente principal dentro de muchos que intervienen en la buena calidad de la toma fotográfica. Es el encargado de capturar la luz y convertirla en corriente eléctrica para generar una imagen digital.',
    },
    {
      termino: 'Display',
      significado:
        'Es el encargado de permitir al fotógrafo visualizar la imagen que la cámara está asumiendo por el lente. En las cámaras actuales es la que permite visualizar también el menú y los parámetros configuración de la cámara.',
    },
  ],
  referencias: [
    {
      referencia:
        'El ISO en fotografía: Cómo sacarles el máximo provecho a los niveles de exposición de tu cámara.',
      link:
        'https://www.adobe.com/es/creativecloud/photography/discover/iso.html',
    },
    {
      referencia: 'Arqhys.com. (2017). Características de la fotografía.',
      link:
        'https://www.arqhys.com/decoracion/caracteristicas_de_la_fotografia.html',
    },
    {
      referencia:
        'De-Fotografía. (2020). ¿Qué es la velocidad de obturación en fotografía?',
      link:
        'https://de-fotografia.com/que-es-la-velocidad-de-obturacion-en-fotografia/#:~:text=La%20velocidad%20de%20obturaci%C3%B3n%2C%20es%20otro%20factor%20primordial,luz%20que%20entra%20al%20sensor%20de%20la%20c%C3%A1mara',
    },
    {
      referencia:
        'Escuela Versailles (2021). Fotografía digital y analógica: similitudes y diferencias.',
      link:
        'https://escuelaversailles.com/fotografia-digital-y-analogica-similitudes-y-diferencias/',
    },
    {
      referencia: 'Fotonostra (2020). ¿Qué es la fotografía?',
      link: 'https://www.fotonostra.com/fotografia/',
    },
    {
      referencia: 'Ionos (2021). ¿Qué es un píxel?.',
      link:
        'https://www.ionos.es/digitalguide/paginas-web/diseno-web/que-es-un-pixel/',
    },
    {
      referencia:
        'Photodesing (2014). La importancia de la luz en la fotografía.',
      link:
        'https://photodesing2.wordpress.com/2014/03/10/la-importancia-de-la-luz-en-la-fotografia/#:~:text=La%20luz%20es%20energ%C3%ADa%20electromagn%C3%A9tica%20irradiada%20por%20un,%28nm%20%3D%20millon%C3%A9simas%20de%20mil%C3%ADmetro%20%3D%200.000000001%20metros%29.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Pablo Cesar Pardo Ortiz',
        cargo: 'Experto Temático',
        centro:
          'Regional Cauca, Centro de teleinformática y producción industrial',
      },
      {
        nombre: 'Hernando José Peña Hidalgo',
        cargo: 'Experto Temático',
        centro:
          'Regional Cauca, Centro de teleinformática y producción industrial',
      },
      {
        nombre: 'José Luis Bastidas Pérez',
        cargo: 'Experto Temático',
        centro:
          'Regional Cauca, Centro de teleinformática y producción industrial',
      },
      {
        nombre: 'Joaquín Patiño Cerón',
        cargo: 'Experto Temático',
        centro:
          'Regional Cauca, Centro de teleinformática y producción industrial',
      },
      {
        nombre: 'Peter Emerson Pinchao Solís',
        cargo: 'Experto Temático',
        centro:
          'Regional Cauca, Centro de teleinformática y producción industrial',
      },
      {
        nombre: 'Henry Eduardo Bastidas Paruma',
        cargo: 'Experto Temático',
        centro:
          'Regional Cauca, Centro de teleinformática y producción industrial',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora Instruccional',
        centro: 'Regional Distrito Capital. Centro de Diseño y Metrología',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Metodóloga para la formación virtual',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Regional Distrito Capital. Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Fabian Zarate',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Edinson Castañeda Oviedo',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel Polanco',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
