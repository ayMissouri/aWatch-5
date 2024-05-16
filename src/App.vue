<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { SparklesIcon, FilmIcon, TvIcon, ListBulletIcon, CogIcon } from '@heroicons/vue/24/outline'

const route = useRoute();

function isActive(path) {
  return route.fullPath === path;
}
</script>

<template>
  <!-- DESKTOP -->
  <div class="flex-row hidden lg:flex">
    <div class="w-[255px] min-w-[255px] max-w-[255px] bg-[#171e2d] h-[100vh] pt-[16px] pb-[16px]">
      <!-- LOGO -->
      <div class="flex items-center justify-center">
        <a href="/"
          class="text-4xl font-bold text-transparent font-Kanitbold bg-gradient-to-r from-[#D16BA5] via-[#86A8E7] to-[#5FFBF1] bg-clip-text animate-gradient cursor-pointer select-none">
          aWatch
        </a>
      </div>

      <!-- TABS -->
      <div class="flex flex-col justify-between px-4 mt-10 h-[calc(100vh_-_120px)]">
        <div class="flex flex-col gap-4">
          <RouterLink to="/" class="text-white nav-tab" :class="isActive('/') ? 'router-active' : 'hover:bg-[#222c43]'">
            <SparklesIcon class="w-[20px] mr-2" />
            <span>Home</span>
          </RouterLink>

          <RouterLink to="/explore?type=movie" class="text-white nav-tab"
            :class="isActive('/explore?type=movie') ? 'router-active' : 'hover:bg-[#222c43]'">
            <FilmIcon class="w-[20px] mr-2" />
            <span>Movies</span>
          </RouterLink>

          <RouterLink to="/explore?type=tv" class="text-white nav-tab"
            :class="isActive('/explore?type=tv') ? 'router-active' : 'hover:bg-[#222c43]'">
            <TvIcon class="w-[20px] mr-2" />
            <span>Tv Shows</span>
          </RouterLink>

          <RouterLink to="/list" class="text-white nav-tab"
            :class="isActive('/list') ? 'router-active' : 'hover:bg-[#222c43]'">
            <ListBulletIcon class="w-[20px] mr-2" />
            <span>Watchlist</span>
          </RouterLink>
        </div>

        <div>
          <RouterLink to="/settings" class="text-white nav-tab"
            :class="isActive('/settings') ? 'router-active' : 'hover:bg-[#222c43]'">
            <CogIcon class="w-[20px] mr-2" />
            <span>Settings</span>
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="bg-[#171e2d] w-full">
      <div
        class="h-[64px] min-h-[64px] max-h-[64px] flex items-center justify-center flex-row bg-[#171e2d] sticky top-0">
        TOP OF PAGE
      </div>

      <!-- INVERSE RADIUS -->
      <div class="absolute bg-[#171e2d] w-[16px] h-[16px]" />
      <div
        class="absolute bg-[#111621] w-[16px] h-[16px] rounded-tl-[30px] border-l-[1.5px] border-t-[1.5px] border-[#2a3349]" />

      <div
        class="w-[100%] h-[calc(100vh_-_64px)] bg-[#111621] p-4 overflow-auto border-l-[1.5px] border-t-[1.5px] border-[#2a3349]">
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

  .router-active {
    background: linear-gradient(to bottom right, #4f46e5, #9333ea);
  }
</style>