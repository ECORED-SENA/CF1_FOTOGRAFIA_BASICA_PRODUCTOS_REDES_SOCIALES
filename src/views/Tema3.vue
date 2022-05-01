<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white") 3
      h1 Características de la fotografía

    img(src="@/assets/curso/temas/tema3/img-1.png").mb-2
    div(style="padding: 1rem; background-color: #C9DFF1")
      p.mb-0 La fotografía por ser un proceso tiene unas características que la hacen similar en todo el mundo, alrededor del globo terráqueo se observa que se mantienen dichas características para buscar una sensación o reacción en el espectador como lo dice el portal de arquitectura Arqhys.com (2017) la buena fotografía “crea una reacción, donde las personas logran estimular a nivel visual”. Estas características se evidencian en la experticia del fotógrafo logrando imágenes de óptima calidad con recursos limitados, no toda personas que tiene una cámara profesional es fotógrafo, fotógrafo es quien conoce y usa a favor del objetivo fotográfico las características de la fotografía, estas características desde la física son:
    separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_1 3.1. Luz

    .p-3.px-xl-4.mb-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/bg-1.png')})`}")
      .d-flex.flex-wrap.flex-xl-nowrap.mb-5
        p.col-12.col-xl-6.pe-3.pe-xl-4 La luz es la base para la generación del color y a su vez de la fotografía, sin luz no hay fotografía, la luz es energía electromagnética irradiada por un cuerpo luminoso. “El principal proveedor de luz en la fotografía es el Sol. La radiación electromagnética del sol está compuesta por millones de ondas de diferentes frecuencias, estas ondas tienen una longitud que se mide en nanómetros (nm = millonésimas de milímetro = 0.000000001 metros)” Photodesign (2014). Para que esta energía sea considerada como luz visible, su longitud de onda debe estar comprendida entre 400 y 780 nanómetros, es lo que se denomina como espectro visible para el ojo humano, en el que se encuentran todo los colores que son visibles a los ojos humanos. 
          br
          br
          | La luz es color, la temperatura de la luz hace que tome formas diferentes de color logrando iluminar de forma fría o cálida la temperatura de color de la luz se mide en grados Kelvin. “La luz tenderá a los tonos azulados cuanto mayor es la temperatura de color, y cuanto menor sea la temperatura de color la luz será más viva en tonalidades rojizas” Photodesing (2014) es así que se asignan los siguientes valores aproximados: 8.000º K para la sombra en un día claro (color azulado), 6.000º K para el cielo nublado, 5.500º K para un día claro, 4.000º K para la iluminación de una lámpara fluorescente blanca, 3.000º K para la iluminación de una lámpara incandescente de luz blanca, 2.000º para la luz de una vela (color rojizo).
        img(src="@/assets/curso/temas/tema3/img-2.png").col-12.col-xl-6.mb-auto
      p.mb-5 La sensibilidad hace referencia a la posibilidad electrónica que tiene la cámara fotográfica de utilizar la luz que llega desde el exterior hasta el sensor, este es un mecanismo integrado en la cámara que se denomina ISO <em>(International Organization for Standardization)</em>, el cual tiene valores referentes desde 100 hasta 16000 los números obedecen al valor de sensibilidad que las películas análogas o digitales (rollos) ante el sol. Según los modelos de las cámaras usted podrá encontrar mejor apertura para la luz tal como se muestra a continuación, a menor ISO menos luz: 
      img(src="@/assets/curso/temas/tema3/img-3.png").col-12.col-md-10.col-xl-8.mx-auto.mb-4
    p.mb-5 Como se mencionaba anteriormente la mayor fuente de luz es el sol y en su ausencia se ha podido crear luz artificial que hace una labor similar, hacen la labor de fuente de luz. Las fuentes de luz son de dos tipos, una es la luz natural que se muestra en el siguiente video:

    figure.mb-5.video1
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5 Y por el otro lado está la luz artificial que obedece a la carencia de luz natural como se muestra a continuación:

    figure.mb-5.video1
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 Para la muestra se adjunta esta fotografía con luz natural:

    img(src="@/assets/curso/temas/tema3/img-4.png").mb-5

    p En el siguiente componente formativo va a descubrir cómo trabajar con las fuentes de luz para el beneficio de los proyectos fotográficos.

    separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_2 3.2. Velocidad

    .px-xl-4.py-xl-5.d-flex.flex-wrap.flex-xl-nowrap.align-items-center(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/bg-2.png')})`}" style="margin-left: -3rem; margin-right: -3rem; padding-left: 3rem; padding-right: 3rem; background-repeat: no-repeat;")
      p.col-12.col-xl-5.px-0.px-md-4.order-2.order-xl-1 “La velocidad de obturación en fotografía, es el tiempo que permanecen abiertas las laminillas del obturador permitiendo el paso de luz. La velocidad de obturación, es otro factor primordial que ayuda a controlar la exposición de la fotografía” De-Fotografía'' (2020) Esta velocidad determina el tiempo que el obturador permanece abierto, controlando así la cantidad de luz que entra al sensor de la cámara.  Las unidades trabajadas en la velocidad son los segundos, por ejemplo, la velocidad 5000 es equivalente a 1/5000 de segundo. Las notaciones de las velocidades pueden cambiar dependiendo de la marca de cámara y su modelo. Otra forma de representarlo es 5000 o 5ooo, en general es lo mismo solo cambia la notación del término.
      img(src="@/assets/curso/temas/tema3/img-5.png" style="max-width: 674px").col-12.col-xl-7.mx-auto.order-1.order-xl-2.mb-4.mb-xl-auto

    separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_3 3.3. ISO

    div(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/bg-3.png')})`}" style="background-repeat: no-repeat; background-position: center; margin-left: -3rem; margin-right: -3rem; padding: 3rem;")
      .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.mb-5
        img(src="@/assets/curso/temas/tema3/img-6.png" style="max-width: 586px").col-12.col-xl-6.mb-4.mb-xl-auto.mx-auto
        p.col-12.col-xl-6.ps-xl-5.mb-0 La sensibilidad ISO se encarga de precisar la exposición de una imagen para evitar que la imagen se vea muy oscura o muy clara tal como se afirma en  Adobe (2020) “la sensibilidad ISO determina la cantidad de luz que dejará entrar la cámara. Es un concepto que ya existía con la fotografía tradicional, pero todavía se utiliza en la actualidad con la fotografía digital, pues sigue siendo clave controlar la luz que va a necesitar la cámara para hacer una foto”. Uno de los factores que determina el resultado final de una foto es la luz, de aquí parte la importancia de la sensibilidad de la ISO, el cual se encarga de establecer la capacidad del sensor de una cámara para distinguir la luz. Es decir, cuando sea mayor la sensibilidad, el sensor será más sensible a la luz haciendo que el proceso de una toma fotográfica sea más rápido. Haciendo referencia a la cantidad de luz que la cámara necesita para retratar una imagen, la sensibilidad tiene la función de medir la reacción del sensor ISO de acuerdo con la escena que se va a retratar (teniendo en cuenta la cantidad de luz que se presente en el espacio de la toma fotográfica) de esta manera, puede trabajar con la apertura del diafragma y con una velocidad de obturación rápida o lenta.
      img(src="@/assets/curso/temas/tema3/img-7.svg").mx-auto.col-12.col-md-10.col-xl-8
    separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_4 3.4. Triángulo de exposición

    div(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/bg-4.png')})`}" style="background-repeat: no-repeat; background-position: center; margin-left: -3rem; margin-right: -3rem; padding: 3rem;")
      p.mb-5 El triángulo de exposición es un principio técnico de iluminación que consta de los tres componentes presentes en la cámara, los cuales interactúan para formar un triángulo al momento de hacer una foto, a saber:  la apertura, la velocidad de obturación y el ISO; el triángulo de exposición es la clave principal para obtener los resultados que se espera de la fotografía, la idea es mantener el triángulo en los valores similares entre los tres elementos si unos se de los valores se mueve los otros también deberían cambiar para mantener la imagen estable.
        br
        br
        |En el triángulo de exposición, las tres variables que forman los tres lados del triángulo interactúan constantemente y trabajan juntas para producir una imagen correctamente expuesta, cuando cambia una variable, al menos una de las otras variables debe cambiar para mantener la exposición ideal.
      img(src="@/assets/curso/temas/tema3/img-8.png" style="max-width: 632px").mx-auto
    
</template>

<script>
export default {
  name: 'Tema3',
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
