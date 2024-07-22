<template>
  <div class="w-full flex items-center justify-center">
    <el-form
      style="max-width: 600px"
      label-width="auto"
      :label-position="labelPosition"
      :size="size"
    >
      <el-form-item label="Username">
        <el-input v-model="username" style="width: 308px" placeholder="Enter username" />
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="email" type="email" style="width: 308px" placeholder="Enter Email" />
      </el-form-item>
      <div class="flex flex-col sm:flex-row gap-2">
        <el-form-item label="Password">
          <el-input
            v-model="pass"
            class="sm:w-[150px] w-[308px]"
            type="password"
            placeholder="Enter password"
            show-password
          />
        </el-form-item>
        <el-form-item label="Confirm Password">
          <el-input
            v-model="confirmPass"
            class="sm:w-[150px] w-[308px]"
            type="password"
            placeholder="Repeat password"
            show-password
          />
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" v-if="!buttonLoading">Register</el-button>
        <el-button type="primary" loading v-else>Register</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { ElNotification } from 'element-plus'

export default {
  emits: ['signup'],

  data() {
    return {
      size: 'default',
      labelPosition: 'top',
      username: null,
      email: null,
      pass: null,
      confirmPass: null,
      error: null,

      buttonLoading: false,
      signupResponse: false,
    };
  },

  methods: {
    async onSubmit() {
      this.buttonLoading = true
      this.error = null
      const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_.-]{2,15}$/;
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

      if (!usernameRegex.test(this.username)) {
        this.error = 'Usernames must be alphanumeric and between 3-15 characters.'
        this.openNotification()
        this.buttonLoading = false
        return;
      }

      if (!emailRegex.test(this.email)) {
        this.error = 'Invalid Email.'
        this.openNotification()
        this.buttonLoading = false
        return;
      }

      if (this.pass !== this.confirmPass) {
        this.error = 'Passwords do not match.'
        this.openNotification()
        this.buttonLoading = false
        return;
      }

      this.signupResponse = await window.signUp(this.username, this.email, this.pass);
      this.username = null;
      this.email = null;
      this.pass = null;
      this.confirmPass = null;
      this.buttonLoading = false
      if (this.signupResponse.message === 'User created successfully') {
        this.success()
        this.$emit('signup')
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