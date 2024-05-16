<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <Navigation />
  <!-- <RouterView /> -->

  <!-- DESKTOP -->
  <div class="flex-row hidden lg:flex">
    <div class="w-[255px] min-w-[255px] max-w-[255px] bg-[#171e2d] h-[100vh] pt-[16px] pb-[16px]">
      <!-- LOGO -->
      <div class="mx-auto ">
        <span
          class="text-4xl font-bold text-transparent font-Kanitbold bg-gradient-to-r from-[#D16BA5] via-[#86A8E7] to-[#5FFBF1] bg-clip-text animate-gradient">
          aWatch
        </span>
      </div>
    </div>

    <div class="bg-[#171e2d]">
      <div
        class="h-[64px] min-h-[64px] max-h-[64px] flex items-center justify-center flex-row bg-[#171e2d] sticky top-0">
        TOP OF PAGE
      </div>

      <!-- INVERSE RADIUS -->
      <div class="absolute bg-[#171e2d] w-[16px] h-[16px]" />
      <div class="absolute bg-[#111621] w-[16px] h-[16px] rounded-tl-[30px]" />

      <div class="w-[100%] h-[calc(100vh_-_64px)] bg-[#111621] p-4 overflow-auto">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style>
  body {
    background-color: #1a1d29;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  /* The track of the scrollbar */
  ::-webkit-scrollbar-track {
    background: #00000000;
  }

  /* The thumb (draggable part) of the scrollbar */
  ::-webkit-scrollbar-thumb {
    background: #5e5e5e;
    border-radius: 4px;
  }

  /* The thumb when it's hovered over */
  ::-webkit-scrollbar-thumb:hover {
    background: #3e3e3e;
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