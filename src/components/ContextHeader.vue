<template>
  <section class="context-header">
    <div class="generic-content-container">
      
      <nav class="breadcrumbs">
        <RouterLink to="/">Home</RouterLink>
        <template v-for="crumb in breadcrumbs">
          <RouterLink :to="crumb.to" :key="crumb.to">{{ crumb.text }}</RouterLink>
        </template>
      </nav>

      <h1 v-if="title">{{ title }}</h1>

    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: undefined
    },
    breadcrumbs: {
      type: Array,
      default: () => []
    },
  },
}
</script>

<style scoped>
/*** 
 * SHARED - Legal?
 */
 .generic-content-container {
  max-width: 64rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  margin-left: auto;
  margin-right: auto;
}

.generic-content-container::after {
  content: "";
  display: table;
  clear: both;
}

/***
 *
 */
.context-header {
  background: #fafafa;
  border-bottom: 1px solid #e1e8ed;
  padding-top: 8px;
  color: #454545;
}

.breadcrumbs {
  min-height: 20px;
  margin: 0 0 8px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.breadcrumbs a {
  position: relative;
  color: #666666;
  font-size: 12px;
  line-height: 1;
  text-decoration: none;
}

.breadcrumbs a::after {
  font-style: normal;
  font-weight: normal;
  speak: none;
  text-align: center;
  width: 1em;
  content: ">";
  display: inline-block;
  font-size: 9px;
  color: #bababa;
  margin: 0 4px 0 8px;
  cursor: default;
}

.breadcrumbs a:last-child:after
{
  content: '';
}

.breadcrumbs a:hover {
  text-decoration: none;
  color: #454545;
}

h1 {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1em;
}

@media (max-width: 1023px) {
  h1 {
    font-size: 24px;
  }
}
</style>