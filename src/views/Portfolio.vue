<template>
  <div class="portfolio">
    <Jumbotron title="Portafolio" lead="Mira los trabajos que he hecho"/>
    <b-container class="my-5">
      <b-row>
        <b-col cols="3">
          <div class="sidemenu">
            <Sidemenu />
          </div>
        </b-col>
        <b-col>
          <div class="main-content py-4 px-2">
            <h1>Portfolio page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum adipisci ea possimus aperiam quos tenetur, non saepe voluptatibus nobis excepturi quod unde rem sapiente error provident illum dignissimos. Magni, tenetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum adipisci ea possimus aperiam quos tenetur, non saepe voluptatibus nobis excepturi quod unde rem sapiente error provident illum dignissimos. Magni, tenetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum adipisci ea possimus aperiam quos tenetur, non saepe voluptatibus nobis excepturi quod unde rem sapiente error provident illum dignissimos. Magni, tenetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum adipisci ea possimus aperiam quos tenetur, non saepe voluptatibus nobis excepturi quod unde rem sapiente error provident illum dignissimos. Magni, tenetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum adipisci ea possimus aperiam quos tenetur, non saepe voluptatibus nobis excepturi quod unde rem sapiente error provident illum dignissimos. Magni, tenetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum adipisci ea possimus aperiam quos tenetur, non saepe voluptatibus nobis excepturi quod unde rem sapiente error provident illum dignissimos. Magni, tenetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum adipisci ea possimus aperiam quos tenetur, non saepe voluptatibus nobis excepturi quod unde rem sapiente error provident illum dignissimos. Magni, tenetur.</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron.vue'
import Sidemenu from '@/components/common/Sidemenu.vue'

export default {
  name: 'Portfolio',
  components: {
    Jumbotron,
    Sidemenu
  }
}
</script>