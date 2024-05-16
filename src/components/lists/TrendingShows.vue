<template>
  <div v-if="loading" class="flex items-center justify-center h-[156px]">
    <Spinner class="w-[50px] h-[50px]" />
  </div>


  <swiper :slidesPerView="3.5" :spaceBetween="30" :modules="modules" :loop="true" :breakpoints="{
    '0': {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    '400': {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    '530': {
      slidesPerView: 1.9,
      spaceBetween: 20,
    },
    '680': {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    '830': {
      slidesPerView: 2.8,
      spaceBetween: 20,
    },
    '950': {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    '1024': {
      slidesPerView: 4.2,
      spaceBetween: 20,
    },
  }" class="w-full mySwiper">
    <div class=" absolute h-full bg-gradient-to-l from-background to-[#00000002] w-[20px] right-0 z-50 top-0" />
    <swiper-slide v-for="slide in data" :key="slide"
      class="border-[2px] border-[#272c3d] rounded-md hover:border-link cursor-pointer">
      <div class="overflow-hidden rounded-md zoom-effect" @click="goToStream(slide.id, slide.original_name)">
        <div class="absolute z-50 flex flex-col gap-1 px-3 text-left bottom-1">
          <p class="font-semibold text-white body-review title-text font-Rubik">
            {{ slide.name }}
          </p>
          <div class="flex flex-row items-center gap-2 select-none">
            <div class="px-2 font-semibold rounded bg-link text-neutral500 body-small">{{
              isComingSoon(slide.first_air_date) }}</div>
            <div v-if="isComingSoon(slide.first_air_date) !== 'Coming Soon'"
              class="bg-link text-neutral500 rounded px-2 body-small font-semibold flex flex-row gap-[2px] items-center">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.75 13.352L2.96 16L3.87533 10.392L0 6.42067L5.35533 5.602L7.75 0.5L10.1447 5.602L15.5 6.42067L11.6247 10.392L12.54 16L7.75 13.352Z"
                  fill="#30333e" />
              </svg>
              {{ slide.vote_average.toString().substring(0, 3) }}
            </div>
            <div class="px-2 font-semibold uppercase rounded bg-link text-neutral500 body-small">{{
              slide.original_language }}</div>
          </div>
        </div>
        <div
          class=" absolute h-[100px] bg-gradient-to-t from-[#1a1d29ac] to-[#00000002] w-full bottom-0 z-40 rounded-b-md" />
        <img :src="`https://image.tmdb.org/t/p/w780${slide.backdrop_path}`"
          class="object-cover w-full h-full rounded-md select-none background-image">
      </div>
    </swiper-slide>
  </swiper>
</template>
<!-- slide.first_air_date.substring(0, 4) -->
<script>
import Spinner from '../Spinner.vue'

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';

export default {
  data () {
    return {
      loading: false,
      data: null,
    }
  },

  components: {
    Spinner,
    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      modules: [Autoplay],
    };
  },

  props: {},

  methods: {
    goToStream(id, title) {
      
    },

    isComingSoon(airDate) {
      const date = new Date();
      const year = date.getFullYear();
      const month = `0${date.getMonth() + 1}`.slice(-2);
      const day = `0${date.getDate()}`.slice(-2);
      const formattedDate = `${year}-${month}-${day}`;

      return airDate > formattedDate ? 'Coming Soon' : airDate.substring(0, 4);
    }
  },

  mounted: async function() {
    this.loading = true;

    this.data = await window.getTopShows();

    this.loading = false;
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
    object-fit: cover;
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
  }" -->