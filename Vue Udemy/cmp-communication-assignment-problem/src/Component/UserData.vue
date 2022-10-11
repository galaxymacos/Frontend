<template>
<form @submit.prevent="submitForm">
  <div>
    <label>Username</label>
    <input type="text" v-model="username">
  </div>
    <div>
      <label>Age</label>
      <input type="text" v-model="age">
    </div>
    <button>Submit</button>
</form>
</template>

<script>
export default {
  emits : ['submit-data'],
  data() {
    return {
      username: "",
      age: "",
    }
  },
  methods: {
    submitForm() {
      const userData = {
        username: this.username,
        age: this.age,
      }
      this.$emit("submit-data", userData)
    }
  }
}
</script>

<style scoped>

</style>
