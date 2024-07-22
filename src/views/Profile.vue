<template>
  <div class=" w-full h-full flex flex-col items-center justify-center" v-if="!token">
    <div class="w-full max-w-[308px] flex items-center justify-center mb-4">
      <el-button color="#181e2b" :dark="isDark" class=" w-full border-[1px] hover:border-[1px] hover:border-[#409eff] border-[#409eff]" v-if="tab === 'login'">Login</el-button>
      <el-button color="#111621" :dark="isDark" class=" w-full border-[1px] hover:border-[1px] hover:border-[#fff] border-[#fff]" v-if="tab === 'signup'" @click="tab = 'login'">Login</el-button>
      <el-button color="#181e2b" :dark="isDark" class=" w-full border-[1px] hover:border-[1px] hover:border-[#409eff] border-[#409eff]" v-if="tab === 'signup'">Register</el-button>
      <el-button color="#111621" :dark="isDark" class=" w-full border-[1px] hover:border-[1px] hover:border-[#fff] border-[#fff]" v-if="tab === 'login'" @click="tab = 'signup'">Register</el-button>
    </div>

    <login v-if="tab === 'login'" />
    <signup v-if="tab === 'signup'" />
  </div>

  <div v-if="token">
    {{ userData }}
  </div>
</template>

<script>
import signup from '../components/Profile/signup.vue'
import login from '../components/Profile/login.vue'

export default {
  components: {signup, login},

  data() {
    return {
      token: null,

      userData: null,

      loading: false,
      tab: 'login',
    };
  },

  mounted: async function() {
    this.loading = true;
    this.token = await window.getUserToken();

    if (this.token) {
      this.userData = await window.getProfile();
    }
    this.loading = false;
  },

  methods: {
  }
}
</script>

<style>
</style>
