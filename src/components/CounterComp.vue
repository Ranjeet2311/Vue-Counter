<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increase() {
      this.count++;
    },

    decrease() {
      this.count--;
    },
    reset() {
      if (this.count === 0) {
        alert("There is nothing to reset !");
      }
      this.count = 0;
    },
  },
};
</script>

<template>
  <div class="app-wrap">
    <h1>{{ count }}</h1>

    <div class="button-wrap">
      <button @click="increase" class="btn">Up</button>
      <button @click="decrease" class="btn">Down</button>
      <button @click="reset" class="btn">Reset</button>
    </div>
  </div>
</template>

<style scoped>
.app-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(255, 254, 254);
  height: 400px;
  width: 400px;
  border-radius: 30px;
  background-image: url(../assets/images/img-2.png);
  background-position: 20px 40px;
  background-repeat: no-repeat;
  background-size: contain;
  box-shadow: 0 10px 10px black;
}

h1 {
  font-size: 50px;
  color: black;
  height: 50px 50px;
  margin-bottom: 80px;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
.button-wrap {
  margin-top: 20px;
  display: flex;
  align-items: center;
  font-size: 30px;
}

.btn {
  cursor: pointer;
  padding: 10px 20px;
  margin: 0 10px;
  color: white;
  background-color: green;
  border: none;
  border-radius: 10px;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

.btn:focus {
  color: black;
}
.btn:hover {
  color: rgb(82, 248, 82);
  box-shadow: 0 10px 10px rgb(135, 251, 135);
}
</style>
