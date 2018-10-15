import Vue from 'vue';

const navbar = Vue.component("navbar", {
    template:`
    <header>
      <ul>
        <li>Here</li>
        <li>There</li>
      </ul>
    </header>
  `
  });
  
  const app = new Vue({
    el: '#app',
    data: {
      message: " I've always dreamed of a good message... Maybe next time.   ",
      has_message: true,
      title: "My vue",
      subjects: [
        {title:"sports"},
        {title:"music"},
        {title:"art"},
        {title:"nothing"}
      ]
    },
    methods: {
      toggleMessage() {
        this.has_message = !this.has_message;
      },
      logMessage() {
        console.log(this.message);
      },
      logTitle() {
        console.log(this.title);
      },
      submitForm() {
        return false;
      }
    },
    components: {navbar}
  });