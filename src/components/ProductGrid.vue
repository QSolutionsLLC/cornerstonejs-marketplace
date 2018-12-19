<template>
  <section>
    <ul>
      <li v-for="item in [1, 2, 3, 5, 6, 7, 8, 9, 10]" :key="item">
        <ProductCard />
      </li>
    </ul>
  </section>
</template>

<script>
import ProductCard from './ProductCard.vue'
  export default {
    components: {
      ProductCard
    }
  }
</script>

<style scoped>
ul {
  width: 100%;
  display: grid;
  flex-wrap: wrap;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))
}

li {
  flex: 1 0 320px;
}
</style>