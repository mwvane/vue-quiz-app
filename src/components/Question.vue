<template>
  <div class="question">
    <h2>{{ question }}</h2>
    <Answer @onAnswered="answered" v-for="item in answers" :key="item.id" :answer="item"></Answer>
  </div>
</template>

<script>
import Answer from "@/components/Answer";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Question",
  props: {
    question: String,
    answers: Array
  },
  data() {
    return {
      isAnswered: false,
    }
  },
  components: {
    Answer
  },
  methods: {
    answered() {
      // eslint-disable-next-line no-debugger
      this.isAnswered = true
      this.$emit('onAnswered')
    },
  }
}
</script>

<style scoped>
.question{
  padding-top: 40px;
}
</style>