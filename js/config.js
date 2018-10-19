import Vue from "vue";

export default () => {
  if (process.env.APP_ENV === "dev") {
    Vue.config.devtools = true;
    Vue.config.debug = true;
    Vue.config.silent = false;
  } else {
    Vue.config.devtools = false;
    Vue.config.debug = false;
    Vue.config.silent = true;
  }
};
