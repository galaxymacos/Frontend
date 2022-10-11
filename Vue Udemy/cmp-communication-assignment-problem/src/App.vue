<template>
<user-data @submit-data="submitForm"></user-data>
<active-user v-if="username" :username="username" :age="age"></active-user>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      username: "",
      age: 0,
    }
  },
  methods:{
    submitForm(userdata) {
      this.username = userdata.username;
      this.age = +userdata.age;
    }
  }
}
</script>

<style scoped>

</style>
