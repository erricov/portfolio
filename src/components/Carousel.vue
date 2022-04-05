<template>
    <b-carousel
      id="carousel-1"
      class="carousel-height"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        :img-src="require('@/assets/slider.png')"
      ></b-carousel-slide>

      <b-carousel-slide
        :img-src="require('@/assets/slider2.png')"
      ></b-carousel-slide>

      <b-carousel-slide
        :img-src="require('@/assets/slider3.png')"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <!-- <b-carousel-slide img-src="https://picsum.photos/1024/300/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide> -->

      <!-- Slides with image only -->
      <!-- <b-carousel-slide img-src="https://picsum.photos/1024/300/?image=58"></b-carousel-slide> -->

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <!-- <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="300"
            src="https://picsum.photos/1024/300/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide> -->

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->
    <div class="absolute-center">
      <h1>Ely Errico</h1>
    </div>
    </b-carousel>
</template>

<script>
export default {
  name: 'Carousel',
}
</script>

<style scoped>
.absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
h1{
  color: white;
  font-size: 80px;
}
</style>