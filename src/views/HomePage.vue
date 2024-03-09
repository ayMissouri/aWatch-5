<template >
  <div class="flex justify-center flex-col items-center">
    <div class="gradient-background w-full h-full">
      <div class="flex items-center justify-center flex-col gap-4 pt-4">
        <div class="flex items-center justify-center flex-col gap-4">
          <Button />
          <Button type="secondary" />
          <Button type="secondary" icon="play" />
          <Button type="outlined" />
          <Button type="outlined" icon="play" />
        </div>

        <div class="flex items-center justify-center flex-row gap-4">
          <Button type="outlined circle" icon="plus" />
          <Button type="outlined circle" icon="add" />
          <Button type="outlined circle" icon="done" />
          <ToolTip />
        </div>

        <div class="flex items-center justify-center flex-row gap-4">
          <Button type="play" />
          <Button type="group" />
          <Button type="info" />
          <Button type="bookmark" />
        </div>

      </div>
    </div>
    <div class="max-w-[1440px] w-full px-4">
      <Carousel :data="data" />
    </div>
    <div class="max-w-[1440px] w-full px-4">
      <Carousel :data="data" />
    </div>
  </div>
</template>

<script >
import Button from '../components/Button.vue';
import ToolTip from '../components/ToolTip.vue';
import Carousel from '../components/Carousel.vue';

export default {
  components: { Button, ToolTip, Carousel },

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
