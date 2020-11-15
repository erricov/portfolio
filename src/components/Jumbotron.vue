<template>
    <b-jumbotron v-bind:header="title" v-bind:lead="lead">
        <p>{{ msg }}</p>
        <b-button variant="primary" v-on:click="seen = !seen">More Info</b-button>
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
        color: black;
        text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
        border-bottom: 3px solid #007bff;
        background: lightgray;
        /* background-image: url(https://picsum.photos/1920/346?grayscale&blur=2); */
    }
    .jumbotron {
    }
</style>