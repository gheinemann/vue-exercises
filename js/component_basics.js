import Vue from "vue";
import Config from "./config";
import App from "../src/components_basic/App.vue";

Config();

new Vue({
  el: "#app",
  render: h => h(App)
});
