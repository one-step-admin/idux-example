<script setup lang="ts">
import { Validators, useFormGroup } from '@idux/cdk/forms'
import useUserStore from '@/store/modules/user'

defineOptions({
  name: 'LoginForm',
})

const props = defineProps<{
  account?: string
}>()

const emits = defineEmits<{
  onLogin: [account: string]
  onRegister: [account: string]
  onResetPassword: [account: string]
}>()

const { required, minLength, maxLength } = Validators

const userStore = useUserStore()

const title = import.meta.env.VITE_APP_TITLE
const loading = ref(false)

// 登录方式，default 账号密码登录，qrcode 扫码登录
const type = ref('default')
const form = useFormGroup({
  account: [props.account ?? localStorage.login_account ?? '', required],
  password: ['', [required, minLength(6), maxLength(18)]],
  remember: [!!localStorage.login_account],
})
function handleLogin() {
  if (form.valid.value) {
    loading.value = true
    userStore.login(form.getValue()).then(() => {
      loading.value = false
      if (form.getValue().remember) {
        localStorage.setItem('login_account', form.getValue().account)
      }
      else {
        localStorage.removeItem('login_account')
      }
      emits('onLogin', form.getValue().account)
    }).catch(() => {
      loading.value = false
    })
  }
  else {
    form.markAsDirty()
  }
}

function testAccount(account: string) {
  form.get('account')?.setValue(account)
  form.get('password')?.setValue('123456')
  nextTick(() => handleLogin())
}
</script>

<template>
  <IxForm :control="form" class="min-h-500px w-full flex-col-stretch-center p-12">
    <div class="mb-6">
      <HTabList
        v-model="type" :options="[
          { label: '账号密码登录', value: 'default' },
          { label: '扫码登录', value: 'qrcode' },
        ]"
      />
    </div>
    <template v-if="type === 'default'">
      <h3 class="mb-8 text-xl color-[var(--el-text-color-primary)] font-bold">
        欢迎使用 {{ title }} ! 👋🏻
      </h3>
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
      <div class="mb-4 flex-center-between">
        <IxCheckbox control="remember">
          记住我
        </IxCheckbox>
        <IxButton mode="link" @click="emits('onResetPassword', form.getValue().account)">
          忘记密码了?
        </IxButton>
      </div>
      <IxButton :loading="loading" mode="primary" size="lg" style="width: 100%;" @click.prevent="handleLogin">
        登录
      </IxButton>
      <div class="mt-4 flex-center gap-2 text-sm color-[var(--el-text-color-secondary)]">
        还没有帐号?
        <IxButton mode="link" @click="emits('onRegister', form.getValue().account)">
          创建新帐号
        </IxButton>
      </div>
    </template>
    <template v-else-if="type === 'qrcode'">
      <div class="flex-col-center">
        <img src="https://s2.loli.net/2024/04/26/GsahtuIZ9XOg5jr.png" class="h-[250px] w-[250px]">
        <div class="mt-2 op-50">
          请使用微信扫码登录
        </div>
      </div>
    </template>
    <div class="mt-4 text-center -mb-4">
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
</template>
