<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white") 2
      h1 La cámara como dispositivo
    
    .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.p-3.px-xl-4(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/bg-1.png')})`}" style="background-repeat: no-repeat; background-position: center")
      p.pe-md-4.order-2.order-xl-1.col-xl-6 Una cámara fotográfica o cámara de fotos es un dispositivo utilizado para capturar imágenes. Es un mecanismo antiguo para proyectar imágenes, en el que una habitación entera desempeñaba las mismas funciones que una cámara fotográfica actual por dentro, con la diferencia que en aquella época no había posibilidad de guardar la imagen a menos que ésta se trazara manualmente. Las cámaras actuales pueden ser sensibles al espectro visible o a otras porciones del espectro electromagnético y su uso principal es capturar la imagen que se encuentra en el campo visual.
        br
        br
        | Las cámaras fotográficas constan de una cámara oscura cerrada, con una abertura en uno de los extremos para que pueda entrar la luz, y una superficie plana de formación de la imagen o de visualización para capturar la luz en el otro extremo. La mayoría, tienen un objetivo formado de lentes, ubicado delante de la abertura de la cámara fotográfica para controlar la luz entrante y para enfocar la imagen, o parte de la imagen. El diámetro de esta abertura (conocido como apertura) suele modificarse con un diafragma, aunque algunos objetivos tienen apertura fija.
      img(src="@/assets/curso/temas/tema2/img-1.png").order-1.order-xl-2.mb-3.mb-xl-0.col-xl-6
    
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Los pixeles
    
    p.mb-5 Las cámaras fotográficas son la configuración ideal de muchos elementos distribuidos en un espacio que buscan un mismo objetivo, estos elementos se conocen como partes de la cámara fotográfica, en algunos textos o documentos se pueden ver con el nombre de componentes, a continuación, se reflejan todas las partes en un gráfico:
    div(style="margin-left: -3rem; margin-right: -3rem;")
      img(src="@/assets/curso/temas/tema2/img-2.svg").mb-5

    p.mb-5 Las partes de la cámara se entienden mejor en los dos siguientes videos, en el primero puede ver el cuerpo de la cámara y en el segundo los lentes:

    figure.mb-5.video1
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 Las funciones de cada parte de la cámara fotográfica se muestran en el siguiente elemento, identifique de inmediato si su teléfono cuenta con algunos de estos elementos que le pueden funcionar para las fotografías requeridas para su proyecto formativo:

    .container-carousel.mb-5
      .dots
        .dot(v-for="index in 8" :key="index" @click="indexSlider = index" :class="index == indexSlider ? 'selected' : ''")
      .arrow-left(@click="actionSlideLeft()")
        img(src="@/assets/curso/temas/tema2/arrow-carousel.svg" style="max-width: 50px;")
      .arrow-right(@click="actionSlideRight()")
        img(src="@/assets/curso/temas/tema2/arrow-carousel.svg" style="max-width: 50px; transform: rotate(180deg)")
      .container-carousel
        .container-item-carousel(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/carousel-1.png')})`}" :class="indexSlider == 1 ? 'selected' : (indexSlider > 1 ? 'isLeft' : 'isRight')")
          p.mb-0(style="color: white; font-size: 40px; font-weight: bold; position: absolute; left: 10%; top: 50%; transform: translateY(-50%)") Partes de la cámara
        .container-item-carousel(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/carousel-bg.png')})`}" :class="indexSlider == 2 ? 'selected' : (indexSlider > 2 ? 'isLeft' : 'isRight')")
          .container-item
            .col-lg-5.order-2.order-lg-1
              p.title-item El visor 
              p.text-item Es por donde la mirada observa y encuadra la toma fotográfica. En sí, se debe interpretar que ve la cámara fotográfica.
            .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
              img(src="@/assets/curso/temas/tema2/carousel-2.png" style="max-width: 583px").mx-auto

        .container-item-carousel(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/carousel-bg.png')})`}" :class="indexSlider == 3 ? 'selected' : (indexSlider > 3 ? 'isLeft' : 'isRight')")
          .container-item
            .col-lg-5.order-2.order-lg-1
              p.title-item El objetivo 
              p.text-item Es el lente del cuerpo de la cámara, es por donde entra la luz a la cámara para que el sensor registre de manera correcta la imagen latente dada por la luz. Lo que el lente proporciona y genera en la cámara es darle diferentes perspectivas en la imagen fotográfica. 
            .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
              img(src="@/assets/curso/temas/tema2/carousel-3.png" style="max-width: 583px").mx-auto

        .container-item-carousel(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/carousel-bg.png')})`}" :class="indexSlider == 4 ? 'selected' : (indexSlider > 4 ? 'isLeft' : 'isRight')")
          .container-item
            .col-lg-5.order-2.order-lg-1
              p.title-item El sensor 
              p.text-item Es el componente principal dentro de muchos que intervienen en la buena calidad de la toma fotográfica. Es el encargado de capturar la luz y convertirla en corriente eléctrica para generar una imagen digital.
            .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
              img(src="@/assets/curso/temas/tema2/carousel-4.png" style="max-width: 583px").mx-auto

        .container-item-carousel(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/carousel-bg.png')})`}" :class="indexSlider == 5 ? 'selected' : (indexSlider > 5 ? 'isLeft' : 'isRight')")
          .container-item
            .col-lg-5.order-2.order-lg-1
              p.title-item El diafragma 
              p.text-item Son las cortinillas encargadas con sus movimientos físicos de cerrar y abrir según sea la indicación realizada por el operador de la cámara, lo que permitirán mayor o menor cantidad de luz hacia el sensor según la necesidad de la toma fotográfica, como resultado de la iluminación presente de la escena. También su apertura del diafragma hará que la nitidez de la imagen se amplíe.
            .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
              img(src="@/assets/curso/temas/tema2/carousel-5.png" style="max-width: 583px").mx-auto

        .container-item-carousel(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/carousel-bg.png')})`}" :class="indexSlider == 6 ? 'selected' : (indexSlider > 6 ? 'isLeft' : 'isRight')")
          .container-item
            .col-lg-5.order-2.order-lg-1
              p.title-item El obturador
              p.text-item Son cortinillas encargadas de bloquear la luz al sensor. Su movimiento permite el ingreso de la luz del exterior por el lente, lo que hace que al sensor registrar la luz para convertirla en imagen digital. Este proceso ya está antecedido por el funcionamiento del diafragma, por lo tanto, el obturador finalmente hará posible en la fotografía, que ese instante de la realidad quede plasmado y pueda quedar registrado en la cámara fotográfica. 
            .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
              img(src="@/assets/curso/temas/tema2/carousel-6.png" style="max-width: 583px").mx-auto

        .container-item-carousel(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/carousel-bg.png')})`}" :class="indexSlider == 7 ? 'selected' : (indexSlider > 7 ? 'isLeft' : 'isRight')")
          .container-item
            .col-lg-5.order-2.order-lg-1
              p.title-item La pantalla
              p.text-item Se le conoce como Display y es el encargado de permitir al fotógrafo visualizar la imagen que la cámara está asumiendo por el lente. En las cámaras actuales es la que permite visualizar también el menú y los parámetros de configuración de la cámara.
            .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
              img(src="@/assets/curso/temas/tema2/carousel-7.png" style="max-width: 583px").mx-auto

        .container-item-carousel(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/carousel-bg.png')})`}" :class="indexSlider == 8 ? 'selected' : (indexSlider > 8 ? 'isLeft' : 'isRight')")
          .container-item
            .col-lg-5.order-2.order-lg-1
              p.title-item Los botones y diales de control 
              p.text-item Son los diferentes mecanismos físicos que harán que la cámara fotográfica opere de manera específica, según sea la necesidad del fotógrafo. Cada botón tiene una función específica y haciendo referencia al dial, este es la perilla superior donde según su posición respecto al indicador, da una función determinada para el manejo de la cámara.
            .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
              img(src="@/assets/curso/temas/tema2/carousel-8.png" style="max-width: 583px").mx-auto

    .offset-left.d-flex.flex-wrap.flex-xl-nowrap.py-0.pe-0.align-items-center.mb-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/bg-2.png')})`}")
      p.mb-4.mb-xl-0.pe-0.pe-xl-4.order-2.order-xl-1.col-xl-6 Un elemento muy común dentro de los dispositivos, sobre todo los más recientes es el espacio de modos de foto, los modos de foto son preconfiguraciones que vienen con la cámara desde la fábrica en la que setean todos los elementos para facilitar la captura fotográfica de los eventos más populares, inclusive dejan elegir si lo que el fotógrafo quiere es hacer las tomas de manera manual. Estos modos ayudan mucho a personas que quieren hacer fotos de buena calidad de manera rápida y con cuentan con tanto conocimiento para hacerlo o prefieren confiar en las configuraciones de fábrica, en la siguiente imagen se muestran los modos de cámara y sus usos más frecuentes:
      img(src="@/assets/curso/temas/tema2/img-2.png").order-1.order-xl-2.mb-4.mb-xl-0.col-xl-6

    p.mb-0 <b>Modos de la cámara digital:</b> las cámaras digitales disponen de diferentes modos de uso, que se determinan según la escena y la situación de luz que se va a fotografiar, los cuales son: 

    .d-flex.flex-wrap.flex-xl-nowrap(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/bg-3.png')})`}" style="background-repeat: no-repeat; margin-left: -3rem; margin-right: -3rem; padding: 6rem 3rem;")
      .order-2.order-xl-1
        .d-flex.align-items-center.mb-4
          img(src="@/assets/curso/temas/tema2/1.svg" style="max-width: 108px").me-2.mb-auto.mb-md-0
          p.mb-0.my-md-auto <b>Automático: </b>
            br
            | en este modo la cámara controla por sí sola la velocidad, la apertura del<br class="d-none d-xl-flex"> diafragma y el ISO.
        .d-flex.align-items-center.mb-4
          img(src="@/assets/curso/temas/tema2/2.svg" style="max-width: 108px").me-2.mb-auto.mb-md-0
          p.mb-0.my-md-auto <b>Semi-automático:</b>
            br
            | donde la cámara controla solamente la velocidad y la apertura del<br class="d-none d-xl-flex"> diafragma y el fotógrafo controla el ISO.
        .d-flex.mb-4
          img(src="@/assets/curso/temas/tema2/3.svg" style="max-width: 108px").me-2.mb-auto
          p.mb-0.my-md-auto <b>Modo manual:</b>
            br
            | en donde el fotógrafo controla la velocidad, la apertura del diafragma y<br class="d-none d-xl-flex"> el ISO. Es recomendable llegar a usar el modo manual, ya que es aquí<br class="d-none d-xl-flex"> donde todas las destrezas y saberes del fotógrafo se ponen en juego.
      img(src="@/assets/curso/temas/tema2/img-9.png" style="max-width: 570px").mx-auto.ms-auto.order-1.order-xl-2.mb-4.mb-xl-auto
    
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2. Lentes y tipos de lentes fotográficos
    
    .position-relative.mb-5
      img(src="@/assets/curso/temas/tema2/img-3.png").mb-2
      div(style="background-color: #BAD5EC; bottom: 0; padding: 2rem 1.5rem; font-size: 15px")
        p.mb-0 Los lentes y objetivos son parte esencial para la buena calidad de las fotografías, si bien la cámara es la que manipula y captura la imagen, el lente es quien recoge y dirige la luz, Los lentes fotográficos son herramientas fundamentales para la imagen final, tanto como expresión creativa como para la practicidad de la toma fotográfica. La amplia gama de lentes a disposición hace posible que todas las necesidades y exigencias fotográficas sean posibles. Es importante mencionar que los diferentes lentes tienen diversos ángulos de toma fotográfica. Todos los lentes se miden en mm (28 mm, 50 mm) y cada uno de ellos tiene su ángulo y amplitud de toma. 
    
    img(src="@/assets/curso/temas/tema2/img-4.svg").mb-5

    p.mb-5 Todas las partes de la cámara son importantes pero sus lentes son quizá lo más notorio debido a que son intercambiables y se adquieren por separado según la necesidad específica del fotógrafo como se puede ver en el siguiente video:

    figure.mb-5.video1
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  
    p Los objetivos fotográficos son variados porque se distinguen gracias a la necesidad que cubren, hay objetivos que están dados para distancias pequeñas o otros para distancias mayores teniendo en cuenta siempre el objetivo de la fotografía, es por eso que en el mercado se presentan miles de opciones en las que están destacadas las más populares que se muestran a continuación, sin embargo, es posible que el objetivo puntual que requieran ciertos proyectos específicos no se encuentre en el listado.

    separador
    .d-flex.mb-5
      div(style="margin-left: -3rem; padding-top: .5rem; padding-bottom: .5rem; padding-left: 3rem; border-top-right-radius: 11px; background-color: #C9DFF1; position: relative; padding-right: 80px")
        h3.mb-0 {{titulosSlide[indexSlide]}}
        img(src="@/assets/curso/temas/tema2/decorador.svg" style="width: 83px; position: absolute; right: -40px; top: -25px")
    SliderPersonalizado.mb-5(:datos="datosSlyder" @indexSlide="indexSlide = $event")

    separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_3 2.3. Tipos de cámaras fotográficas

    .d-flex.flex-wrap.flex-xl-nowrap.mb-4
      img(src="@/assets/curso/temas/tema2/img-5.png" style="max-width: 610px").col-12.col-xl-6.mb-4.mb-xl-auto.mx-auto
      p.col-12.col-xl-6.ps-0.ps-xl-4.mb-0 La calidad de las imágenes tomadas con una cámara digital es diferente de la calidad de las imágenes tomadas con un teléfono móvil. Esas diferencias se dan por varios motivos, en primer lugar, se puede decir esto por la calidad de la imagen y la nitidez de los detalles, por supuesto, será mayor la calidad (en pixeles) la fotografía con una cámara digital; es claro que los materiales también influyen ya que las cámaras fotográficas de lentes (objetivos) intercambiables pueden ser hasta en vidrio haciendo el efecto réflex casi perfecto mientras que las cámaras de los celulares tienen un lente fijo (objetivo fijo) y sus cambios son digitales; y por último su funcionalidad y seguimiento, es claro que una cámara está hecha solo para eso mientras que los teléfonos también usan su cámara para otras tareas que no requieren imágenes de gran resolución como las de las videollamadas o publicaciones sencillas en redes sociales.
        br
        br
        span.notShow La velocidad de obturación también es importante al grabar videos, no importa qué tan avanzada sea la tecnología celular, los últimos desarrollos tecnológicos en teléfonos a 2025 no serán tan rápidos como las cámaras digitales, eso hace que se demore algunas milésimas de segundos más la toma de fotos con el teléfono, lo que puede resultar en imágenes borrosas entre los fotogramas, eso se puede evidenciar con una pausa en un video capturado por medio de un teléfono móvil.
    p.showText La velocidad de obturación también es importante al grabar videos, no importa qué tan avanzada sea la tecnología celular, los últimos desarrollos tecnológicos en teléfonos a 2025 no serán tan rápidos como las cámaras digitales, eso hace que se demore algunas milésimas de segundos más la toma de fotos con el teléfono, lo que puede resultar en imágenes borrosas entre los fotogramas, eso se puede evidenciar con una pausa en un video capturado por medio de un teléfono móvil.
    p.mb-5 Los teléfonos móviles tienen la ventaja de la versatilidad lo que los hace muy potentes para las diferentes tareas además de tomar fotos y para muchos eventos en redes sociales las fotos generadas con estos dispositivos son ideales en formato, calidad, peso y formato como lo podrán ver más adelante.
      br
      br
      | En la siguiente historieta lo podrás entender mejor:

    SliderCPersonalizado.color-acento-contenido(text-small)
      div(titulo="")
        img(src='@/assets/curso/temas/tema2/img-linea-1.svg')
      div(titulo="")
        img(src='@/assets/curso/temas/tema2/img-linea-2.svg')
      div(titulo="")
        img(src='@/assets/curso/temas/tema2/img-linea-3.svg')
      div(titulo="")
        img(src='@/assets/curso/temas/tema2/img-linea-4.svg')
      div(titulo="")
        img(src='@/assets/curso/temas/tema2/img-linea-5.svg')
      div(titulo="")
        img(src='@/assets/curso/temas/tema2/img-linea-6.svg')
      div(titulo="")
        img(src='@/assets/curso/temas/tema2/img-linea-7.svg')
      div(titulo="")
        img(src='@/assets/curso/temas/tema2/img-linea-8.svg')
      div(titulo="")
        img(src='@/assets/curso/temas/tema2/img-linea-9.svg')
      
</template>

<script>
import SliderPersonalizado from '@/components/SliderPersonalizado.vue'
import SliderCPersonalizado from '@/components/SliderCPersonalizado.vue'
export default {
  name: 'Tema2',
  components: { SliderPersonalizado, SliderCPersonalizado },
  data: () => ({
    indexSlider: 1,
    indexSlide: 0,
    titulosSlide: [
      'Gran angular 18 mm – 28 mm',
      'Lente angular 35 mm',
      'Lente normal 50 mm',
      'Teleobjetivo 100 mm',
      'Teleobjetivo 500 mm',
    ],
    datosSlyder: [
      {
        titulo: '',
        texto:
          'El gran angular es un lente de una utilización muy específica, ya que altera la imagen y cambia la forma de los objetos de manera que los desproporciona. Igualmente, por esas condiciones mencionadas sirve para generar interés artístico y funcionalmente se puede tener buenas tomas en lugares estrechos.',
        imagen: require('@/assets/curso/temas/tema2/img-carousel-1.png'),
      },
      {
        titulo: '',
        texto:
          'El lente angular va desde 35 mm hasta los 45 mm. de igual forma puede alterar las formas de los cuerpos fotografiados, tiene también una utilidad muy específica en la fotografía de paisajes y fotografía de viaje.',
        imagen: require('@/assets/curso/temas/tema2/img-carousel-2.png'),
      },
      {
        titulo: '',
        texto:
          'Es el lente de preferencia por muchos fotógrafos profesionales y amateur, ya que cuenta con un ángulo de toma normal. Es importante mencionar que todos los lentes son intercambiables, su apertura en diafragma incide en la cantidad de luz que va a llegar al sensor.',
        imagen: require('@/assets/curso/temas/tema2/img-carousel-3.png'),
      },
      {
        titulo: '',
        texto:
          'Este es un tipo de lente que permite registros fotográficos a una amplia distancia. Por su extensión y construcción física deben ser de amplio diafragma, de ser así sería demasiado opaco como se le denomina fotográficamente hablando a lentes con baja apertura de diafragma.',
        imagen: require('@/assets/curso/temas/tema2/img-carousel-4.png'),
      },
      {
        titulo: '',
        texto:
          'Esta clase de objetivos son de un alto valor económico, lo cual hace que su utilización sea preferiblemente para fotógrafos especialistas en determinadas tomas, como avistamiento de aves, deportivas, entre otras. Su construcción es de un material de color blanco para no tener inconvenientes con la dilatación de sus materiales en contacto prolongado con el sol, pues es un lente para tomar fotografías en exteriores.',
        imagen: require('@/assets/curso/temas/tema2/img-carousel-5.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    actionSlideRight() {
      if (this.indexSlider >= 8) {
        this.indexSlider = 1
      } else {
        this.indexSlider += 1
      }
    },
    actionSlideLeft() {
      if (this.indexSlider == 1) {
        this.indexSlider = 8
      } else {
        this.indexSlider -= 1
      }
    },
  },
}
</script>

<style lang="sass">
.container-carousel
  position: relative
  overflow: hidden
  min-height: 593px
  height: 100%
  width: 100%
  display: flex
  align-content: stretch
  .dots
    position: absolute
    z-index: 1
    bottom: 2rem
    right: 50%
    transform: translateX(50%)
    display: flex
    .dot
      margin-right: 1rem
      height: 15px
      width: 15px
      border-radius: 50%
      background-color: #6C757D
      cursor: pointer
      transition: all .3s linear
      &.selected
        background-color: #BAD5EC
  .arrow-left
    position: absolute
    left: 2rem
    bottom: 2rem
    z-index: 1
    cursor: pointer
  .arrow-right
    position: absolute
    right: 2rem
    bottom: 2rem
    z-index: 1
    cursor: pointer
  .container-carousel
    min-width: 100%
    position: relative
    border-radius: 15px
    .container-item-carousel
      min-width: 100%
      min-height: 100%
      background-position: center
      background-size: cover
      border-radius: 15px
      position: absolute
      transition: all .6s ease-in-out
      &.selected
        left: 0
      &.isLeft
        left: -100%
      &.isRight
        left: 100%
      .container-item
        display: flex
        flex-wrap: wrap
        padding: 3rem 2rem
        .title-item
          color: white
          font-weight: bold
          font-size: 18px
          margin-bottom: 4rem
        .text-item
          color: white
          padding-right: 8rem
@media (max-width: 1400px)
  .container-carousel
    .container-carousel
      .container-item-carousel
        .container-item
          padding: 2rem 1rem
@media (max-width: 1000px)
  .container-carousel
    min-height: 880px
    .container-carousel
      .container-item-carousel
        .container-item
          padding: 2rem 1rem
          .text-item
            padding-right: 0
    .dots
      bottom: 0.5rem
@media (max-width: 1000px)
  .container-carousel
    min-height: 790px
    .container-carousel
      .container-item-carousel
        .container-item
          padding: 2rem 1rem
          .text-item
            padding-right: 0
    .dots
      bottom: 0.5rem
@media (max-width: 768px)
  .container-carousel
    min-height: 740px
.offset-left
  margin-left: -3rem
  padding-left: 3rem
  padding-top: 1rem
  padding-bottom: 2rem
  padding-right: 1rem
@media (max-width: 768px)
  .offset-right, .offset-left
    margin-right: -3rem
    margin-left: -3rem
    padding-right: 3rem !important
    padding-left: 3rem !important
.notShow
  display: flex
  @media (max-width:1400px)
    display: none
.showText
  display: none
  @media (max-width:1400px)
    display: flex
</style>
