<template>
<p>
    <button @click="this.increment">+</button>
    <span :class="sumClass">{{sum}}</span> 
    <button @click="this.decrement">-</button>
</p>
</template>
   
<script>
export default {
  name: "Counter",
  data: () => {
    return {
      sum: 0,
      sumClassName: "grey"
    };
  },
  methods: {
    increment() {
      this.sum += 1;
      console.log("Increment !");
    },
    decrement() {
      this.sum -= 1;
      console.log("Decrement !");
    }
  },
  computed: {
    sumClass() {
      var color_class = "";

      if (this.sum > 0) {
        color_class = "green";
      } else {
        if (this.sum < 0) {
          color_class = "red";
        } else {
          color_class = "grey";
        }
      }

      return this.sumClassName = color_class;
    }
  }
};
</script>
