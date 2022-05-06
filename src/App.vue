<template>
  <div>
    <Header
        :title="title"
        :quiz-length="this.quiz.length"
        :passed-quiz="this.AlreadyPassedQuiz"
    ></Header>
    <Quiz :quiz="quiz" @passed-quiz="passedQuiz">
    </Quiz>
  </div>
</template>

<script>
import Quiz from "@/components/Quiz";
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {
    Quiz,
    Header
  },
  data() {
    return {
      title: "Quiz app",
      AlreadyPassedQuiz: 0,
    }
  },
  created() {
    fetch('./dbQuiz.json')
        .then(response => response.json())
        .then(obj => console.log(obj))
  },
  props: {
    quiz: Array
  },
  methods: {
    passedQuiz() {
      this.AlreadyPassedQuiz++
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
  color: white;
  margin-top: 15px;
}

body {
  background: #292727;
}
</style>
