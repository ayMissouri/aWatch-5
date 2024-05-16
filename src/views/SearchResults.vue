<template>
  <div class="text-white card-list" @scroll="handleScroll" ref="cardList">
    <Spinner class="w-[50px] h-[50px] absolute left-1/2 bottom-6" v-if="loading" />
    <MediaCard v-for="result in filteredResults" :key="result.id" :data="result" />
  </div>
</template>

<script>
import MediaCard from '../components/MediaCard.vue';
import Spinner from '../components/Spinner.vue';

export default {
  components: { MediaCard, Spinner },

  data() {
    return {
      loading: false,
    };
  },

  props: {
    searchResults: Array,
    required: true,
  },

  mounted() {
    this.emitter.on("search-loading", (data) => {
      this.loading = data;
      if (data === true) {
        setTimeout(() => {
          this.loading = false;
        }, 5000); // 1000 milliseconds = 1 second
      }
    });
  },

  beforeDestroy() {},

  created() {},

  computed: {
    filteredResults() {
      return this.searchResults.filter((result) => result.media_type !== 'person' && result.poster_path !== null);
    },
  },

  methods: {},
}
</script>

<style scoped>
.card-list {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(12.375rem, 1fr));
}
</style>
