import config from "../config/app.config";

const logger = (arg) => {
  if (config.NODE_ENV !== "production") {
    // eslint-disable-next-line
    console.log(arg);
  }
  return false;
};

export default logger;
