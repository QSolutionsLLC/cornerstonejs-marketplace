<template>
  <main class="view-plugins">
    <!-- Basic search filter -->
    <!-- #items, grid or list -->

    <h1 v-if="category">{{ category }}</h1>

    <ProductGrid />

    <!-- Paging -->
  </main>
</template>

<script>
// @ is an alias to /src
import ProductGrid from '@/components/ProductGrid.vue'

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
