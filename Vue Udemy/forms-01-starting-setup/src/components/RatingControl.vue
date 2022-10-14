<template>
<ul>
  <li :class='{active: modelValue==="poor"}'><button type='button' @click='activate("poor")'>Poor</button></li>
  <li :class='{active: modelValue==="average"}'><button type='button' @click='activate("average")'>Average</button></li>
  <li :class='{active: modelValue==="great"}'><button type='button' @click='activate("great")' >Great</button></li>
</ul>
</template>

<script>
export default {
  props: ['modelValue'],  // modelValue is a special prop name that Vue uses to pass data to a component
  emits: ['update:modelValue'], // update:modelValue is a special event name that Vue uses to pass data from a component
  methods: {
    activate(option){
      this.$emit('update:modelValue', option)
    }
  }
}
</script>

<style scoped>
.active {
  border-color: #f0f;
}
.active button {
  color: #f0f;
}
ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
}
li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

</style>
