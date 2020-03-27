<template>
  <div id="app">
        <img src="./images/1.jpg" alt="logo" >
        <div class="word">
            {{msg}}
            <div class="word2">
                12323
            </div>
        </div>
  </div>
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

<style lang="stylus" scoped>
 .word
   width: 100px
   height: 100px
   position: relative
   .word2
       width:10px
       height:10px
       color: red
       position: absolute
       left:50%
       top:50%
       transform: translate(-50%, -50%)
</style>