<template>
    <div class="container">
      <div class="usp-main-container">
        <h2 class="usp-title d-none">Main Services</h2>
        <div class="usps-box">
          <Usp v-for="usp in uspsdata" :key="usp.id" :usp="usp"/>
        </div>
      </div>
    </div>
</template>

<script>
import Usp from '@/components/usps/Usp.vue'
export default {
  name: 'Usps',
  components: {
    Usp
  },
  props: [
    'uspsdata'
  ]
}
</script>

<style scoped>
  .usp-main-container{
    margin: 100px 0px;
  }
  .usp-title{
    font-weight: bold;
    margin-bottom: 30px;
  }
  .usps-box {
    display: flex;
    gap: 20px;
  } 
</style>