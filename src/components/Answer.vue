<template>
    <div class="answer">
      <button class="btn" @click="onClick">{{answer.answer}}</button>
    </div>
</template>

<script>
import {eventEmitter} from "@/main";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Answer",
  components:{
  },
  props:{
    answer:Object,
    score:Number
  },
  methods:{
    onClick(){
      if(this.answer.isCorrect){
        eventEmitter.emit('increase-score')
      }
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