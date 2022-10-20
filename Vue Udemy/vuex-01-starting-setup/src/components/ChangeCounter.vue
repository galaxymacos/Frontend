<template>
<button @click='addOne'>Add one</button>
</template>

<script>
export default {
  name: 'ChangeCounter',
  methods: {
    addOne(){
      this.$store.commit('increment')
    }
  }
};
</script>

<style scoped>

</style>
