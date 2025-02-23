/** @type { import("drizzle-kit").Config } */
export default {
  schema: './utils/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://ai-mock-interviewer_owner:6seOd2CjwhyN@ep-square-glade-a5l6czyr.us-east-2.aws.neon.tech/ai-mock-interviewer?sslmode=require',
  },
};
