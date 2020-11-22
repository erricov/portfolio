<template>
  <div class="home">
    <Jumbotron title="Ely Errico" lead="Mira un resumen de mi perfil"/>
    <div class="container">
      <h2>Main Services</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque saepe, cumque itaque ad assumenda veritatis officiis consequuntur inventore. Vero quos accusantium aspernatur nihil obcaecati provident deleniti perspiciatis? Praesentium, voluptates! Perspiciatis?</p>
    </div>
    <div class="container-fluid bg-primary-cstm py-5">
      <h2 class="text-white mt-0">Main Services</h2>
      <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
      <Cards :cardata="cards"/>
    </div>
    <div class="">
      <Carousel/>
    </div>
    <div class="container-fluid bg-primary-cstm py-5">
      <h2 class="text-white mt-0">Main Services</h2>
      <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
      <Cards :cardata="cards"/>
    </div>
    <div class="container">        
      <h2>Main Services</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque saepe, cumque itaque ad assumenda veritatis officiis consequuntur inventore. Vero quos accusantium aspernatur nihil obcaecati provident deleniti perspiciatis? Praesentium, voluptates! Perspiciatis?</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron.vue'
import Cards from '@/components/cards/Cards.vue'
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'Home',
  data: function () {
    return {
      seen: true,
      cards: [
        { id: 0, ctitle: 'Frontend Development', cdsc: "Una basta experencia desarrollando el frontend de las paginas web, partiendo de borradores de diseño de graficos competentes", cbtn: "Leer mas", img: "https://picsum.photos/600/300/?image=2" },
        { id: 1, ctitle: 'Backend Development & API', cdsc: "Gracias a mi experencia de trabajo, alta competencia en cuanto tecnologia backend se refiere, su logica y como manipular los datos de una database", cbtn: "Leer mas", img: "https://picsum.photos/600/300/?image=9" },
        { id: 2, ctitle: 'Database Magnament', cdsc: "En una empresa como Full Stack, aprendi a trabajar con un database y armar querys mas complejas para obtener el resultado deseado", cbtn: "Leer mas", img: "https://picsum.photos/600/300/?image=7" }
      ]
    }
  },
  components: {
    Jumbotron,
    Cards,
    Carousel
  }
}
</script>
