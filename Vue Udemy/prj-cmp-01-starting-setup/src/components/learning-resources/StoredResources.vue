<template>
  <ul>
    <learning-resource
      v-for='res in resources' :key='res.id'
      :title='res.title' :description='res.description' :link='res.link'
    ></learning-resource>
  </ul>
</template>

<script>
import learningResource from '@/components/learning-resources/LearningResource';
export default {
  inject: ['resources'],
  components: {
    learningResource
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
