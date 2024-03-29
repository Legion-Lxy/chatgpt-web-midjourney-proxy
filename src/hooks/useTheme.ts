import type { GlobalThemeOverrides } from 'naive-ui'
import { computed, watch } from 'vue'
import { darkTheme, useOsTheme } from 'naive-ui'
import { useAppStore } from '@/store'

export function useTheme() {
  const appStore = useAppStore()

  const OsTheme = useOsTheme()

  const isDark = computed(() => {
    if (appStore.theme === 'auto')
      return OsTheme.value === 'dark'
    else
      return appStore.theme === 'dark'
  })

  // const theme = computed(() => {
  //   return isDark.value ? darkTheme : undefined
  // })

  const theme = computed(() => undefined)

  // const themeOverrides = computed<GlobalThemeOverrides>(() => {
  //   if (isDark.value) {
  //     return {
  //       common: {},
  //     }
  //   }
  //   return {}
  // })

  const themeOverrides = computed(() => ({}))

  //   watch(
  //     () => isDark.value,
  //     (dark) => {
  //       if (dark)
  //         document.documentElement.classList.add('dark')
  //       else
  //         document.documentElement.classList.remove('dark')
  //     },
  //     { immediate: true },
  //   )

  //   return { theme, themeOverrides }
  // }

  watch(
    () => OsTheme.value,
    () => {
      document.documentElement.classList.remove('dark')
    },
    { immediate: true },
  )

  // 返回theme和themeOverrides，这样不会影响使用这些值的其他代码
  return { theme, themeOverrides }
}