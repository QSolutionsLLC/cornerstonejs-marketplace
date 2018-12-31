<template>
  <a href="#" :class="type">
    <slot>
      {{ name }}
    </slot>
  </a>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'No button name'
    },
    type: {
      type: String,
      default: 'default'
    }
  },
}
</script>

<style scoped>
a {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 4px 0 0;
  flex: 1;
  text-decoration: none;
  padding: 7px 16px;
  text-align: center;
  cursor: pointer;
  color: #666;
  line-height: 1.5;
  font-size: 12px;
  font-weight: 700;
  border-radius: 2px;
  border: 1px solid #ccc;
  background-color: transparent;
  -webkit-font-smoothing: antialiased;
}

a:hover {
  text-decoration: none;
  outline-width: none;
}

/*** 
 * Default
 */
a.default:hover {
  color: #fff;
  border-color: #ccc;
  background-color: #ccc;
}

/*** 
 * Primary
 */
a.primary {
  color: #79b530;
  border-color: #79b530;
}

a.primary:hover {
  color: #fff;
  background-color: #79b530;
  border-color: #79b530;
}

/***  
 * Primary Solid
 */
a.primary-solid {
  color: #fff;
  background-color: #79b530;
  border-color: #79b530;
}

a.primary-solid:hover {
  color: #fff;
  background-color: #7bc71e;
  border-color: #7bc71e;
}
</style>