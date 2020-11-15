<template>
  <b-card-group clas="my-custom" deck>    
    <Card v-for="card in cardata" :key="card.id" :card="card"></Card>
  </b-card-group>
</template>

<script>
import Card from '@/components/cards/Card.vue'
export default {
  name: 'Cards',
  components: {
    Card
  },
  props: [
    'cardata'
  ]
}
</script>

<style scoped>
.card-deck {
    justify-content: center;
}
</style>