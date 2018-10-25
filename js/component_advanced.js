import Vue from "vue";
import Config from "./config";
import App from "../src/compo";

Config();

new Vue({
  el: "#app",
  render: h => h(App)
});
