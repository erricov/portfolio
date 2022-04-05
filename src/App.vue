<template>
  <div id="app">
    <Nav />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/common/Nav.vue'
import Footer from '@/components/common/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Footer,
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bg-primary-cstm {
    background-color: #1c2331!important;
}
.btn-primary {
    color: #fff!important;
    background-color: #002051!important;
    border-color: #002051!important;
}

.deep-purple{background-color:#673ab7!important;}
.deep-purple.accent-2{background-color:#7c4dff!important;}

.light-blue{
  background: #00eaf1!important;
}
.main-content{
    border: 1px solid lightgray!important;
    padding: 20px!important;
    border-radius: 10px!important;
    box-shadow: 0px 3px 7px -1px rgb(50 50 50 / 38%)!important;
}
</style>
