<template>
  <button @click='confirmInput'>Confirm Input</button>
  <button @click='changeSaved = true'>Save Change</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data(){
    return {
      changeSaved: false
    }
  },
  inject: ['users'],
  methods:{
    confirmInput() {
      this.$router.push('/teams')
      // Explorer Back Button
      this.$router.back()
      // Explorer Forward Button
      this.$router.forward()
    },
  },
  beforeRouteEnter(to, from, next){
    console.log("UsersList Cmp BeforeRouteEnter")
    console.log(to, from)
    next()
  },
  beforeRouteLeave(to, from, next){
    console.log('UsersList cmp beforeRouteLeave')
    console.log(to, from)
    if(this.changeSaved){
      next()
    }
    else {
      const userWantsToLeave = confirm('Are you sure? You got unsaved changes!')
      next(userWantsToLeave)
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
