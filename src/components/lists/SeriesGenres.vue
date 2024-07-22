<template>
  <div v-if="loading" class="flex items-center justify-center h-[156px]">
    <l-grid size="80" speed="3.5" color="#67bdff" />
  </div>

  <swiper :slidesPerView="6" :spaceBetween="30" :modules="modules" :breakpoints="{
    '1024': {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    '1324': {
      slidesPerView: 4.2,
      spaceBetween: 20,
    },
    '1724': {
      slidesPerView: 5.2,
      spaceBetween: 20,
    },
    '2124': {
      slidesPerView: 7.2,
      spaceBetween: 20,
    },
    '2524': {
      slidesPerView: 8.2,
      spaceBetween: 20,
    },
    '3524': {
      slidesPerView: 11.2,
      spaceBetween: 20,
    },
    '4224': {
      slidesPerView: 12.2,
      spaceBetween: 20,
    },
  }" class="inline-block px-2 align-top mySwiper">
    <div class=" absolute h-full bg-gradient-to-l from-background to-[#00000002] w-[20px] right-0 z-50 top-0" />
    <swiper-slide v-for="slide in data" :key="slide"
      class="relative flex items-center justify-center w-56 h-32 p-8 overflow-hidden transition duration-300 ease-in-out scale-100 bg-gray-800 bg-center bg-cover shadow cursor-pointer sm:h-36 sm:w-72 transform-gpu bg-opacity-80 rounded-xl border-[2px] border-[#272c3d] hover:border-link">
      <span
        style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;">
        <img :src="slide.background_url"
          style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;">
      </span>
      <div class="absolute inset-0 z-10 w-full h-full transition duration-300 bg-gray-800 bg-opacity-30"></div>
      <div
        class="relative z-20 w-full text-2xl font-bold text-center text-white whitespace-normal sm:text-3xl">{{
        slide.name }}</div>
    </swiper-slide>
  </swiper>
</template>

<script>
import 'ldrs/grid'

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
  data() {
    return {
      loading: false,
      data: null,
    }
  },

  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      modules: [],
    };
  },

  props: {},

  methods: {},

  mounted: async function () {
    this.loading = true;

    this.data = await window.getSeriesGenres();

    this.loading = false;
    this.$emit('loaded');
  },
}
</script>

<style>
.swiper {
  /* width: 100%; */
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
}

.zoom-effect .background-image {
  transition: transform 0.5s ease;
  display: block;
}

.zoom-effect:hover .title-text {
  text-decoration: underline;
}

.zoom-effect:hover .background-image {
  transform: scale(1.2);
}

@media (max-width: 450px) {
  .hider {
    display: none;
  }
}
</style>

<!-- :autoplay="{
    delay: 3000,
    disableOnInteraction: false,
  }" -->import { at } from 'lodash';
