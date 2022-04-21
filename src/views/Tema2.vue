<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white") 2
      h1 La cámara como dispositivo
    
    .d-flex.flex-wrap.flex-md-nowrap.align-items-center.mb-5.p-3.px-md-4(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/bg-1.png')})`}" style="background-repeat: no-repeat; background-position: center")
      p.pe-md-4.order-2.order-md-1 Una cámara fotográfica o cámara de fotos es un dispositivo utilizado para capturar imágenes. Es un mecanismo antiguo para proyectar imágenes, en el que una habitación entera desempeñaba las mismas funciones que una cámara fotográfica actual por dentro, con la diferencia que en aquella época no había posibilidad de guardar la imagen a menos que ésta se trazara manualmente. Las cámaras actuales pueden ser sensibles al espectro visible o a otras porciones del espectro electromagnético y su uso principal es capturar la imagen que se encuentra en el campo visual.
        br
        br
        | Las cámaras fotográficas constan de una cámara oscura cerrada, con una abertura en uno de los extremos para que pueda entrar la luz, y una superficie plana de formación de la imagen o de visualización para capturar la luz en el otro extremo. La mayoría, tienen un objetivo formado de lentes, ubicado delante de la abertura de la cámara fotográfica para controlar la luz entrante y para enfocar la imagen, o parte de la imagen. El diámetro de esta abertura (conocido como apertura) suele modificarse con un diafragma, aunque algunos objetivos tienen apertura fija.
      img(src="@/assets/curso/temas/tema2/img-1.png").order-1.order-md-2.mb-3.mb-md-0
    
    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2. Los pixeles
    
    p.mb-5 Las cámaras fotográficas son la configuración ideal de muchos elementos distribuidos en un espacio que buscan un mismo objetivo, estos elementos se conocen como partes de la cámara fotográfica, en algunos textos o documentos se pueden ver con el nombre de componentes, a continuación, se reflejan todas las partes en un gráfico:

    img(src="@/assets/curso/temas/tema2/img-2.svg").mb-5

    p.mb-5 Las partes de la cámara se entienden mejor en los dos siguientes videos, en el primero puede ver el cuerpo de la cámara y en el segundo los lentes:

    figure.mb-5.video1
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 Las funciones de cada parte de la cámara fotográfica se muestran en el siguiente elemento, identifique de inmediato si su teléfono cuenta con algunos de estos elementos que le pueden funcionar para las fotografías requeridas para su proyecto formativo:

    .container-carousel
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
          p(style="font-size: 70px; color: white;") Aqui va 1
        .container-item-carousel(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/carousel-bg.png')})`}" :class="indexSlider == 3 ? 'selected' : (indexSlider > 3 ? 'isLeft' : 'isRight')")
          p(style="font-size: 70px; color: white;") Aqui va 2
        .container-item-carousel(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/carousel-bg.png')})`}" :class="indexSlider == 4 ? 'selected' : (indexSlider > 4 ? 'isLeft' : 'isRight')")
          p(style="font-size: 70px; color: white;") Aqui va 3
        .container-item-carousel(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/carousel-bg.png')})`}" :class="indexSlider == 5 ? 'selected' : (indexSlider > 5 ? 'isLeft' : 'isRight')")
          p(style="font-size: 70px; color: white;") Aqui va 4
        .container-item-carousel(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/carousel-bg.png')})`}" :class="indexSlider == 6 ? 'selected' : (indexSlider > 6 ? 'isLeft' : 'isRight')")
          p(style="font-size: 70px; color: white;") Aqui va 5
        .container-item-carousel(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/carousel-bg.png')})`}" :class="indexSlider == 7 ? 'selected' : (indexSlider > 7 ? 'isLeft' : 'isRight')")
          p(style="font-size: 70px; color: white;") Aqui va 6
        .container-item-carousel(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/carousel-bg.png')})`}" :class="indexSlider == 8 ? 'selected' : (indexSlider > 8 ? 'isLeft' : 'isRight')")
          p(style="font-size: 70px; color: white;") Aqui va 7
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    indexSlider: 1,
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
      border-radius: 15px
      position: absolute
      transition: all .6s ease-in-out
      &.selected
        left: 0
      &.isLeft
        left: -100%
      &.isRight
        left: 100%
</style>
