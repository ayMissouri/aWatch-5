<template>
  <div class="flex items-center justify-center w-full p-[16px]">
    <div class="flex flex-col gap-[48px] max-w-[1440px] justify-center w-full">
      <div class="flex flex-row gap-3">
        <img :src="`https://api.awatch.fun${user?.imageUrl}`" class="rounded-full w-[86px] select-none pointer-events-none">
        <div class="font-Rubik flex justify-center flex-col">
          <h1 class="text-neutralMinus100  text-xl font-semibold">{{ user?.name }}</h1>
          <p class=" text-neutral200 text-xs">{{ user?.email }}</p>
        </div>
      </div>

      <div>
        <h1 class=" text-neutralMinus100 text-3xl font-bold border-b-[1px] border-neutral500 py-2">Continue Watching</h1>
        <div class="flex items-center justify-center min-h-[128px]">
          <h1 class="text-neutral200 text-xl font-bold">
            You have no movies or shows in your continue watching list.
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },

  props: {
    user: {
      type: Object,
      required: true,
    }
  },
}
</script>
<style>
  
</style>