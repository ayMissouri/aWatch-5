<template>
  <div>
    <!-- <SearchResults v-if="data" :searchResults="data" :loading="loading" /> -->
  </div>
</template>

<script>
// import SearchResults from './SearchResults.vue';

export default {
  // components: {SearchResults},

  data() {
    return {
      data: null,
      loading: false,
    };
  },

  mounted: async function() {
    // this.loading = true;

    // this.data = await window.getTopMovies();
    // console.log(this.data);
    // this.loading = false;
  },

  methods: {
  }
}
</script>

<style></style>
