<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. La Escuela Nueva'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    p(data-aos="fade-down") La Escuela Nueva es un modelo educativo originado en la década de 1970, diseñado para ofrecer educación primaria completa con calidad en zonas rurales dispersas y multigrado, donde uno o dos maestros atienden varios grados simultáneamente.
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Movimiento de Escuela Nueva

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center            
        .col-lg.order-lg-1
          .p-4
            p.mb-0(data-aos="fade-up") A finales del siglo XIX, en Europa y países de influencia, se venían generando acciones, investigaciones que señalaban una gran oposición a las condiciones de la escuela tradicional, partiendo de la premisa de los bajos efectos sobre poblaciones vulnerables y la necesidad de descentralizar la misión educativa del maestro e ir trascendiendo hacia modelos educativos con énfasis en la participación estudiantil. 
        .col-lg-auto.mb-3.mb-lg-0.order-lg-2
          figure
            img.img-a.img-t(src='@/assets/curso/temas/32.png', alt='')         


    p(data-aos="fade-down") Dentro de los autores más relevantes que aportaron a la concepción pedagógica de Escuela Nueva en Europa, se encuentran:

    .row.mb-5.align-items-center 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/33.png", data-aos="zoom-in") 

      .col-lg-7
        .bg-color-2.p-4(data-aos="fade-down") 
          ul.lista-ul--color
            li.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Johann Heinrich Pestalozzi (1746-1827)
            li.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Friedrich Fröbel o Froebel (1782- 1852).
            li.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Jean-Jacques Rousseau (1712- 1778)
            li.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 John Dewey (1859 – 1952)
            li.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 María Montessori (1870- 1952)
            li.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Jean Piaget (1896 – 1980)
        .bg-color-4.p-4(data-aos="fade-up") 
          p(data-aos="fade-down").mb-0 La Escuela Nueva en Colombia, es considerada un modelo educativo inspirado en la educación activa, creado por Victoria Colbert y Óscar Mogollón, con el propósito de brindar soluciones a la educación rural en Colombia.
                                      
    .bg-full-width.bg-color-9.p-4.mb-5(data-aos="fade-left")
      .row
        .col-lg-auto
          img.img-a.img-t(src="@/assets/curso/temas/34.svg")
        .col-lg.j1
          p.mb-0 El modelo genera rutas para atender las desigualdades sociales y ofrece una educación pertinente y de calidad para niños en contextos vulnerables. Surge con el principio de la escuela democrática, donde todos los agentes que intervienen poseen un papel fundamental dentro de la escuela y las opiniones y criterios de cada uno de sus miembros son tenidos en cuenta. 

    .bg-full-width-3.bg-fondo-1
      .px-4.px-md-5.pb-md-3  
        #t_2_2.titulo-segundo(data-aos="flip-up")
          h2 #[span 2.2] Características y principios de la Escuela Nueva                 
        p(data-aos="fade-down") La Escuela Nueva se caracteriza por asumir el aprendizaje activo y experiencial del estudiante, ser multigrado, contar con participación comunitaria, tener flexibilidad académica y adelantar acciones permanentes de capacitación docente.

        p(data-aos="fade-down") Dentro de sus principales características, se destacan:

        .row.justify-content-center.mb-5      
          .col-lg-8
            SlyderF.text-center(columnas="col-12 col-lg-6")
              .custom-image-card-2.h-100.sha.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/35.png" alt="")
                .custom-image-card__text.p-2
                  p.mb-0 Incrementar la expansión de la escolaridad.   
              .custom-image-card-2.h-100.sha.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/36.png" alt="")
                .custom-image-card__text.p-2
                  p.mb-0 Mejorar la calidad de la educación de la enseñanza. 
              .custom-image-card-2.h-100.sha.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/37.png" alt="")
                .custom-image-card__text.p-2
                  p.mb-0 Desarrollar experiencias autónomas, dinámicas y creadoras de pensamiento. 
              .custom-image-card-2.h-100.sha.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/38.png" alt="")
                .custom-image-card__text.p-2
                  p.mb-0 Facilitar a los niños una gran variedad de experiencias. 
              .custom-image-card-2.h-100.sha.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/39.png" alt="")
                .custom-image-card__text.p-2
                  p.mb-0 Crear mentes abiertas y libres.
              .custom-image-card-2.h-100.sha.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/40.png" alt="")
                .custom-image-card__text.p-2
                  p.mb-0 Desarrollar técnicas de observación. 
              .custom-image-card-2.h-100.sha.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/41.png" alt="")
                .custom-image-card__text.p-2
                  p.mb-0 Establecer una relación continua e interpersonal con el medio. 
              .custom-image-card-2.h-100.sha.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/42.png" alt="")
                .custom-image-card__text.p-2
                  p.mb-0 Alcanzar una mayor creatividad personal.

          .col-lg-4
            figure
              img.img-a.img-t(src='@/assets/curso/temas/43.png', alt='')

    p(data-aos="fade-down") En cuanto a los principios de la Escuela Nueva, se plantean los siguientes: 

    .bg-full-width.bg-color-info
      .p-4.pb-0
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img.img-a.img-t(src='@/assets/curso/temas/44.png', alt='')

                .bg-color-white.box-shadow.p-3(x="38.4%" y="84%" numero="+")
                  h5 1. El estudiante tiene participación 
                  p.mb-0 Dentro de su proceso de enseñanza, colocando al propio alumno en el centro de la actividad de enseñanza.
                .bg-color-white.box-shadow.p-3(x="50%" y="79%" numero="+")
                  h5 2. El profesor deja de ser el protagonista 
                  p.mb-0 En el proceso de enseñanza-aprendizaje y pasa a ser facilitador y acompañante en la educación.  
                .bg-color-white.box-shadow.p-3(x="60.6%" y="74%" numero="+")
                  h5 3. El estudiante empieza 
                  p.mb-0 A ser el responsable de aprender, indagar, explorar y experimentar, con la finalidad de ir aprendiendo de su propia experiencia.
                .bg-color-white.box-shadow.p-3(x="53%" y="47%" numero="+")
                  h5 4. El aula y los materiales didácticos se ajustan
                  p.mb-0 A las necesidades e intereses, para lograr la interacción entre el grupo. 
                .bg-color-white.box-shadow.p-3(x="41.5%" y="43%" numero="+")
                  h5 5. Los materiales didácticos responden a las necesidades e intereses 
                  p.mb-0 Evolutivas y del desarrollo de los niños, jóvenes o adultos. 
                                    
    .bg-full-width.bg-color-3.p-4.mb-5(data-aos="fade-left")
      .row
        .col-lg-auto
          img.img-a.img-t(src="@/assets/curso/temas/45.svg")
        .col-lg.j1
          p.mb-0 Por su parte, el Ministerio de Educación colombiano (2021), plantea que la Escuela Nueva es un modelo escolarizado de educación formal, con respuestas al multigrado rural y a la heterogeneidad de edades y orígenes culturales de estudiantes en escuelas de los contextos rurales y urbano - marginales.  

    p(data-aos="fade-down") Permite ofrecer los cinco grados de la básica primaria con calidad, en escuelas multigrado con uno, dos o hasta tres maestros, bajo la integración, la socialización, la pedagogía activa y colaborativa.

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Estrategias pedagógicas y didácticas de la Escuela Nueva
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/46.png", data-aos="zoom-in")                 
      .col-lg-8
        .bg-color-1.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-down").mb-0 Al tener un centro de atención sobre el aprendizaje en contexto de alta vulnerabilidad, las prácticas pedagógicas de la Escuela Nueva requieren un rol de profesor basado en su formación permanente, en donde se reconoce su potencial para planear, crear herramientas, formular proyectos y dinamizar un acompañamiento permanente y flexible.
     
    p(data-aos="fade-down") Por otro lado, la lectura del contexto, sus necesidades, la atención diferencial de los estudiantes y las dinámicas propias de los sectores rurales, son el componente esencial de la dinamización de las clases y proyectos. 
    .titulo-figura(data-aos="fade-right")
      h5 Figura 1.
      span Modelo de atención de la Escuela Nueva

    .bg-color-11.p-4.mb-5(data-aos="fade-left")
      figure.mb-5
        img.img-a.img-t(src="@/assets/curso/temas/47.svg", data-aos="zoom-in")     
      p(data-aos="fade-down") En el siguiente enlace del Ministerio de Educación Nacional de Colombia, podrá acceder a los libros y cartillas conforme currículo actualizado y distribuido en los contextos rurales para su implementación escolar. Estos insumos ofrecen orientación para los profesores de la educación primaria de las zonas rurales del país. Integra estrategias curriculares, de capacitación docente, gestión administrativa y participación comunitaria.

      .row.justify-content-center.align-items-center
        .col-lg-9
          .bg-color-white.shadow-soft.py-4.px-lg-5.br-1
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/componentes/link.svg", style="width: 70px;")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Ministerio de Educación Nacional de Colombia
                    p Exploremos Escuela Nueva Guías y Cartillas. En el siguiente enlace del Ministerio de Educación Nacional de Colombia.
                  .col-sm-auto
                    a.boton.color-acento-contenido.texto-blanco(href="https://librosdetextocolombia.com/escuela-nueva/)" target="_blank")
                      span Descargar
                      i.fas.fa-arrow-right


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.mineducacion.gov.co/portal/Preescolar-basica-y-media/Modelos-Educativos-Flexibles/340089:Escuela-Nueva" target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (2021). Escuela Nueva. Modelo escolarizado de educación formal, con respuestas al multigrado rural y a la heterogeneidad de edades y orígenes culturales de los alumnos de las escuelas urbano - marginales.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://librosdetextocolombia.com/escuela-nueva/" target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (s.f.). Escuela Nueva Guías y Cartillas. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=ECCCFPfKZDs" target="_blank" rel="noopener noreferrer") Sprouts Español. (2022). 5 estilos de Crianza y sus Efectos en la Vida (video). 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=H3-VlgZ3yUs" target="_blank" rel="noopener noreferrer") Compartir Palabra Maestra. (2016). ¿Qué es Escuela Nueva? (video). 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=bT-4WAZmBmY&t=37s" target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (2013). Modelos educativos pensados para cada contexto (video). 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=GHMO5SKOJUg" target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (2013). Tablero Digital: Modelos Educativos Flexibles (video). 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=6Pz3DzKMYyw" target="_blank" rel="noopener noreferrer") Compartir Palabra Maestra. (2020). Maestros de Maestros. Johann Heinrich Pestalozzi (video). 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=lieFOzjLHM8" target="_blank" rel="noopener noreferrer") Sprouts. (2021). Froebel’s Kindergarten: The Origins of Early Childhood Education (video). 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=kHrbtjI4uMQ" target="_blank" rel="noopener noreferrer") Sprouts. (2023). Rousseau's 5 Stages of Child Development (video). 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=UzmvtVAuuyI" target="_blank" rel="noopener noreferrer") Sprouts. (2016). Montessori School Education (video). 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=yYFhPO5pArc&t=263s" target="_blank" rel="noopener noreferrer") Sprouts Español. (2020), La Teoría del Desarrollo Cognitivo de Piaget (video). 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=GpyBuCYOiLY" target="_blank" rel="noopener noreferrer") Edu. Vitual y a Distancia de la U. de Cundinamarca. (2025). Storytelling: Cómo contar historias impactantes (video).                                                                                                                       

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Infancias Rurales',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'El Decreto 1075 del 2015, también conocido como el Decreto Único Reglamentario del Sector Educación en Colombia, tiene como objetivo: ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Detallar la política rural de Colombia.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Compilar y racionalizar la normativa reglamentaria que regula el sector educativo en Colombia, estableciendo un único instrumento jurídico para el mismo.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Promover la legislación del programa “De cero a Siempre”.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Fomentar la tecnología en los territorios rurales del país. ',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'La Resolución número 021598 del 2021 del Ministerio de Educación Nacional (MEN), por la cual se adopta el Plan Especial de Educación Rural (PEER): ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Hace parte de la Ley 115 de 1994, Ley general de Educación.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Es un producto de uno de los propósitos del acuerdo final para la terminación del conflicto y la construcción de una Paz estable y duradera.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Define los propósitos de la educación básica, media y superior.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Introduce los elementos de la política internacional de la educación rural.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: 'La sigla PEER significa: ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Plan educativo Especial Rural.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Plan Especial de Educación Rural.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Plan Especializado de los Entornos Rurales.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: '<i>Poor and Special Rural Enviroment.</i>',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'Uno de los propósitos del PEER es buscar la atención integral a la primera infancia, la cobertura, calidad y pertinencia de la educación en áreas rurales, así como la erradicación del analfabetismo y la permanencia productiva de jóvenes en el campo.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Falso.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Verdadero.',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'Es un enfoque educativo centrado en el estudiante, buscando un aprendizaje más significativo, personalizado y contextualizado, que prepare a los estudiantes para la vida real y les permita desarrollar su potencial al máximo, aplicado de manera efectiva en el sector rural.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuela activa.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Escuela nueva.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Escuela rural.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Escuela rural.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
