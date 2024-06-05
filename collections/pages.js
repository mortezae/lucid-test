import { CollectionBuilder } from '@lucidcms/core'
// Bricks
import Banner from '../bricks/banner.js'
//import SEO from '../bricks/seo.js'



export const PageCollection = new CollectionBuilder('page', {
  mode: 'multiple',
  title: 'Pages',
  singular: 'Page',
  description: 'Pages are used to create static content on your website.',
  translations: true,
  hooks: [
    {
      event: 'beforeUpsert',
      handler: async (props) => {},
    },
  ],
  bricks: {
    //fixed: [SEO],
    builder: [Banner],
  },
})
  .addText({
    key: 'page_title',
    collection: {
      list: true,
      filterable: true,
    },
  })
  .addTextarea({
    key: 'page_excerpt',
    collection: {
      list: true,
      filterable: true,
    },
  })
  .addCheckbox({
    key: 'page_featured',
    translations: true,
    collection: {
      filterable: true,
    },
  })
  .addUser({
    key: 'author',
    collection: {
      list: true,
    },
  })
