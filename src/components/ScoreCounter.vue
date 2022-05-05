<template>
  <div class="score">
    <p style="margin: 3px">{{score}}</p>
  </div>
</template>

<script>
export default {
  name: "ScoreCounter",
  props:{
    score:Number
  }
}
</script>

<style scoped>
  .score{
    background: #2c3e50;
    position: absolute;
    height: 20px;
    width: 20px;
    padding:10px;
    color: white;
    border-radius: .6rem;
    text-align: center;
    left:10px;
    right: 10px;
  }
</style>