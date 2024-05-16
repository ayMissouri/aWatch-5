<template >
  <!-- <Header /> -->
  <!-- <div class="flex flex-col items-center justify-center -translate-y-[80px] mt-[125px] gap-6">
    <Featured />


    <div class="max-w-[1440px] w-full px-4">
      <div>
        <p class="text-[32px] text-black font-Kanitbold absolute stroke-2 select-none">Trending Movies</p>
        <p class="text-[32px] text-white font-Kanitbold stroke-black stroke-2 translate-x-1 -translate-y-1">Trending
          Movies</p>
      </div>
      <TrendingMovies :data="data" />
    </div>
    <div class="max-w-[1440px] w-full px-4">
      <div>
        <p class="text-[32px] text-black font-Kanitbold absolute stroke-2 select-none">Trending Shows</p>
        <p class="text-[32px] text-white font-Kanitbold stroke-black stroke-2 translate-x-1 -translate-y-1">Trending
          Shows</p>
      </div>
      <TrendingShows :data="data" />
    </div>
  </div> -->
  <div class="flex flex-col gap-6 overflow-hidden text-white">
    <div>
      <div class="flex flex-row gap-2">
        <ArrowTrendingUpIcon class="w-[24px]" />
        <div>
          <p
            class="text-[32px] text-transparent bg-gradient-to-r from-[#ff2a2a] via-[#ff2fd5] to-[#8c00ff] bg-clip-text animate-gradient font-Kanitbold absolute stroke-2 select-none">
            Trending Movies</p>
          <p class="text-[32px] text-white font-Kanitbold stroke-black stroke-2 translate-x-[1px] -translate-y-[2px]">
            Trending
            Movies</p>
        </div>
      </div>
      <TrendingMovies />
    </div>

    <hr class="h-px bg-gray-200 border-0 dark:bg-[#2a3349]">

    <div>
      <div class="flex flex-row gap-2">
        <ArrowTrendingUpIcon class="w-[24px]" />
        <div>
          <p
            class="text-[32px] text-transparent bg-gradient-to-r from-[#2525ff] via-[#f763ff] to-[#ff4e4e] bg-clip-text animate-gradient font-Kanitbold absolute stroke-2 select-none">
            Trending Shows</p>
          <p class="text-[32px] text-white font-Kanitbold stroke-black stroke-2 translate-x-[1px] -translate-y-[2px]">
            Trending
            Shows</p>
        </div>
      </div>
      <TrendingShows />
    </div>

    <hr class="h-px bg-gray-200 border-0 dark:bg-[#2a3349]">

    <div>
      <div class="flex flex-row gap-2">
        <ArrowTrendingUpIcon class="w-[24px]" />
        <p class="text-[32px] text-white font-Kanitbold stroke-black stroke-2 translate-x-[1px] -translate-y-[2px]">
          Networks</p>
      </div>
      <Networks />
    </div>
  </div>
</template>

<script >
import Header from '../components/Header.vue';
import Featured from '../components/Featured.vue';
import Button from '../components/Button.vue';
import ToolTip from '../components/ToolTip.vue';
import TrendingMovies from '../components/lists/TrendingMovies.vue';
import TrendingShows from '../components/lists/TrendingShows.vue';
import Networks from '../components/lists/Networks.vue';

import { ArrowTrendingUpIcon } from '@heroicons/vue/24/outline'

export default {
  components: { Button, ToolTip, TrendingMovies, TrendingShows, Header, Featured, ArrowTrendingUpIcon, Networks },

  data() {
    return {};
  },

  async mounted() {
    this.setupIntersectionObserver();
  },
  
  methods: {
    setupIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15,
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, options);

      const elementsToFadeIn = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
      elementsToFadeIn.forEach((element) => {
        observer.observe(element);
      });
    },
  }
}
</script>

<style>

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s, transform 0.7s;
}

.fade-in-left {
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.7s, transform 0.7s;
}

.fade-in-right {
  opacity: 0;
  transform: translateX(20px);
  transition: opacity 0.7s, transform 0.7s;
}

.fade-in.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-in-left.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-in-right.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.gradient-background {
  background: linear-gradient(300deg,deepskyblue,darkviolet,blue);
  background-size: 180% 180%;
  animation: gradient-animation 18s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  background-size: 300%;
  -webkit-animation: animatedgradient 6s ease infinite alternate;
  -moz-animation: animatedgradient 6s ease infinite alternate;
  animation: animatedgradient 6s ease infinite alternate;
}

@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>

