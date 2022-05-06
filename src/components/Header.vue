<template>
  <header>
    <ScoreCounter :score="score"></ScoreCounter>
    <h1>{{ title }}</h1>
    <label class="quiz-counter">{{this.passedQuiz}}/{{ this.quizLength }}</label>
  </header>
</template>

<script>
import ScoreCounter from "@/components/ScoreCounter";
import {eventEmitter} from "@/main";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  components: {
    ScoreCounter
  },
  data() {
    return {
      score: 0
    }
  },
  props: {
    title: String,
    quizLength: Number,
    passedQuiz: Number
  },
  mounted() {
    eventEmitter.on('increase-score', () => {
      this.score++;
    })
  }
}
</script>

<style scoped>
header {
  padding-bottom: 10px;
  border-bottom: solid 1px #1a1919;
  box-shadow: 2px 2px #1a1919;
}

.quiz-counter {
  position: absolute;
  right: 17px;
  top: 50px;
  padding: 5px 20px;
  border: solid 1px white;
  border-radius: .2rem;
}
</style>