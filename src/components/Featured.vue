<template>
  <div
    class="overflow-hidden mxl:max-h-[40vw] smmd:max-h-[60vw] max-h-[80vw] w-full flex items-center justify-center select-none">
    <div class="absolute max-w-[1440px] w-full">test {{ chosenMovie?.title }}</div>

    <div
      class="absolute w-full h-full bg-gradient-to-t from-[#1a1d29] to-[#1a1d2903] mxl:max-h-[40vw] smmd:max-h-[60vw] max-h-[80vw]">
    </div>

    <iframe v-if="video" :src="`https://www.youtube.com/embed/${video}?rel=0&autoplay=1&mute=1`"
      frameborder="0" class=" w-full h-[2000px]"></iframe>
  </div>
</template>

<script>
export default {
  components: {  },

  data() {
    return {
      loading: false,
      data: null,
      chosenMovie: null,
      video: null,
    };
  },

  methods: {},

  mounted: async function () {
    this.loading = true;

    this.data = await window.getTopMovies();

    const randomChoice = Math.floor(Math.random() * (4 - 0 + 1)) + 0;

    this.video = await window.getVideo(this.data[randomChoice].id);

    this.chosenMovie = this.data[randomChoice];

    this.loading = false;
  },
}
</script>

<style></style>
