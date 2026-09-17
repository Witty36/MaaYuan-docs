// 旧版默认开启扩散，Teek 保存的偏好会覆盖新的 defaultSpread。
export function migrateThemePreferences(storage) {
  const migrationKey = 'maayuan:palette-default-v1'
  if (storage.getItem(migrationKey) === '1') return

  storage.setItem('tk:themeBgColor', 'false')
  storage.setItem(migrationKey, '1')
}
