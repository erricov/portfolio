<template>
  <div class="about">
    <Jumbotron title="About me" lead="Mas detalles sobre mi"/>
    
    <b-container class="my-5">
      <b-row>
        <b-col cols="3">
            <Sidemenu />
        </b-col>
        <b-col>
          <div class="main-content border border-dark rounded py-4 px-2">
            <h1>About page</h1>
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
  name: 'About',
  components: {
    Jumbotron,
    Sidemenu
  }
}
</script>