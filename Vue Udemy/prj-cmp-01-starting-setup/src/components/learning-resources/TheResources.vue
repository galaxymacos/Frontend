<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :mode='storedResButtonMode'>Stored Resources</base-button>
    <base-button @click='setSelectedTab("add-resource")' :mode='addResButtonMode' >Add Resource</base-button>
  </base-card>
  <component :is='selectedTab' @add-resource='addResource'></component>
</template>

<script>
import storedResources from '@/components/learning-resources/StoredResources';
import addResource from '@/components/learning-resources/AddResource';
export default {
  components: {
    storedResources,
    addResource
  },
  computed: {
    storedResButtonMode(){
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode(){
      return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  },
  data(){
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {id: 'official-guide', title: 'Official Guide', description: 'The official Vue.js documentation', link: 'https://vuejs.org'},
        {id: 'google', title: 'Google', description: 'Learn to google', link: 'https://google.com'},
      ]
    }
  },
  provide(){
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource
    }
  },
  methods: {
    setSelectedTab(tab){
      this.selectedTab = tab;
    },
    addResource(resource){
      resource.id = new Date().toISOString()
      this.storedResources.unshift(resource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(resId) {
      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    }
  }
};
</script>

<style scoped>

</style>
