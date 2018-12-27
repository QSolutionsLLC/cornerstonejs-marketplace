<template>
  <div>

    <section class="context-header">
      <div class="generic-content-container">
        
        <nav class="breadcrumbs">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/legal/market">Legal</RouterLink>
        </nav>

        <h1>Cornerstone.js Market Terms</h1>

      </div>
    </section>

    <main>
      <div class="generic-content-container">

        <div class="left-sidebar">
          <ul class="sidebar-tabs">
            <li><h4>Legal</h4></li>
            <li>
              <RouterLink to="/legal/market">Cornerstone.js Market Terms</RouterLink>
            </li>
            <li>
              <RouterLink to="/legal/author">Author Terms</RouterLink>
            </li>
            <li>
              <RouterLink to="/legal/acceptable-use-policy">Acceptable Use Policy</RouterLink>
            </li>
            <li>
              <RouterLink to="/legal/privacy-policy">Privacy Policy</RouterLink>
            </li>
          </ul>
        </div>

        <div class="main-content">
          <div class="box box-header">
            <h4 style="margin: 0;">Cornerstone.js Market Terms</h4>
          </div>
          <MarkdownRenderer class="box box-content" :markdown="markdown" />
        </div>

      </div>
    </main>

  </div>
</template>

<script>
// Markdown
import MarketTerms from '@/components/legal/MarketTerms.md'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'

export default {
  components: {
    MarkdownRenderer
  },
  computed: {
    markdown() {
      return MarketTerms;
    }
  },
}
</script>

<style scoped>
.context-header {
  background: #fafafa;
  border-bottom: 1px solid #e1e8ed;
  padding-top: 8px;
  color: #454545;
}

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

.breadcrumbs {
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

main {
  min-height: 250px;
  height: 100%;
  padding: 16px 0 32px;
  position: relative;
}

.left-sidebar {
  margin-bottom: 16px;
}

h4 {
  font-size: 18px;
  color: #454545;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 16px;
}

.sidebar-tabs {
  width: initial;
  background: whitesmoke;
  border: 1px solid #e1e8ed;
  padding-bottom: 20px;
  border-radius: 4px;
  list-style: none;
}

.sidebar-tabs > li:first-child {
  padding: 20px 20px 0;
}

.sidebar-tabs a {
  color: #666666;
  background: none;
  border-bottom: none;
  font-size: 14px;
  padding: 5px 20px;
  margin: 0;
  line-height: 20px;
  transition: none;
  cursor: pointer;
  display: block;
  text-decoration: none;
}

.sidebar-tabs a:hover {
  color: #262626;
  background: #ededed;
}

.sidebar-tabs a.router-link-exact-active {
  color: #72BF40;
  font-weight: bold;
  border-left: 3px solid #72BF40;
  padding-left: 16px;
}

.box {
  background-color: white;
  border: 1px solid #e1e8ed;
  color: #666666;
  word-break: break-word;
}

.box-header { 
  padding: 16px;
  border-radius: 4px 4px 0 0;
}

.box-content {
  padding: 16px;
  border-radius: 0 0 4px 4px;
}


@media (min-width: 1024px) {
  .left-sidebar {
    width: 27%;
    float: left;
    margin-right: 2%;
  }
  .main-content {
    float: right;
    margin-right: 0;
  }

  .main-content {
    width: 71%;
  }
}
</style>