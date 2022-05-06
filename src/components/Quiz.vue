<template>
  <div class="quiz">
    <Question @onAnswered="nextQuiz"
              :question="currentQuiz.question"
              :answers="currentQuiz.answers">
    </Question>
  </div>
</template>

<script>
import Question from "@/components/Question";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Quiz",
  components: {
    Question,
  },
  props: ['quiz'],
  data() {
    return {
      score: 0,
      currentQuiz: this.quiz[0],
      currentQuizIndex: 0
    }
  },
  methods: {
    nextQuiz() {
      if (this.currentQuizIndex < this.quiz.length - 1) {
        this.currentQuiz = this.quiz[++this.currentQuizIndex]
        this.$emit("passed-quiz",this.currentQuizIndex)
      }
    }
  }

}
</script>

<style scoped>

</style>