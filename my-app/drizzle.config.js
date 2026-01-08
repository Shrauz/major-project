/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_8NvsoB1JHhpj@ep-late-silence-a1ncmge6-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
    }
};