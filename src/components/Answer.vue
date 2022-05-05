<template>
    <div class="answer">
      <button class="btn" @click="onClick">{{answer.answer}}</button>
      <h1>{{answer.id}}</h1>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Answer",
  props:{
    answer:Object,
  },
  methods:{
    onClick(){
      console.log(this.id)
      this.$emit('onClick',this.id)
    }
  }
}
</script>

<style scoped>
.btn{
  background: #2c3e50;
  color: white;
  border: none;
  padding: 10px;
  margin: 2px;
  border-radius: .2rem;
  min-width: 500px ;
}
</style>