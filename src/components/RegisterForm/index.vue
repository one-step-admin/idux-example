<script setup lang="ts">
import type { AbstractControl, ValidateErrors } from '@idux/cdk/forms'
import { Validators, useFormGroup } from '@idux/cdk/forms'
import { useMessage } from '@idux/components/message'

defineOptions({
  name: 'RegisterForm',
})

const props = defineProps<{
  account?: string
}>()

const emits = defineEmits<{
  onLogin: [account: string]
  onRegister: [account: string]
}>()

const { required, minLength, maxLength } = Validators
const message = useMessage()

const loading = ref(false)

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
const form = useFormGroup({
  account: [props.account ?? '', required],
  captcha: ['', required],
  password: ['', [required, minLength(6), maxLength(18)]],
  checkPassword: ['', [confirmPasswordValidator]],
})
function handleRegister() {
  message.info('注册模块仅提供界面演示，无实际功能，需开发者自行扩展')
  if (form.valid.value) {
    // 这里编写业务代码
    emits('onRegister', form.getValue().account)
  }
  else {
    form.markAsDirty()
  }
}
</script>

<template>
  <IxForm :control="form" class="min-h-500px w-full flex-col-stretch-center p-12">
    <h3 class="mb-8 text-xl color-[var(--el-text-color-primary)] font-bold">
      探索从这里开始! 🚀
    </h3>
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
    <div class="mt-4 flex-center gap-2 text-sm color-[var(--el-text-color-secondary)]">
      已经有帐号?
      <IxButton mode="link" @click="emits('onLogin', form.getValue().account)">
        去登录
      </IxButton>
    </div>
  </IxForm>
</template>
