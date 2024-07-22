<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { SparklesIcon, FilmIcon, TvIcon, ListBulletIcon, CogIcon, ServerStackIcon, UserCircleIcon } from '@heroicons/vue/24/outline'
import { debounce } from 'lodash';

const route = useRoute();

function isActive(path) {
  return route.fullPath === path;
}

const version = import.meta.env.VITE_APP_VERSION
</script>

<template>
  <!-- DESKTOP -->
  <div class="flex-row overflow-x-hidden overflow-y-hidden flex">
    <div class="w-[255px] min-w-[255px] max-w-[255px] bg-[#171e2d] h-[100vh] pt-[16px] pb-[16px] hidden lg:flex lg:flex-col">
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

          <!-- <RouterLink to="/explore?type=movie" class="text-white nav-tab"
            :class="isActive('/explore?type=movie') ? 'router-active' : 'hover:bg-[#222c43]'">
            <FilmIcon class="w-[20px] mr-2" />
            <span>Movies</span>
          </RouterLink>

          <RouterLink to="/explore?type=tv" class="text-white nav-tab"
            :class="isActive('/explore?type=tv') ? 'router-active' : 'hover:bg-[#222c43]'">
            <TvIcon class="w-[20px] mr-2" />
            <span>Tv Shows</span>
          </RouterLink> -->

          <RouterLink to="/profile" class="text-white nav-tab"
            :class="isActive('/profile') ? 'router-active' : 'hover:bg-[#222c43]'">
            <UserCircleIcon class="w-[20px] mr-2" />
            <span>Profile</span>
          </RouterLink>
        </div>

        <div class="flex flex-col gap-4">
          <RouterLink to="/settings" class="text-white nav-tab"
            :class="isActive('/settings') ? 'router-active' : 'hover:bg-[#222c43]'">
            <CogIcon class="w-[20px] mr-2" />
            <span>Settings</span>
          </RouterLink>

          <div class="version-tab text-[#d5d5d5]">
            <ServerStackIcon class="w-[20px] mr-2 text-white" />
            <div class="select-none">
              aWatch v{{ version }} <br>
              Backend v(API)
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-[#171e2d] w-full lg:w-[calc(100vw_-_255px)]">
      <div
        class="h-[64px] min-h-[64px] max-h-[64px] flex items-center justify-center flex-row bg-[#171e2d] sticky top-0 px-4 lg:px-0 lg:pr-4">
        <SearchBar class="w-full" />
      </div>

      <!-- INVERSE RADIUS -->
      <div class="absolute bg-[#171e2d] w-[16px] h-[16px] hidden lg:flex" />
      <div
        class="absolute bg-[#111621] w-[16px] h-[16px] rounded-tl-[30px] border-l-[1.5px] border-t-[1.5px] border-[#2a3349] hidden lg:flex" />

      <div
        class="w-[100%] max-h-[calc(100vh_-_64px)] h-[calc(100vh_-_64px)] bg-[#111621] p-4 overflow-auto border-l-[1.5px] border-t-[1.5px] border-[#2a3349]"
        ref="cardList">
        <SearchResults v-if="searchResults" :searchResults="searchResults" :loading="loading" />
        <RouterView v-else />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import SearchResults from './views/SearchResults.vue'
import { debounce } from 'lodash';

export default {
  components: { SearchBar, SearchResults },

  data() {
    return {
      searchResults: null,
    };
  },

  props: {},

  mounted() {
    this.emitter.on("results", (data) => {
      // console.log(data)
      this.searchResults = data.results;
    });

    if (this.$refs.cardList) {
      this.debouncedHandleScroll = debounce(this.handleScroll, 200);
      this.$refs.cardList.addEventListener('scroll', this.debouncedHandleScroll);
    }
  },

  beforeDestroy() {
    if (this.$refs.cardList) {
      this.$refs.cardList.removeEventListener('scroll', this.debouncedHandleScroll);
    }
  },

  methods: {
    handleScroll(event) {
      const element = event.target;
      if (element.scrollHeight - element.scrollTop <= element.clientHeight + 250) {
        this.emitter.emit("reached-bottom", true);
      }
    },
  },
}
</script>

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