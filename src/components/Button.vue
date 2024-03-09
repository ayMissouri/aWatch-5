<template>
  <button v-if="type === 'primary'" 
  class="bg-primary300 flex items-center justify-center h-12 px-6 button text-neutralMinus100 
  rounded transition-all hover:bg-primary200 active:bg-primary400 select-none">
    {{ text }}
  </button>

  <button v-if="type === 'secondary' && !icon" 
  class="bg-neutral-100 flex items-center justify-center h-12 px-6 button text-neutral600 
  rounded transition-all hover:bg-neutral200 active:bg-neutral300 select-none">
    {{ text }}
  </button>
  
  <button v-if="type === 'secondary' && icon === 'play'" 
  class="gap-3 bg-neutral-100 flex items-center justify-center h-12 px-6 button text-neutral600 
  rounded transition-all hover:bg-neutral200 active:bg-neutral300 select-none">
    <Icon type="play" fill="#1a1d29" />
    {{ text }}
  </button>

  <button v-if="type === 'outlined' && !icon" 
  class=" bg-black bg-opacity-10 border-[1px] border-neutralMinus100 flex items-center justify-center 
  h-12 px-6 button text-neutralMinus100 rounded transition-all hover:bg-neutral200 
  hover:border-neutral200 hover:border-opacity-40 hover:text-neutral700 hover:bg-opacity-40 
  active:bg-neutral300 active:bg-opacity-40 select-none">
    {{ text }}
  </button>
  
  <button v-if="type === 'outlined' && icon === 'play'" 
  @mouseover="hover = true" 
  @mouseleave="hover = false"
  class="gap-3 bg-black bg-opacity-10 border-[1px] border-neutralMinus100 flex items-center justify-center 
  h-12 px-6 button text-neutralMinus100 rounded transition-all hover:bg-neutral200 
  hover:border-neutral200 hover:border-opacity-40 hover:text-neutral700 hover:bg-opacity-40 
  active:bg-neutral300 active:bg-opacity-40 select-none">
    <Icon type="play" :iconClass="hover ? 'fill-neutral700' : 'fill-neutralMinus100'"  />
    {{ text }}
  </button>
  
  <button v-if="type === 'outlined circle' && icon === 'plus'" 
  @mouseover="hover = true" 
  @mouseleave="hover = false"
  class="gap-3 bg-black bg-opacity-10 border-[2px] border-neutralMinus100 flex items-center justify-center 
  h-[48px] w-[48px] button text-neutralMinus100 transition-all hover:bg-neutralMinus100 rounded-full
  hover:border-neutral200 hover:border-opacity-40 active:bg-neutral200">
    <Icon type="plus" :iconClass="hover ? 'fill-neutral700' : 'fill-neutralMinus100'"  />
  </button>
  
  <button v-if="type === 'outlined circle' && icon === 'add'" 
  @mouseover="hover = true" 
  @mouseleave="hover = false"
  class="gap-3 bg-black bg-opacity-10 border-[2px] border-neutralMinus100 flex items-center justify-center 
  h-[48px] w-[48px] button text-neutralMinus100 transition-all hover:bg-neutralMinus100 rounded-full
  hover:border-neutral200 hover:border-opacity-40 active:bg-neutral200">
    <Icon type="add" :iconClass="hover ? 'fill-neutral700' : 'fill-neutralMinus100'"  />
  </button>
  
  <button v-if="type === 'outlined circle' && icon === 'done'" 
  class="gap-3 bg-black bg-opacity-10 border-[2px] border-neutralMinus100 flex items-center justify-center 
  h-[48px] w-[48px] button text-neutralMinus100 transition-all rounded-full
  active:bg-opacity-60 hover:bg-opacity-30">
    <Icon type="done" fill="#02e7f5" />
  </button>

  <button v-if="type === 'play'" 
  @mouseover="hover = true" 
  @mouseleave="hover = false"
  class="gap-3 bg-black bg-opacity-10 border-[2px] border-neutralMinus100 flex items-center justify-center 
  h-[48px] w-[48px] text-neutralMinus100 transition-all hover:bg-neutralMinus100 rounded-full
  hover:border-neutral200 hover:border-opacity-40 active:bg-neutral200">
    <Transition>
      <ToolTip v-if="hover" text="Play" class="absolute mb-[110px]" />
    </Transition>
    <Icon type="play" :iconClass="hover ? 'fill-neutral700 ml-[2px]' : 'fill-neutralMinus100 ml-[2px]'"  />
  </button>

  <button v-if="type === 'group'" 
  @mouseover="hover = true" 
  @mouseleave="hover = false"
  class="gap-3 bg-black bg-opacity-10 border-[2px] border-neutralMinus100 flex items-center justify-center 
  h-[48px] w-[48px] text-neutralMinus100 transition-all hover:bg-neutralMinus100 rounded-full
  hover:border-neutral200 hover:border-opacity-40 active:bg-neutral200">
    <Transition>
      <ToolTip v-if="hover" text="Watch together" class="absolute mb-[110px]" />
    </Transition>
    <Icon type="group" :iconClass="hover ? 'fill-neutral700' : 'fill-neutralMinus100'"  />
  </button>

  <button v-if="type === 'info'" 
  @mouseover="hover = true" 
  @mouseleave="hover = false"
  class="gap-3 bg-black bg-opacity-10 border-[2px] border-neutralMinus100 flex items-center justify-center 
  h-[48px] w-[48px] text-neutralMinus100 transition-all hover:bg-neutralMinus100 rounded-full
  hover:border-neutral200 hover:border-opacity-40 active:bg-neutral200">
    <Transition>
      <ToolTip v-if="hover" text="Info" class="absolute mb-[110px]" />
    </Transition>
    <Icon type="info" :iconClass="hover ? 'fill-neutral700' : 'fill-neutralMinus100'"  />
  </button>
  
  <button v-if="type === 'bookmark'" 
  @mouseover="hover = true" 
  @mouseleave="hover = false"
  class="gap-3 bg-black bg-opacity-10 border-[2px] border-neutralMinus100 flex items-center justify-center 
  h-[48px] w-[48px] text-neutralMinus100 transition-all hover:bg-neutralMinus100 rounded-full
  hover:border-neutral200 hover:border-opacity-40 active:bg-neutral200">
    <Transition>
      <ToolTip v-if="hover" text="Bookmark" class="absolute mb-[110px]" />
    </Transition>  
    <Icon type="add" :iconClass="hover ? 'fill-neutral700' : 'fill-neutralMinus100'"  />
  </button>
  
</template>

<script>
import Icon from './Icon.vue';
import ToolTip from './ToolTip.vue';

export default {
  components: {Icon, ToolTip},

  data() {
    return {
      hover: false,
    };
  },

  props: {
    text: {
      type: String,
      default: 'button',
    },
    type: {
      type: String,
      default: 'primary',
    },
    icon: {
      type: String,
    },
  },

  mounted() {},
  
  methods: {},
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
