<template>
  <svg v-if="type === 'play'" :class="iconClass" class="transition-all" xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="none"><path :fill="fill" d="M13.098 9.614 2.513 15.516a1.468 1.468 0 0 1-2.18-1.281V2.431a1.467 1.467 0 0 1 2.181-1.28l10.584 5.9a1.465 1.465 0 0 1 0 2.563Z"/></svg>
  <svg v-if="type === 'plus'" :class="iconClass" class="transition-all" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path :fill="fill" d="M15.567 7.067h-4.634V2.433a1.934 1.934 0 0 0-3.866 0v4.634H2.433a1.933 1.933 0 0 0 0 3.866h4.634v4.634a1.933 1.933 0 1 0 3.866 0v-4.634h4.634a1.933 1.933 0 0 0 0-3.866Z"/></svg>
  <svg v-if="type === 'add'" :class="iconClass" class="transition-all" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"><path :fill="fill" d="M13 8H8v5c0 .55-.45 1-1 1s-1-.45-1-1V8H1c-.55 0-1-.45-1-1s.45-1 1-1h5V1c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1Z"/></svg>
  <svg v-if="type === 'done'" :class="iconClass" class="transition-all" xmlns="http://www.w3.org/2000/svg" width="18" height="14" fill="none"><path :fill="fill" d="M6 11.2 1.8 7 .4 8.4 6 14 18 2 16.6.6 6 11.2Z"/></svg>

</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    fill: {
      type: String,
      // required: true,
    },
    iconClass: {
      type: String,
    },
  },
};
</script>