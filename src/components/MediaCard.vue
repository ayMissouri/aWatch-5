<template>
  <div
    class="container relative flex transition-all ease-in-out rounded-md cursor-pointer select-none hover:transform hover:scale-105">

    <div
      class="absolute left-2 top-2 px-[4px] py-[2px] rounded-full font-Rubik border-[1px] opacity-85 text-sm font-medium"
      :class="data.media_type === 'tv' ? 'bg-[#7c00ec] border-[#8930d7]' : 'bg-[#1a54df] border-[#3163d9]'">{{
      data.media_type === 'tv'
      ?
      'Series' : 'Movie' }}
    </div>

    <div class="absolute flex flex-col justify-end w-full h-full details-container">
      <div class="p-2 z-[2]">
        <p class="text-lg font-bold font-Rubik">{{ data.name ? data.name : data.title }}</p>
        <p>{{ data.release_date ? data.release_date?.slice(0, 4) : data.first_air_date?.slice(0,4) }}</p>
      </div>
      <div class=" bg-gradient-to-t from-black to-[#0000000c] w-full h-[50%] absolute z-[1]" />
    </div>
    <img :src="`https://image.tmdb.org/t/p/w780${data.poster_path}`" rel="preload" class="rounded-md"
      @load="loading = false">
    <div class="absolute flex items-center justify-center w-full h-full">
      <Spinner v-if="loading" class="w-[50px] h-[50px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  </div>
</template>

<script>
import Spinner from './Spinner.vue';

export default {
  components: { Spinner },

  data() {
    return {
      loading: true,
    };
  },

  props: {
    data: Object,
    required: true,
  },

  mounted() {
    console.log(this.data);
  },

  computed: {},

  methods: {},
}
</script>

<style scoped>
.details-container {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.container:hover .details-container {
  opacity: 1;
}
</style>
