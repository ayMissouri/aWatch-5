<template>
  <div class="flex flex-row max-w-[1440px] w-full px-4 items-center justify-center gap-3">
    <div class="max-w-[30%] max-h-[369px] min-h-[369px] flex justify-end select-none">
      <div class="absolute mt-[275px] mr-[50px]">
        <p class="absolute text-5xl text-black select-none stroke-2 font-Kanitbold">ANIME</p>
        <p class="text-5xl text-white translate-x-[2px] -translate-y-1 stroke-2 font-Kanitbold stroke-black">ANIME
        </p>
      </div>
      <img src="../assets/images/movies.jpg" alt="Movies"
        class="rounded-lg select-none max-h-[369px] min-h-[369px] object-cover">
    </div>
    <div class="max-w-[30%] max-h-[369px] min-h-[369px] flex justify-center select-none">
      <!-- <p class="absolute text-5xl text-white font-Kanitbold mt-[275px]">
        TV SHOWS
      </p> -->
      <div class="absolute mt-[275px]">
        <p class="absolute text-5xl text-black select-none stroke-2 font-Kanitbold">TV SHOWS</p>
        <p class="text-5xl text-white translate-x-[2px] -translate-y-1 stroke-2 font-Kanitbold stroke-black">TV SHOWS
        </p>
      </div>
      <img src="../assets/images/tv-shows.jpg" alt="shows"
        class="rounded-lg select-none max-h-[369px] min-h-[369px] object-cover">
    </div>
    <div class="max-w-[30%] max-h-[369px] min-h-[369px] select-none">
      <div class="absolute mt-[275px] ml-[50px]">
        <p class="absolute text-5xl text-black select-none stroke-2 font-Kanitbold">ANIME</p>
        <p class="text-5xl text-white translate-x-[2px] -translate-y-1 stroke-2 font-Kanitbold stroke-black">ANIME
        </p>
      </div>
      <img src="../assets/images/anime.jpg" alt="anime"
        class="rounded-lg select-none max-h-[369px] min-h-[369px] object-cover">
    </div>
  </div>
</template>

<script>
export default {
  components: {  },

  data() {
    return {
      loading: false,
      data: null,
    };
  },

  methods: {},

  mounted: async function () {
    this.loading = true;

    this.loading = false;
  },
}
</script>

<style></style>
