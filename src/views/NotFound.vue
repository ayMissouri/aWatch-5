<template>
  <div class="flex flex-col items-center justify-center w-full gap-4 not-found fill-page">
    <img src="../assets/images/404.png" alt="404" class="w-[250px] select-none pointer-events-none">
    <p class="text-4xl text-white font-[700] w-[600px]">Oops! The page you're looking for doesn't exist.</p>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: 'NotFound',
  mounted() {
    gsap.to(".not-found", { duration: 1, y: 20, opacity: 1 });
  }
};
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}
</style>