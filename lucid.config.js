import lucid, { PostgresAdapter, SQLiteAdapter, LibSQLAdapter } from '@lucidcms/core'
import LucidLocalStorage from '@lucidcms/plugin-local-storage'
import { SettingsCollection } from './collections/settings.js'
import { PageCollection }     from './collections/pages.js'
import { BlogCollection }     from './collections/blogs.js'
import 'dotenv/config'


export default lucid.config({
  mode: 'development',
  host: 'http://localhost:8393',

  /*
  db: new LibSQLAdapter({
    url: "libsql://db1-mortezae.turso.io",
    authToken:     process.env.TURSO_AUTH_TOKEN,
    //encryptionKey: process.env.TURSO_AUTH_TOKEN,
  }),
  */

  /*
  db: new PostgresAdapter({
    url: process.env.DATABASE_URL,
  }),
  */

  db: new SQLiteAdapter({
    database: async () => new Database('db.sqlite'),
  }),

  keys: {
    cookieSecret:       process.env.LUCID_COOKIE_SECRET,
    refreshTokenSecret: process.env.LUCID_REFRESH_TOKEN_SECRET,
    accessTokenSecret:  process.env.LUCID_ACCESS_TOKEN_SECRET,
  },

  collections: [SettingsCollection, PageCollection, BlogCollection],
  plugins: [
    LucidLocalStorage({
      uploadDir: './uploads',
    }),
  ],
})
