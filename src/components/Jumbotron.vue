<template>
    <b-jumbotron v-bind:header="title" v-bind:lead="lead">
        <p>{{ msg }}</p>
        <!-- <b-button variant="primary" v-on:click="seen = !seen">More Info</b-button> -->
        <!-- <img src="@/assets/jumbo-img.jpg" alt=""> -->
    </b-jumbotron>
</template>

<script>
export default {
  name: 'Jumbotrom',
  props: {
    title: String,
    lead: String,
    msg: String
  }
}
</script>

<style scoped>
    .jumbotron {
      color: white;
      text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
      /* border-bottom: 3px solid #1c2331!important; */
      /* background: rgb(99, 81, 206); */
      background: rgb(0,234,241)!important;
      background: linear-gradient(90deg, rgba(0,234,241,1) 0%, rgba(0,32,81,1) 90%)!important;
        /* background-image: url('@/assets/jumbo-img.jpg');  */
    }
</style>