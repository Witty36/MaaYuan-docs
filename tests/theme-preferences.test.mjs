import test from 'node:test'
import assert from 'node:assert/strict'
import { migrateThemePreferences } from '../.vitepress/shared/themePreferences.mjs'

test('palette migration disables legacy spread once and preserves other preferences', () => {
  const values = new Map([
    ['tk:themeBgColor', 'true'],
    ['tk:themeColor', 'vp-success'],
    ['tk:layoutMode', 'fullWidth'],
  ])
  const storage = {
    getItem: key => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  }

  migrateThemePreferences(storage)
  assert.equal(values.get('tk:themeBgColor'), 'false')
  assert.equal(values.get('tk:themeColor'), 'vp-success')
  assert.equal(values.get('tk:layoutMode'), 'fullWidth')

  storage.setItem('tk:themeBgColor', 'true')
  migrateThemePreferences(storage)
  assert.equal(values.get('tk:themeBgColor'), 'true')
})
