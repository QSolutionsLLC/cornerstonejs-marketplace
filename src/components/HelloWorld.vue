<template>
  <main>
    <!-- Basic search filter -->
    <!-- #items, grid or list -->

    <ProductGrid />

    <!-- Paging -->
  </main>
</template>

<script>
import ProductGrid from './ProductGrid.vue'

export default {
  name: 'HelloWorld',
  components: {
    ProductGrid,
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
