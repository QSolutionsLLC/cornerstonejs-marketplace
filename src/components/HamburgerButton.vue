<template>
  <div id="wrapper">
    <div class="main-item menu" :class="{close: menuClose}" @click="menuClose=!menuClose">
      <span class="line line01"></span>
      <span class="line line02"></span>
      <span class="line line03"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuClose: false
    }
  },
}
</script>

<style scoped>
#wrapper {
	background-color: hsl(0,0%,30%);
	border-radius: 5px;
	margin: 6px;
  padding: 5px;
	position: relative;
	cursor: pointer;
}

#wrapper:hover {
  background-color: hsl(196,90%,36%);
}

.main-item {
	width: 20px;
	height: 20px;
	position: relative;
}

.line {
	position: absolute;
  left: 0;
	height: 2px;
	width: 100%;
	background: white;
	border-radius: 10px;
	transition: all cubic-bezier(0.25, 0.1, 0.28, 1.54) 0.175s;
}

.line01 {
	top:19%;
}

.line02 {
	top:49%;
}

.line03 {
	top:79%;
}

.menu.close .line01 {
	transform:rotate(45deg);
	top:49%;
}

.menu.close .line02, .menu.close .line03 {
	transform:rotate(-45deg);
	top:49%;
}
</style>