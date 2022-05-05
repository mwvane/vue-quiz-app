<template>
    <div class="question">
        <h1>{{question}}</h1>
        <Answer v-for="item in answers" :key="item.id" :answer="item"></Answer>
    </div>
</template>

<script>
import Answer from "@/components/Answer";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Question",
  props:{
    question:String,
    answers: Array
  },
  components:{
    Answer
  }
}
</script>

<style scoped>

</style>