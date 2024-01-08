// export const BASE_NAME = '/vibe-chat'; // For Build
export const BASE_NAME = '';
const config = {
  IMAGE_URL_FRONTEND: `${BASE_NAME}/images`,
  NAME_KEY: "trialtask",
  NODE_ENV: process.env.NODE_ENV || "development",
};
export default config;
