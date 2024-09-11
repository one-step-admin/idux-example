<script setup lang="ts">
import type { AbstractControl, ValidateErrors } from '@idux/cdk/forms'
import { Validators, useFormGroup } from '@idux/cdk/forms'
import { useMessage } from '@idux/components/message'

defineOptions({
  name: 'ResetPasswordForm',
})

const props = defineProps<{
  account?: string
}>()

const emits = defineEmits<{
  onLogin: [account: string]
  onResetPassword: [account: string]
}>()

const { required, minLength, maxLength } = Validators
const message = useMessage()

const loading = ref(false)

const form = useFormGroup({
  account: [props.account ?? localStorage.login_account ?? '', required],
  captcha: ['', required],
  newPassword: ['', [required, minLength(6), maxLength(18)]],
})
function handleReset() {
  message.info('重置密码仅提供界面演示，无实际功能，需开发者自行扩展')
  if (form.valid.value) {
    // 这里编写业务代码
    emits('onResetPassword', form.getValue().account)
  }
  else {
    form.markAsDirty()
  }
}
</script>

<template>
  <IxForm :control="form" class="min-h-500px w-full flex-col-stretch-center p-12">
    <h3 class="mb-8 text-xl color-[var(--el-text-color-primary)] font-bold">
      忘记密码了? 🔒
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
    <div class="mt-4 flex-center gap-2 text-sm color-[var(--el-text-color-secondary)]">
      <IxButton mode="link" @click="emits('onLogin', form.getValue().account)">
        去登录
      </IxButton>
    </div>
  </IxForm>
</template>
