import { BrickBuilder } from '@lucidcms/core'

const Banner = new BrickBuilder('banner', {
  description: 'A banner with a title and intro text',
  preview: {
    image: 'https://placehold.co/600x400',
  },
})
  .addTab({
    title: 'Content',
    key: 'content_tab',
  })
  .addText({
    key: 'title',
    description: 'The title of the banner',
    validation: {
      required: true,
    },
  })
  .addWysiwyg({
    key: 'intro',
  })
  .addRepeater({
    key: 'cta',
    validation: {
      maxGroups: 3,
    },
  })
  .addText({
    key: 'cta_title',
  })
  .addText({
    key: 'cta_url',
  })
  .endRepeater()
  .addTab({
    title: 'Config',
    key: 'config_tab',
  })
  .addCheckbox({
    key: 'fullwidth',
    description: 'Make the banner full-width',
  })

export default Banner
