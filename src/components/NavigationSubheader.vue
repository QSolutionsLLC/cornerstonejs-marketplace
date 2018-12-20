<template>
  <section class="subnavigation-container show-desktop">
    <div class="subnavigation-wrapper" v-if="isVisible">
      <ul>
        <li><RouterLink to="/plugins">All Items</RouterLink></li>
        <li><RouterLink to="/plugins/annotation-tools">Annotation</RouterLink></li>
        <li><RouterLink to="/plugins/drag-tools">Drag</RouterLink></li>
        <li><RouterLink to="/plugins/multi-touch-gesture-tools">Multi-Touch / Gesture</RouterLink></li>
        <li><RouterLink to="/plugins/scroll-tools">Scroll</RouterLink></li>
        <li><RouterLink to="/plugins/overlay-tools">Overlay</RouterLink></li>
        <li><RouterLink to="/plugins/brush-tools">Brush</RouterLink></li>
      </ul>
    </div>
  </section>
</template>

<script>
    export default {
        computed: {
          isVisible() {
            return this.$route.name === 'plugins'
          }
        },
    }
</script>

<style scoped>
.subnavigation-container {
  width: 100%;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e1e8ed;
}

.subnavigation-wrapper {
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 1408px;
  padding: 0 16px;
  height: 48px;
}

ul {
  font-size: 12px;
  float: left;
  list-style: none;
  padding: 7px 0 0;
  margin: 0;
}

li {
  float: left;
  position: relative;
}

a {
  border-radius: 4px;
  color: #666;
  display: block;
  padding: 0 10px;
  white-space: nowrap;
  line-height: 35px;
  height: 35px;
  text-decoration: none;
}

a:hover {
  background-color: #999;
  color: #fff;
}

/***
 * Navigation: Breakpoint(s)
 */
.show-desktop {
  display: none;
}

@media (min-width: 1024px){
  .show-desktop {
    display: flex;
  }
}
</style>