<template>
  <div class="w-full flex items-center justify-center">
    <el-form
      style="max-width: 600px"
      label-width="auto"
      :label-position="labelPosition"
      :size="size"
    >
      <el-form-item label="Username/Email">
        <el-input v-model="username" style="width: 308px" placeholder="Enter Username or Email" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input
          v-model="pass"
          class="w-[308px]"
          type="password"
          placeholder="Enter password"
          show-password
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" v-if="!buttonLoading">Login</el-button>
        <el-button type="primary" loading v-else>Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { ElNotification } from 'element-plus'

export default {
  data() {
    return {
      size: 'default',
      labelPosition: 'top',
      username: null,
      pass: null,
      error: null,

      buttonLoading: false,
      signupResponse: false,
    };
  },

  methods: {
    async onSubmit() {
      this.buttonLoading = true
      this.error = null

      try {
        this.signupResponse = await window.login(this.username, this.pass);
        localStorage.setItem('token', this.signupResponse.token)
        window.location.reload()
      } catch (e) {
        this.error = "Invalid Username/Email or Password";
        this.openNotification();
      } finally {
        this.buttonLoading = false
        this.username = null;
        this.pass = null;
      }
    },
    openNotification() {
      ElNotification({
        message: this.error,
        type: 'warning',
        duration: 3000,
      });
    },
    success() {
      ElNotification({
        message: 'Account created successfully!',
        type: 'success',
        duration: 3000,
      });
    },
  },
}
</script>

<style>
.el-radio-group {
  margin-right: 12px;
}
.el-form-item__label {
  color: #ffffff !important;
  user-select: none;
}
.el-input__wrapper {
  background-color: #111621 !important;
}
.el-input__inner::placeholder {
  color: #4b5563 !important;
}
.el-input__inner {
  color: #ffffff !important;
}
.el-notification {
  background-color: #111621 !important;
  border: #67bdff 1px solid !important;
}
.el-notification__content {
  color: #ffffff !important;
  font-weight: 600 !important;
}
</style>