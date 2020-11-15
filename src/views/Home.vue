<template>
  <div class="home">
    <Jumbotron title="Ely Errico" lead="Take a look to my profile"/>
    <div class="container">
      <h2>Main Services</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque saepe, cumque itaque ad assumenda veritatis officiis consequuntur inventore. Vero quos accusantium aspernatur nihil obcaecati provident deleniti perspiciatis? Praesentium, voluptates! Perspiciatis?</p>
      <Cards :cardata="cards"/>
    </div>
    <div class="mt-5">
      <Carousel/>
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
        { id: 0, ctitle: 'Card One', cdsc: "lorem ipsum", cbtn: "Go Somewhere", img: "https://picsum.photos/600/300/?image=2" },
        { id: 1, ctitle: 'Card Two', cdsc: "lorem ipsum", cbtn: "Go Somewhere", img: "https://picsum.photos/600/300/?image=9" },
        { id: 2, ctitle: 'Card Three', cdsc: "lorem ipsum", cbtn: "Go Somewhere", img: "https://picsum.photos/600/300/?image=7" }
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
