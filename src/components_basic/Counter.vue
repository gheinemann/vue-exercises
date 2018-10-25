<template>
<p>
    <button @click="this.increment">+</button>
    <span>{{sum}}</span> 
    <button @click="this.decrement">-</button>
</p>
</template>
   
<script>
export default {
  name: "Counter",
  data: () => {
    return {
      sum: 0
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
  }
};
</script>
