<template>
  <div>
    <Quiz :quiz="quiz">
    </Quiz>
  </div>
</template>

<script>
import Quiz from "@/components/Quiz";

export default {
  name: 'App',
  components: {
    Quiz
  },
  data() {
    return {
      quiz: [
        {
          id: 1,
          question: "Are you ready to learn Vue JS?",
          answers: [
            {
              id: 10,
              answer: 'Yes',
              isCorrect: true
            },
            {
              id: 20,
              answer: 'No',
              isCorrect: false
            },
          ]
        },
        {
          id: 1,
          question: "Are you ready to learn Vue JS?",
          answers: [
            {
              id: 10,
              answer: 'Yes',
              isCorrect: true
            },
            {
              id: 20,
              answer: 'No',
              isCorrect: false
            },
          ]
        },
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
