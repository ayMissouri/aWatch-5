<template>
  <div class="flex flex-row max-w-[1440px] w-full px-4 items-center justify-center gap-3">
    <div class="max-w-[30%] max-h-[369px] min-h-[369px] flex justify-end select-none hover:border-[]">
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

  <!-- <div class="top-0 blob">
  </div> -->
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

<style>
.blob {
  position: absolute;
  opacity: 0.5;
  width: 400px;
  aspect-ratio: 1/1;
  animation: animate 10s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate forwards;
  filter: blur(40px);
  z-index: -1;
  background: linear-gradient(47deg,
      rgba(255, 88, 139, 1) 21%,
      rgb(0 164 173) 67%,
      rgba(118, 74, 166, 1) 81%);

  /*  Optional  */
  /*   box-shadow: inset 50px 50px 17px 0px #ff588b,
    inset 100px 100px 17px 0px #66319f; */
}

@keyframes animate {
  0% {
    translate: 40% -25%;
    border-radius: 60% 40% 30% 70% / 100% 85% 92% 74%;
  }

  50% {
    translate: 0% 13%;
    border-radius: 20% 71% 47% 70% / 81% 15% 22% 54%;
    rotate: 41deg;
    scale: 2.15;
  }

  100% {
    translate: -45% 39%;
    border-radius: 100% 75% 92% 74% / 60% 80% 30% 70%;
    rotate: -60deg;
    scale: 2.05;
  }
}
</style>
