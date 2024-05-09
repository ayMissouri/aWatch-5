<template >
  <Header />
  <div class="flex flex-col items-center justify-center -translate-y-[80px] mt-[125px]">
    <!-- <Featured /> -->

    
    <div class="max-w-[1440px] w-full px-4">
      <div>
        <p class="text-[32px] text-black font-Kanitbold absolute stroke-2 select-none">Trending Movies</p>
        <p class="text-[32px] text-white font-Kanitbold stroke-black stroke-2 translate-x-1 -translate-y-1">Trending Movies</p>
      </div>
      <Carousel :data="data" />
    </div>
    <div class="max-w-[1440px] w-full px-4">
      <TrendingShows :data="data" />
    </div>
  </div>
</template>

<script >
import Header from '../components/Header.vue';
import Featured from '../components/Featured.vue';
import Button from '../components/Button.vue';
import ToolTip from '../components/ToolTip.vue';
import Carousel from '../components/Carousel.vue';
import TrendingShows from '../components/TrendingShows.vue';

export default {
  components: { Button, ToolTip, Carousel, TrendingShows, Header, Featured },

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
</style>

