<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

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
</style>