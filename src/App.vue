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
    background-color: rgb(99, 81, 206)!important;
    border-color: rgb(99, 81, 206)!important;
}

.deep-purple{background-color:#673ab7!important;}
.deep-purple.accent-2{background-color:#7c4dff!important;}
</style>
