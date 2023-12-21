<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings'

const settingsStore = useSettingsStore()
</script>

<template>
  <IxThemeProvider :preset-theme="settingsStore.settings.app.colorScheme === 'dark' ? 'dark' : 'default'">
    <IxMessageProvider>
      <slot />
    </IxMessageProvider>
  </IxThemeProvider>
</template>
