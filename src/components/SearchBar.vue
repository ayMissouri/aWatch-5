<template>
  <div>
    <input type="text"
      class="w-full h-10 px-3 text-base placeholder-gray-600 border-[#2a3349] border-[1px] rounded-full bg-[#111621] text-white focus:outline-none focus:border-[#404d6d]"
      placeholder="Search for a movie or series" v-model="searchInput" @input="inputChanged" />
  </div>
</template>

<script>
import { debounce } from 'lodash';

const apiKey = import.meta.env.VITE_TMDB_API_KEY

export default {
  components: {},

  data() {
    return {
      searchResults: null,
      searchInput: '',
      page: 3,
    };
  },

  props: {},

  mounted() {
    this.emitter.on("reached-bottom", () => {
      this.searchNextPage()
    });
  },

  created() {
    this.debouncedSearch = debounce(this.search, 400);
  },

  computed: {
    filteredResults(data) {
      return data.filter((result) => result.media_type !== 'person' && result.poster_path !== null);
    },
  },

  methods: {
    async search() {
      this.emitter.emit("search-loading", true);
      if (this.searchInput.length > 0) {
        const responsePage1 = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${this.searchInput}&page=1&include_adult=false`);
        const dataPage1 = await responsePage1.json();

        const responsePage2 = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${this.searchInput}&page=2&include_adult=false`);
        const dataPage2 = await responsePage2.json();

        // Combine results from both pages
        this.searchResults = [...dataPage1.results, ...dataPage2.results];
        // console.log(this.searchResults)
        this.emitter.emit("results", { results: this.searchResults });
        this.emitter.emit("search-loading", false);
      }
    },

    async searchNextPage() {
      this.emitter.emit("search-loading", true);
      if (this.searchInput.length > 0) {
        const responsePage3 = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${this.searchInput}&page=${this.page}&include_adult=false`);
        const dataPage3 = await responsePage3.json();

        // Combine results from both pages
        this.searchResults = [...this.searchResults, ...dataPage3.results];
        // console.log(this.searchResults)
        this.emitter.emit("results", { results: this.searchResults });
        this.page++;
        this.emitter.emit("search-loading", false);
      }
    },

    inputChanged() {
      if (this.searchInput.length === 0) {
        this.searchResults = null;
        this.emitter.emit("results", false);
      }

      this.debouncedSearch();
    },
  },
}
</script>

<style scoped>
</style>
