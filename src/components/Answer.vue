<template>
  <div class="answer">
    <button @click="onClick">{{ answer.answer }}</button>
  </div>
</template>

<script>
import {eventEmitter} from "@/main";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Answer",
  components: {},
  props: {
    answer: Object,
    score: Number
  },
  methods: {
    onClick(e) {
      if (this.answer.isCorrect) {
        e.target.className = "btn-correct"
        eventEmitter.emit('increase-score')
      } else {
        e.target.className = "btn-incorrect"
      }
      setTimeout(()=>{
        this.$emit("onAnswered")
      },300)

    }
  }
}
</script>

<style scoped>
button {
  background: #435c75;
  color: white;
  border: none;
  padding: 10px;
  margin: 1px;
  border-radius: .2rem;
  min-width: 500px;
  transition: .3s;
  box-shadow: 3px 2px #1f2f40;
}

button:hover {
  background: #306191;
}

.btn-correct {
  background: #2d7556;
}

.btn-incorrect {
  background: #9e0800;
}
</style>