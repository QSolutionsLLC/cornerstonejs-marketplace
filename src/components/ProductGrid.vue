<template>
  <section>
    <ul>
      <li v-for="item in items" :key="item.id">
        <ProductCard @card-clicked="$emit('card-clicked', $event)" v-bind="item" />
      </li>
    </ul>
  </section>
</template>

<script>
import ProductCard from './ProductCard.vue'
  export default {
    props: {
      items: {
        type: Array,
        default: () => []
      },
    },
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
  grid-template-columns: repeat(auto-fill, minmax(320px, 469px))
}

li {
  flex: 1 0 320px;
}
</style>