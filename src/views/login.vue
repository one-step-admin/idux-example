<script setup lang="ts">
import type { AbstractControl, ValidateErrors } from '@idux/cdk/forms'
import { Validators, useFormGroup } from '@idux/cdk/forms'
import { useMessage } from '@idux/components/message'
import Copyright from '@/views/components/Copyright/index.vue'
import useUserStore from '@/store/modules/user'

defineOptions({
  name: 'Login',
})

const { required, minLength, maxLength } = Validators

const route = useRoute()
const router = useRouter()

const userStore = useUserStore()

const message = useMessage()

const banner = new URL('../assets/images/login-banner.png', import.meta.url).href
const title = import.meta.env.VITE_APP_TITLE

// 表单类型，login 登录，register 注册，reset 重置密码
const formType = ref('login')
const loading = ref(false)
const redirect = ref(route.query.redirect?.toString() ?? '/')

// 登录
const loginForm = useFormGroup({
  account: [localStorage.login_account || '', required],
  password: ['', [required, minLength(6), maxLength(18)]],
  remember: [!!localStorage.login_account],
})
function handleLogin() {
  if (loginForm.valid.value) {
    loading.value = true
    userStore.login(loginForm.getValue()).then(() => {
      loading.value = false
      if (loginForm.getValue().remember) {
        localStorage.setItem('login_account', loginForm.getValue().account)
      }
      else {
        localStorage.removeItem('login_account')
      }
      router.push(redirect.value)
    }).catch(() => {
      loading.value = false
    })
  }
  else {
    loginForm.markAsDirty()
  }
}

// 注册
function confirmPasswordValidator(value: string, control: AbstractControl): ValidateErrors | undefined {
  if (!value) {
    return {
      passwordRequired: {
        message: '请确认你的密码',
      },
    }
  }
  else if (value !== control.root.get('password')?.getValue()) {
    return {
      passwordConfirm: {
        message: '两次密码输入不一致',
      },
    }
  }
  return undefined
}
const registerForm = useFormGroup({
  account: ['', required],
  captcha: ['', required],
  password: ['', [required, minLength(6), maxLength(18)]],
  checkPassword: ['', [confirmPasswordValidator]],
})
function handleRegister() {
  message.info('注册模块仅提供界面演示，无实际功能，需开发者自行扩展')
  if (registerForm.valid.value) {
    // 这里编写业务代码
  }
  else {
    registerForm.markAsDirty()
  }
}

// 重置密码
const resetForm = useFormGroup({
  account: [localStorage.login_account || '', required],
  captcha: ['', required],
  newPassword: ['', [required, minLength(6), maxLength(18)]],
})
function handleReset() {
  message.info('重置密码仅提供界面演示，无实际功能，需开发者自行扩展')
  if (resetForm.valid.value) {
    // 这里编写业务代码
  }
  else {
    resetForm.markAsDirty()
  }
}

function testAccount(account: string) {
  loginForm.get('account')?.setValue(account)
  loginForm.get('password')?.setValue('123456')
  nextTick(() => handleLogin())
}
</script>

<template>
  <div>
    <div class="bg-banner" />
    <div id="login-box" class="shadow">
      <div class="login-banner">
        <div class="logo shadow" />
        <img :src="banner" class="banner">
      </div>
      <IxForm v-show="formType === 'login'" :control="loginForm" class="login-form">
        <div class="title-container">
          <h3 class="title">
            欢迎来到 {{ title }} ! 👋🏻
          </h3>
        </div>
        <div>
          <IxFormItem message="请输入用户名">
            <IxInput control="account" size="lg" placeholder="用户名" tabindex="1">
              <template #prefix>
                <SvgIcon name="ri:user-3-fill" />
              </template>
            </IxInput>
          </IxFormItem>
          <IxFormItem message="请输入密码，密码长度为6到18位">
            <IxInput control="password" size="lg" type="password" placeholder="密码" tabindex="2" @keyup.enter="handleLogin">
              <template #prefix>
                <SvgIcon name="ri:lock-2-fill" />
              </template>
            </IxInput>
          </IxFormItem>
        </div>
        <div class="flex-bar">
          <IxCheckbox control="remember">
            记住我
          </IxCheckbox>
          <IxButton mode="link" @click="formType = 'reset'">
            忘记密码了?
          </IxButton>
        </div>
        <IxButton :loading="loading" mode="primary" size="lg" style="width: 100%;" @click.prevent="handleLogin">
          登录
        </IxButton>
        <div class="sub-link">
          <IxSpace>
            <span class="text">还没有帐号?</span>
            <IxButton mode="link" @click="formType = 'register'">
              创建新帐号
            </IxButton>
          </IxSpace>
        </div>
        <div style="margin-top: 20px; margin-bottom: -20px; text-align: center;">
          <IxDivider>演示账号一键登录</IxDivider>
          <IxSpace>
            <IxButton mode="primary" size="xs" @click="testAccount('admin')">
              admin
            </IxButton>
            <IxButton size="xs" @click="testAccount('test')">
              test
            </IxButton>
          </IxSpace>
        </div>
      </IxForm>
      <IxForm v-show="formType === 'register'" :control="registerForm" class="login-form">
        <div class="title-container">
          <h3 class="title">
            探索从这里开始! 🚀
          </h3>
        </div>
        <div>
          <IxFormItem message="请输入用户名">
            <IxInput control="account" size="lg" placeholder="用户名" tabindex="1">
              <template #prefix>
                <SvgIcon name="ri:user-3-fill" />
              </template>
            </IxInput>
          </IxFormItem>
          <IxFormItem message="请输入验证码">
            <IxInput control="captcha" size="lg" placeholder="验证码" tabindex="2">
              <template #prefix>
                <SvgIcon name="ic:baseline-verified-user" />
              </template>
              <template #suffix>
                <IxButton size="xs">
                  发送验证码
                </IxButton>
              </template>
            </IxInput>
          </IxFormItem>
          <IxFormItem message="请输入密码，密码长度为6到18位">
            <IxInput control="password" size="lg" type="password" placeholder="密码" tabindex="3">
              <template #prefix>
                <SvgIcon name="ri:lock-2-fill" />
              </template>
            </IxInput>
          </IxFormItem>
          <IxFormItem message="两次输入的密码不一致">
            <IxInput control="checkPassword" size="lg" type="password" placeholder="确认密码" tabindex="4">
              <template #prefix>
                <SvgIcon name="ri:lock-2-fill" />
              </template>
            </IxInput>
          </IxFormItem>
        </div>
        <IxButton :loading="loading" mode="primary" size="lg" style="width: 100%; margin-top: 20px;" @click.prevent="handleRegister">
          注册
        </IxButton>
        <div class="sub-link">
          <IxSpace>
            <span class="text">已经有帐号?</span>
            <IxButton mode="link" @click="formType = 'login'">
              去登录
            </IxButton>
          </IxSpace>
        </div>
      </IxForm>
      <IxForm v-show="formType === 'reset'" :control="resetForm" class="login-form">
        <div class="title-container">
          <h3 class="title">
            忘记密码了? 🔒
          </h3>
        </div>
        <div>
          <IxFormItem message="请输入用户名">
            <IxInput control="account" size="lg" placeholder="用户名" tabindex="1">
              <template #prefix>
                <SvgIcon name="ri:user-3-fill" />
              </template>
            </IxInput>
          </IxFormItem>
          <IxFormItem message="请输入验证码">
            <IxInput control="captcha" size="lg" placeholder="验证码" tabindex="2">
              <template #prefix>
                <SvgIcon name="ic:baseline-verified-user" />
              </template>
              <template #suffix>
                <IxButton size="xs">
                  发送验证码
                </IxButton>
              </template>
            </IxInput>
          </IxFormItem>
          <IxFormItem message="请输入新密码">
            <IxInput control="newPassword" size="lg" type="password" placeholder="新密码" tabindex="3">
              <template #prefix>
                <SvgIcon name="ri:lock-2-fill" />
              </template>
            </IxInput>
          </IxFormItem>
        </div>
        <IxButton :loading="loading" mode="primary" size="lg" style="width: 100%; margin-top: 20px;" @click.prevent="handleReset">
          确认
        </IxButton>
        <div class="sub-link">
          <IxButton mode="link" @click="formType = 'login'">
            去登录
          </IxButton>
        </div>
      </IxForm>
    </div>
    <Copyright />
  </div>
</template>

<style lang="scss" scoped>
[data-mode="mobile"] {
  #login-box {
    position: relative;
    width: 100%;
    height: 100%;
    top: inherit;
    left: inherit;
    transform: translateX(0) translateY(0);
    flex-direction: column;
    justify-content: start;
    border-radius: 0;
    box-shadow: none;

    .login-banner {
      width: 100%;
      padding: 20px 0;

      .banner {
        position: relative;
        right: inherit;
        width: 100%;
        max-width: 375px;
        margin: 0 auto;
        display: inherit;
        top: inherit;
        transform: translateY(0);
      }
    }

    .login-form {
      width: 100%;
      min-height: auto;
      padding: 30px;
    }
  }

  .copyright {
    position: relative;
  }
}

:deep(input[type="password"]::-ms-reveal) {
  display: none;
}

.bg-banner {
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, var(--g-app-bg), var(--g-main-bg));
}

#login-box {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: var(--g-app-bg);
  border-radius: 10px;
  overflow: hidden;

  .login-banner {
    position: relative;
    width: 450px;
    background-color: var(--g-main-bg);
    overflow: hidden;

    .banner {
      width: 100%;

      @include position-center(y);
    }

    .logo {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 30px;
      height: 30px;
      border-radius: 4px;
      background: url("../assets/images/logo.png") no-repeat;
      background-size: contain;
    }
  }

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 500px;
    width: 500px;
    padding: 50px;
    overflow: hidden;

    .title-container {
      position: relative;

      .title {
        font-size: 1.3em;
        margin: 0 auto 30px;
        font-weight: bold;
      }
    }
  }

  :deep(.ix-divider-label) {
    background-color: var(--g-app-bg);
  }

  .flex-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .sub-link {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    font-size: 14px;
  }
}

.copyright {
  position: absolute;
  bottom: 0;
  padding: 20px;
  margin: 0;
  width: 100%;
}
</style>
