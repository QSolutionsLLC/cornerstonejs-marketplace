<template>
  <main class="view-plugins">
    <!-- Basic search filter -->
    <!-- #items, grid or list -->

    <h1 v-if="category">{{ category }}</h1>

    <ProductGrid :items="list" @card-clicked="handleCardClicked" />

    <!-- Paging -->
  </main>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import ProductGrid from '@/components/ProductGrid.vue';

export default {
  name: 'plugins',
  components: {
    ProductGrid
  },
  props: {
    category: {
      type: String,
      default: undefined
    },
  },
  data() {
    return {
      list: []
    }
  },
  // We can store this in VUEX, or a higher level component?
  // No need to kill this data every time the route dies
  // Honestly, we could probably cache it for 12 to 24 hours with Service Worker
  async created(){
    try {
      const plugins = await axios.get('https://f0yz2zh64h.execute-api.us-east-2.amazonaws.com/demo/plugins');
      if(plugins.data){
        this.list = plugins.data;
        console.log(this.list)
      }
    }catch(err){
      console.warn(err);
    }
  },
  methods: {
    handleCardClicked(selectedId) {
      const clickedItem = this.list.find(item => item.id === selectedId);
      this.$router.push({ name: 'product', params: { name: clickedItem.slug } })
    }
  },
}
</script>

<style scoped>
main {
  width: 100%;
  max-width: 1408px;
  margin: 0 auto;
}

section {
  display: flex;
  width: 100%;
}
</style>
