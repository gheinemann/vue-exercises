import Vue from "vue";
import Config from "./config";
import App from "../src/Components_1_App.vue";

Config();

new Vue({
  el: "#app",
  render: h => h(App)
});
