<template>
    <section class="subnavigation-container">
        <div class="subnavigation-wrapper">
            <ul>
                <li><a href="#">Annotation</a></li>
                <li><a href="#">Drag</a></li>
                <li><a href="#">Multi-Touch / Gesture</a></li>
                <li><a href="#">Scroll</a></li>
                <li><a href="#">Overlay</a></li>
                <li><a href="#">Brush</a></li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        
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
</style>