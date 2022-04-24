<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white") 4
      h1 Redes sociales para publicación de fotografías 

    .p-3.py-xl-5.d-flex.flex-wrap.flex-xl-nowrap.align-items-center.mb-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/bg-1.png')})`}")
      img(src="@/assets/curso/temas/tema4/img-1.png" style="max-width: 505px;").mx-auto.mb-4.mb-xl-0
      p.mb-0.ps-xl-5 La fotografía digital en las redes sociales se ha convertido en la mejor herramienta para los vendedores y compradores del mundo, ya que por medio de la fotografía se ha podido promocionar cualquier producto dentro de estas plataformas. La ventaja de las redes sociales es que no es necesario ser un fotógrafo profesional para poder publicar fotografías. Solo es necesario capturar imágenes que cuenten una historia por medio de la iluminación, el encuadre, la composición y la edición que logren cautivar a los espectadores y usuarios de estas plataformas. 
        br
        br
        | Para poder tener impacto y visibilidad en las redes sociales es necesario contar con una buena cantidad de fotografías que tengan un guion fotográfico que trace la línea a seguir y cautive al observador. El reto es crear imágenes propositivas, creativas y diferentes que se destaquen entre los miles de fotografías que día a día se encuentran en los entornos digitales.

    img(src="@/assets/curso/temas/tema4/img-2.png").mb-5

    p.mb-5 Adicionalmente puedes ver otras de las aplicaciones de la fotografía en redes sociales en el siguiente video:

    figure.mb-5.video1
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
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

<style lang="sass"></style>
