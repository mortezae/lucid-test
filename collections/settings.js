import { CollectionBuilder } from '@lucidcms/core'



export const SettingsCollection = new CollectionBuilder('settings', {
  mode: 'single',
  title: 'Settings',
  singular: 'Setting',
  description: 'Set shared settings for your website.',
  translations: false,
  bricks: {
    fixed: [],
    builder: [],
  },
}).addMedia({
  key: 'site_logo',
  title: 'Logo',
})
