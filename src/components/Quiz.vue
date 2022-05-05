<template>
  <div class="quiz">
    <ScoreCounter :score="score"></ScoreCounter>
    <Question v-for="item in quiz"
              :key="item.id "
              :question="item.question"
              :answers="item.answers">
    </Question>
  </div>
</template>

<script>
import Question from "@/components/Question";
import ScoreCounter from "@/components/ScoreCounter";
import {eventEmitter} from "@/main";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Quiz",
  components:{
    Question,
    ScoreCounter
  },
  props:['quiz'],
  data(){
    return{
      score:0
    }
  },
  mounted() {
    eventEmitter.on('increase-score', () => {
      this.score++;
    })
  }
}
</script>

<style scoped>

</style>