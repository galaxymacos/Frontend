<template>
  <h2>New Friend</h2>
  <form @submit.prevent="addFriend">
    <div>
      <label>Name</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="phone">
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="email">
    </div>
    <button type="submit">Add Friend</button>
  </form>
</template>

<script>
export default {
  emits: ['add-friend'],
  data(){
    return {
      name: '',
      phone: '',
      email: '',
    }
  },
  methods:{
    addFriend(){
      const friend = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        isFavorite: false
      }
      this.$emit('add-friend', friend)
    }
  },
}
</script>

<style scoped>

</style>
