<template>
  <li>
    <h2>{{ name }}<span v-if="personIsFavorite === '1'">(Favorite)</span></h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">{{detailsAreVisible ? "Hide" : "Show" }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>


<script>
export default {
  props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  data(){
    return {
      detailsAreVisible: false,
      personIsFavorite: this.isFavorite
    }
  },
  methods: {
    toggleDetails(){
      this.detailsAreVisible = !this.detailsAreVisible
    },
    toggleFavorite(){
      this.personIsFavorite = this.personIsFavorite === "1" ? "0" : "1"
    }
  }
}
</script>

