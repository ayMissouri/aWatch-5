<template>
  <div class="flex items-center justify-center flex-col">
    <div class="bg-neutral100 rounded py-2 px-4 text-neutral600 text-sm font-semibold 
    font-montserrat cursor-default select-none">
      {{ text }}
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" fill="none"><path fill="#F9F9F9" d="M5.824 10 0 0h11L5.824 10Z"/></svg>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {};
  },

  props: {
    text: {
      type: String,
      default: 'tooltip',
    },
  },

  mounted() {},
  
  methods: {},
}
</script>

<style scoped>
</style>
