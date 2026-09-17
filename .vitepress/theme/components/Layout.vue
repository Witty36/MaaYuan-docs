<script setup>
import { computed, onMounted, provide, ref } from 'vue'
import { useData } from 'vitepress'
import Teek, { teekConfigContext } from 'vitepress-theme-teek'
import { migrateThemePreferences } from '../../shared/themePreferences.mjs'

const { theme } = useData()
const mounted = ref(false)
onMounted(() => {
  try {
    migrateThemePreferences(localStorage)
  } catch {
    // 浏览器禁用存储时不阻止正文挂载。
  }
  mounted.value = true
})

// Teek 的浮层依赖浏览器创建的 Teleport 容器；正文仍正常参与静态渲染。
provide(teekConfigContext, computed(() => ({
  themeEnhance: { ...theme.value.themeEnhance, enabled: mounted.value },
  backTop: { enabled: mounted.value },
})))
</script>

<template>
  <Teek.Layout>
    <template v-for="(_, name) in $slots" #[name]="scope">
      <slot :name="name" v-bind="scope || {}" />
    </template>
  </Teek.Layout>
</template>
