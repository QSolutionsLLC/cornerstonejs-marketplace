<template>
  <a href="#">
    {{ name }}
  </a>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true 
    },
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
</style>