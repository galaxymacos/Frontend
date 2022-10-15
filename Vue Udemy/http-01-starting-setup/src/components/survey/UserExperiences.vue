<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click='loadExperiences'>Load Submitted Experiences</base-button>
      </div>
      <p v-if='isLoading'>Loading...</p>
      <p v-else-if='!isLoading && error'>
        {{ error }}
      </p>
      <p v-else-if='!isLoading && (!results || results.length === 0)'>
        No results found
      </p>
      <ul v-else-if='!isLoading'>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    }
  },
  components: {
    SurveyResult,
  },
  methods: {
    loadExperiences() {
      this.isLoading = true
      this.error = null
      fetch('https://vue-http-demo-43cfb-default-rtdb.firebaseio.com/surveys.json',{
        headers: {'Content-Type': 'application/json'}
      }).then((response) => {
        this.isLoading = false
        if (response.ok) {
          return response.json()
        }
      }).then((data) => {
        const results = [];
        for(const id in data) {
          results.push({id: id, name: data[id].name, rating: data[id].rating})
        }
        this.results = results;
      })
        .catch(() => {
          this.isLoading = false
          this.error = "Failed to load experiences"
        })
    }
  },
  mounted() {
    this.loadExperiences()
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
