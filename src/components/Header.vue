<template >
  <div class="sticky top-0 bg-gradient-to-b from-neutral500 to-[#00000000] h-[80px] w-full z-[100] flex items-center">
    <div class="max-w-[1440px] flex w-full justify-between px-4 absolute left-1/2 -translate-x-1/2 top-2">
      <div>
        <Logo />
      </div>

      <input type="text" placeholder="Search..."
        class="bg-transparent w-[90%] max-w-[200px] sm:max-w-[350px] lg:max-w-[550px] outline-none border-b-[1px] text-white"
        v-model="searchInput" @input="inputChanged">
      </input>

      <div
        class="absolute -translate-x-1/2 left-1/2 w-[90%] max-w-[550px] bg-[#1a1d29] top-[40px] rounded-md text-white max-h-[400px] overflow-auto p-2 border-[1px] border-[#67bdff]"
        v-if="searchResults">
        <div class="flex flex-col items-start justify-center gap-[10px]">
          <div v-for="result in filteredResults" :key="result.id"
            class="w-full hover:bg-[#20212b] rounded-md cursor-pointer">
            <div class="flex flex-row gap-2">
              <img :src='`https://image.tmdb.org/t/p/w780${result.poster_path}`'
                class="w-[60px] min-w-[60px] md:w-[75px] md:min-w-[75px] max-h-[75px] md:max-h-[112.5px] rounded">

              <div class="flex flex-col gap-1">
                <p class=" font-Rubik">{{ result.name ? result.name : result.title }}
                  <span class="text-xs" v-if="result.release_date || result.first_air_date">({{
                    result.release_date ? result.release_date.slice(0, 4) : result.first_air_date.slice(0, 4) }})
                  </span>
                </p>
                <div class="flex flex-row gap-2">
                  <p class="text-[#67bdff] font-Rubik uppercase text-sm"> {{ result.media_type }} </p>
                  <p class="text-[#67bdff] font-Rubik uppercase text-sm"> | </p>
                  <p class="text-[#67bdff] font-Rubik uppercase text-sm"> {{ result.original_language }} </p>
                  <p class="text-[#67bdff] font-Rubik uppercase text-sm" v-if="result.vote_average"> | </p>
                  <p class="text-[#67bdff] font-Rubik uppercase text-sm" v-if="result.vote_average"> {{
                    result.vote_average.toString().substring(0,
                    3) }}/10 </p>
                </div>
                <!-- <p class="text-[#ccc] font-Rubik text-xs">{{ result.overview.slice(0, 100) }}...</p> -->
              </div>
            </div>
          </div>
        </div>
        {{ searchResults }}
      </div>

      <div class="bg-green-500 w-[30px] h-[30px]">

      </div>
    </div>
  </div>
</template>

<script>
import Logo from './Logo.vue';
import { debounce } from 'lodash';

export default {
  components: { Logo },

  data() {
    return {
      searchResults: null,
      searchInput: '',
    };
  },

  created() {
    this.debouncedSearch = debounce(this.search, 300);
  },

  computed: {
    filteredResults(data) {
      return data.filter((result) => result.media_type !== 'person' && result.poster_path !== null);
    },
  },
  
  methods: {
    async search() {
      if (this.searchInput.length > 0) {
        const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=c45ad94907215e117fb3a6851e09e11c&query=${this.searchInput}&page=1&include_adult=false`);
        const data = await response.json();
        console.log(data.results)
        this.searchResults = filteredResults(data.results);
      }
    },

    inputChanged() {
      if (this.searchInput.length === 0) {
        this.searchResults = null;
      }

      this.debouncedSearch();
    },
  },
}
</script>

<style>
</style>
