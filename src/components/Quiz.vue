<template>
  <div class="quiz">
    <Question v-for="item in quiz"
              :key="item.id "
              :question="item.question"
              :answers="item.answers">
    </Question>
  </div>
</template>

<script>
import Question from "@/components/Question";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Quiz",
  components:{
    Question
  },
  props:['quiz'],
  mounted() {

  }
}
</script>

<style scoped>

</style>