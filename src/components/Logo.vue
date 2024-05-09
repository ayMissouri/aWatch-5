<template>
  <div class="select-none">
    <img src="../assets/images/a-logo.png" alt="aWatch" class="h-[30px] select-none cursor-pointer" @click="goHome">
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {};
  },

  methods: {
    goHome() {
      window.location.href = '/';
    },
  },
}
</script>

<style></style>
