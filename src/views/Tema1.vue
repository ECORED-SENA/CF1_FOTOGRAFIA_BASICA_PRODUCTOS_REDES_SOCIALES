<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white") 1
      h1 Fotografía

    img(src="@/assets/curso/temas/tema1/img-1.jpg").mb-2
    div(style="background-color: #C9DFF1").mb-4
      p.p-3.p-md-4 Definir la fotografía es asumirla como arte que consisten en capturar imágenes empleando para ello la luz, sumada con la técnica, es decir, elegir el mejor escenario para obtener imágenes duraderas contando con los diferentes formatos de captura de imágenes, los cuales pueden ser análogos o digitales.  <b>“La fotografía consiste en captar de forma permanente una imagen, gracias a la luz que reflejan los objetos. La palabra fotografía significa dibujar con luz” Fotonostra (2020)</b>
    p Al momento de abordar el tema de la historia de la fotografía se encuentra demasiado material el cual se hace bastante extenso dentro de la historia de la humanidad, por ello, es preciso mencionar que el deseo del hombre por representar la realidad no lo detuvo hasta que la simplificó con el manejo y poder de la luz sobre un dispositivo tangible como la cámara fotográfica, es importante saber que las cámaras digitales fotográficas son dispositivos de captura de imagen fija, instantánea, portátiles, confiables y cada día más prácticas en su manejo y utilización. Se debe considerar que el mercado es variado y jerarquizado por las diversas gamas. Dentro de las posibilidades de adquisición de un dispositivo fotográfico se deben de tener en cuenta las necesidades de su labor; pues será ese el factor decisivo para determinar qué dispositivo adquirir según su utilidad, se encuentran dispositivos de todo tipo y precio.

    separador
    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1.	Fotografía análoga y digital

    .offset-right.flex-wrap.flex-lg-nowrap.mb-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-2.png')})`}")
      img(src="@/assets/curso/temas/tema1/img-2.jpg" style="max-width: 610px").mx-auto.mb-4.mb-md-0.col-12.col-lg-6
      p.ps-md-4.col-12.col-lg-6 Fotografía análoga se llama a toda fotografía tomada por medio de una película fotosensible llamada rollo fotográfico y que requiere de un proceso de revelado físico mientras que la fotografía digital es la que trabaja con un registro en memoria que se revela de inmediato en una pantalla incorporada en el dispositivo generalmente. 
        br
        br
        | La fotografía digital y análoga son usadas en el registro y documentación de eventos históricos, personales o familiares, también es común verla en arte a manera de exposición. La fotografía análoga y la digital basan su trabajo en la captura de la información y para eso es común que comparten varios elementos que se relatan a continuación tal como lo refiere la Escuela Versailles (2021)

    AcordionA.mb-5.acordeon-t1(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Lentes u objetivos")
        .col-md-5.mb-4.mb-md-0
          p.ps-md-5.ms-md-3 Las lentes son la parte de la cámara que dirige los rayos de la luz hacia el carrete o el sensor digital, para capturar una imagen.
        .col-md-7
          figure
            img(src="@/assets/curso/temas/tema1/img-3.png" style="width: 648px")

      .row(titulo="Obturador y diafragma")
        .col-md-5.mb-4.mb-md-0
          p.ps-md-5.ms-md-3 El obturador es el mecanismo que controla el tiempo de exposición. Mientras que el diafragma regula la intensidad de la luz que entra por el sensor de la cámara.
        .col-md-7
          figure
            img(src="@/assets/curso/temas/tema1/img-4.png" style="width: 648px")

      .row(titulo="Sistema de enfoque")
        .col-md-5.mb-4.mb-md-0
          p.ps-md-5.ms-md-3 El sistema de enfoque hace coincidir los rayos de luz que inciden en la cámara en un punto llamado foco, y coinciden también con el sensor. Por lo tanto, significa dar nitidez a aquello que está a una distancia concreta.
        .col-md-7
          figure
            img(src="@/assets/curso/temas/tema1/img-5.png" style="width: 648px")

      .row(titulo="Zoom")
        .col-md-5.mb-4.mb-md-0
          p.ps-md-5.ms-md-3 El zoom es un objetivo o dispositivo fotográfico de distancia focal variable. Es decir, se encarga de variar a propósito, la distancia focal y el ángulo de visón. 
        .col-md-7
          figure
            img(src="@/assets/curso/temas/tema1/img-6.png" style="width: 648px")

    p.mb-5 La fotografía digital y la analógica se distinguen por diferentes aspectos, estos aspectos las hacen diferentes, a continuación, se muestran las diferencias más destacadas:

    .d-flex.flex-wrap.mb-5
      .col-lg-6.px-md-2.mb-4
        .container-interactive-hover-text(@mouseover="indicadorImagenHover = false")
          .indicador--hover.d-none.d-md-flex(v-if="indicadorImagenHover")
          .indicador--click.d-block.d-md-none(v-if="indicadorImagenHover")
          img(src="@/assets/curso/temas/tema1/img-7.png")
          .container-body-text
            p.title.fw-bold Fotografía digital
            p.content La fotografía digital utiliza un sensor de imagen. Eso significa que se encuentra unida a la tecnología informática ya que su tratamiento y retoque se hace a través de los ordenadores. Además, posee un monitor LCD con múltiples funciones y su revelado funciona de forma digital. También está formada por unos sensores que registran la información de la imagen mediante pequeñas células fotoeléctricas, conocidas como píxeles. Estos captan la luz del exterior y se manifiestan en descargas eléctricas.
      .col-lg-6.px-md-2
        .container-interactive-hover-text
          img(src="@/assets/curso/temas/tema1/img-8.png")
          .container-body-text
            p.title.fw-bold Fotografía análoga
            p.content El concepto de fotografía analógica surge como una necesidad cuando llega la fotografía digital. Por lo tanto, también se puede conocer como fotografía tradicional, química o en film. Este tipo de fotografía es mucho más compleja de lo que parece, ya que requiere de varios pasos. Pues, es un proceso lento pero que, a la vez, te permite ser mucho más consciente de tus decisiones y motivos sobre la fotografía que quieres obtener.
    p.mb-5 Con relación a las diferencias en la imagen se exponen a continuación dos imágenes, una realizada de manera digital y otra de manera análoga, el revelado de las fotos análogas se hace en papel y por lo general se mantienen impresas mientras que las digitales se mantienen el formato de archivo:

    .d-flex.flex-wrap.mb-5
      .col-md-6.position-relative.px-2.mb-3.mb-md-0
        img(src="@/assets/curso/temas/tema1/img-9.png")
        .d-flex.justify-content-center.align-items-center(style="position: absolute; bottom: 0; width: calc(100% - 1rem); min-height: 71px; background-color: #ABC0D2CF")
          p.mb-0.fw-bold Análoga
      .col-md-6.position-relative.px-2
        img(src="@/assets/curso/temas/tema1/img-10.png")
        .d-flex.justify-content-center.align-items-center(style="position: absolute; bottom: 0; width: calc(100% - 1rem); min-height: 71px; background-color: #ABC0D2CF")
          p.mb-0.fw-bold Digital

    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2. Los pixeles

    .offset-left.d-flex.flex-wrap.flex-lg-nowrap.align-items-center.mb-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-3.png')})`}" style="background-repeat: no-repeat; background-position: center")
      p.mb-0.order-2.order-md-1.pe-md-4.col-lg-7 Un píxel es la unidad mínima de la imagen digital, tal como lo relata Ionos (2021) “el píxel -o px, para abreviar- es el elemento más pequeño de una imagen reproducida digitalmente. En un monitor o en la pantalla de un teléfono móvil se suelen alinear varios píxeles en una trama. La combinación de varios píxeles constituye una imagen ``rasterizada” es decir que una imagen es la unión de miles de píxeles.
      img(src="@/assets/curso/temas/tema1/img-11.png" style="max-width: 505px").col-lg-5.order-1.order-md-2.mb-4.mb-lg-0.mx-auto
    p.mb-5 La importancia de la imagen digital toma fuerza con el desarrollo del píxel tal como lo muestran a continuación:

    figure.mb-5.video1
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorImagenHover: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.offset-left
  margin-left: -3rem
  padding-left: 3rem
  padding-top: 1rem
  padding-bottom: 2rem
  padding-right: 1rem
.offset-right
  display: flex
  align-items: center
  margin-right: -3rem
  padding-right: 3rem
@media (max-width: 768px)
  .offset-right, .offset-left
    margin-right: -3rem
    margin-left: -3rem
    padding-right: 3rem
    padding-left: 3rem
.acordeon-t1
  .tarjeta--azul
    transition: all .4s linear
    background-color: #BAD5EC
  .acordion__activo
    background-color: #F3F7FB
.container-interactive-hover-text
  position: relative
  overflow: hidden
  .container-body-text
    position: absolute
    top: calc(100% - 73px)
    bottom: auto
    width: 100%
    height: 100%
    background-color: #66D6E3D0
    padding-right: 2rem
    padding-left: 2rem
    transition: all .5s ease-in-out
    .title
      padding-top: 25px
      padding-bottom: 25px
      margin-bottom: 0
      widows: 100%
      text-align: center
  &:hover
    .container-body-text
      background-color: #66D6E3D0
      top: 50%
    @media (max-width: 1400px)
      .container-body-text
        top: 20%
    @media (max-width: 1200px)
      .container-body-text
        top: 50%
    @media (max-width: 768px)
      .container-body-text
        top: 0
        overflow: scroll
</style>
