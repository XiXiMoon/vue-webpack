<template>

  <p id="app">
    <img src="./images/1.jpg" alt="logo" >
    {{msg}}
  </p>
</template>

<script>
  export default {
    name:'App',
    data(){
      return {
        msg: 'hello vue !!'
      }
    }
  }
</script>