<template>
  <div id="app">
    
    <NavigationHeader />
    <NavigationSubheader />

    <RouterView style="min-height: 500px;" />

    <NavigationFooter />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import NavigationHeader from './components/NavigationHeader.vue';
import NavigationSubheader from './components/NavigationSubheader.vue';
import NavigationFooter from './components/NavigationFooter.vue';

export default {
  components: {
    NavigationHeader,
    NavigationSubheader,
    NavigationFooter
  },
  created() {
    this.getList();
  },
  methods: {
    ...mapActions(['getList'])
  },
}
</script>

<style lang="scss">
/* RESET */
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* BORDER BOX FTW */
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

/* STYLES */
// Style loading bar between pages.
// https://github.com/rstacruz/nprogress
@import '~nprogress/nprogress.css';

#nprogress .bar {
  background: #FF813F;
}

#app {
  font-family: -apple-system,BlinkMacSystemFont,segoe ui,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


/* UTILITY */
@media (min-width: 1024px){

}
</style>
