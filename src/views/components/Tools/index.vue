<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
import useSettingsStore from '@/store/modules/settings'
import useUserStore from '@/store/modules/user'
import useWindowStore from '@/store/modules/window'
import eventBus from '@/utils/eventBus'

defineOptions({
  name: 'UserMenu',
})

const settingsStore = useSettingsStore()
const userStore = useUserStore()
const windowStore = useWindowStore()
const { isFullscreen, toggle } = useFullscreen()

function toggleColorScheme(event: MouseEvent) {
  const { startViewTransition } = useViewTransition(() => {
    settingsStore.setColorScheme(settingsStore.settings.app.colorScheme === 'dark' ? 'light' : 'dark')
  })
  startViewTransition().ready.then(() => {
    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: settingsStore.settings.app.colorScheme !== 'dark' ? clipPath : clipPath.reverse(),
      },
      {
        duration: 300,
        easing: 'ease-out',
        pseudoElement: settingsStore.settings.app.colorScheme !== 'dark' ? '::view-transition-new(root)' : '::view-transition-old(root)',
      },
    )
  })
}

function previewAllWindows() {
  settingsStore.$patch({
    previewAllWindows: true,
  })
}

const avatarError = ref(false)
watch(() => userStore.avatar, () => {
  if (avatarError.value) {
    avatarError.value = false
  }
})
</script>

<template>
  <div class="tools flex items-center gap-4 whitespace-nowrap px-4">
    <span v-if="settingsStore.settings.navSearch.enable" class="group inline-flex cursor-pointer items-center gap-1 rounded-2 bg-stone-1 px-2 py-1.5 text-dark ring-stone-3 ring-inset transition dark:bg-stone-9 dark:text-white hover:ring-1 dark:ring-stone-7" @click="eventBus.emit('global-search-toggle')">
      <SvgIcon name="ri:search-line" />
      <span class="text-sm text-stone-5 transition group-hover:text-dark dark:group-hover:text-white">搜索</span>
      <HKbd v-if="settingsStore.settings.navSearch.enableHotkeys" class="ml-2">{{ settingsStore.os === 'mac' ? '⌥' : 'Alt' }} S</HKbd>
    </span>
    <div class="flex items-center empty:hidden">
      <span v-if="windowStore.list.length > 1" class="item" @click="previewAllWindows">
        <SvgIcon name="i-icon-park-outline:all-application" />
      </span>
      <span v-if="settingsStore.settings.toolbar.enableFullscreen" class="item" @click="toggle">
        <SvgIcon :name="isFullscreen ? 'ri:fullscreen-exit-line' : 'ri:fullscreen-line'" />
      </span>
      <span v-if="settingsStore.settings.toolbar.enableColorScheme" class="item" @click="toggleColorScheme">
        <SvgIcon :name="settingsStore.settings.app.colorScheme === 'light' ? 'ri:sun-line' : 'ri:moon-line'" />
      </span>
    </div>
    <HDropdownMenu
      :items="[
        [
          { label: '快捷键介绍', handle: () => eventBus.emit('global-hotkeys-intro-toggle') },
        ],
        [
          { label: '退出登录', handle: () => userStore.logout() },
        ],
      ]"
    >
      <div flex-center cursor-pointer gap-1>
        <img v-if="userStore.avatar && !avatarError" :src="userStore.avatar" :onerror="() => (avatarError = true)" class="h-[24px] w-[24px] rounded-full">
        <SvgIcon v-else name="carbon:user-avatar-filled-alt" :size="24" class="text-gray-400" />
        {{ userStore.account }}
        <SvgIcon name="ep:caret-bottom" />
      </div>
    </HDropdownMenu>
  </div>
</template>

<style lang="scss" scoped>
.item {
  --at-apply: flex px-2 py-1 cursor-pointer;
}
</style>
