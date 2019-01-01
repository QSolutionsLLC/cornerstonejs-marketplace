<template>
  <main>
    <!-- Basic search filter -->
    <!-- #items, grid or list -->

    <h1 v-if="category">{{ category }}</h1>

    <ProductGrid :items="list" @card-clicked="handleCardClicked" />

    <!-- Paging -->
  </main>
</template>

<script>
import { mapState } from 'vuex'; 
import ProductGrid from '@/components/ProductGrid.vue';

export default {
  name: 'plugin-list',
  components: {
    ProductGrid
  },
  props: {
    category: {
      type: String,
      default: undefined
    },
  },
  computed: {
    ...mapState({
      list: state => state.pluginVm.list
    })
  },
  methods: {
    handleCardClicked(selectedId) {
      const clickedItem = this.list.find(item => item.id === selectedId);
      this.$router.push({ name: 'plugin-detail', params: { slug: clickedItem.slug } })
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
