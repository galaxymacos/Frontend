<template>
<transition-group tag='ul' name='user-list'>
  <li v-for='user in users' :key='user' @click='removeUser(user)'>{{ user }}</li>
</transition-group>
  <div>
    <input type='text' v-model='newUser' ref='userNameInput'>
    <button @click='addUser'>Add User</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      newUser: '',
      users: ['Max', 'Manu', 'Julie', 'Angela', 'Michael']
    }
  },
  methods: {
    addUser(){
      this.users.unshift(this.$refs.userNameInput.value)
    },
    removeUser(user){
      const deleteIndex = this.users.indexOf(user)
      if(deleteIndex >= 0){
        this.users.splice(deleteIndex, 1)
      }
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.user-list-move, /* apply transition to moving elements */
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.5s ease;
}

.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.user-list-leave-active {
  position: absolute;
}



</style>
