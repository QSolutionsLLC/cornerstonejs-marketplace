<template>
  <header>
    <!-- Mobile -->
    <section class="header-wrapper hide-desktop">
      <RouterLink to="/">
        <img src="https://placehold.it/140x40" />
      </RouterLink>
      <HamburgerButton style="position: relative; margin-left: auto;" />
    </section>

    <!-- Desktop -->
    <section class="header-wrapper show-desktop" style="padding-bottom: 8px;">
      <RouterLink to="/">
        <img src="https://placehold.it/145x48" />
      </RouterLink>
      <nav class="navigation--primary">
        <ul>
          <li><a href="/forums">Forums</a></li>
          <li><a href="/start-selling">Start Selling</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
        </ul>
      </nav>
    </section>
    <section class="header-wrapper show-desktop">
      <nav class="navigation--secondary">
        <ul>
          <li><RouterLink to="/plugins/all">Plugins</RouterLink></li>
          <li><RouterLink to="/learning-materials">Learning Materials</RouterLink></li>
          <li><RouterLink to="/find-experts">Find Experts</RouterLink></li>
        </ul>
      </nav>
    </section>
  </header>
</template>

<script>
import HamburgerButton from './HamburgerButton.vue'

export default {
  components: {
    HamburgerButton,
  }
}
</script>

<style scoped>
header {
  background-color: #262626;
  width: 100%;
}

header .header-wrapper {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1408px;
  padding: 0 16px;
}

/***
 * Navigation
 */
ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  list-style-type: none;
  position: relative;
}

li a {
  color: hsl(0,0%,100%);
  display: inline-block;
  text-decoration: none;
  padding: 16px;
  padding-bottom: 12px;
}

/***
 * Navigation: Primary
 */
nav.navigation--primary {
  margin-left: auto;
  height: 48px;
}

.navigation--primary a {
    display: inline-block;
    margin-left: 4px;
    opacity: 0.6;
    transition: opacity 0.2s cubic-bezier(0.39,0.575,0.565,1);
    vertical-align: middle;
}

.navigation--primary a:hover {
  text-decoration: none;
  opacity: 1;
}


/***
 * Navigation: Secondary
 */
.navigation--secondary a {
  height: 56px;
  line-height: 56px;
  margin-right: 32px;
  margin-bottom: 12px;
  opacity: 0.4; /* 1 - when active */
  position: relative;
}

.navigation--secondary a.router-link-active,
.navigation--secondary a:hover,
.navigation--secondary a:focus {
  opacity: 1;
}

.navigation--secondary a.router-link-active::after {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid whitesmoke;
  border-top: none;
  height: 0;
  width: 0;
  bottom: 0;
  content: ' ';
  left: 50%;
  margin-left: -5px;
  margin-bottom: -12px;
  position: absolute;
}

/***
 * Navigation: Breakpoint(s)
 */
.hide-desktop {
  display: flex;
}

.show-desktop {
  display: none;
}

@media (min-width: 1024px){
  .show-desktop {
    display: flex;
  }
  .hide-desktop {
    display: none;
  }
}
</style>