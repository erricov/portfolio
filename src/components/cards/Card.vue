<template>
  <div>
      <b-card
    :title="card.ctitle"
    :img-src="card.img"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{card.cdsc}}
    </b-card-text>

    <b-button v-b-modal.modal-1 variant="primary">{{ card.cbtn }}</b-button>
  </b-card>

    <b-modal id="modal-1" :title="card.id">
      <p class="my-4">{{card.cdsc}}</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
      card: Object
  }
}
</script>

<style scoped>
  /* .card{
    box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
  } */
  .card-title{
    font-size: 21px;
  }
</style>