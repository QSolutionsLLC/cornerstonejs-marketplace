<template>
  <div>

    <ContextHeader
      :title="title"
      :breadcrumbs="[{
        to: '/legal/market',
        text: 'Legal'
      }]" />

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
            <h4 style="margin: 0;">{{ title }}</h4>
          </div>
          <MarkdownRenderer class="box box-content" :markdown="markdown" />
        </div>

      </div>
    </main>

  </div>
</template>

<script>
// Markdown
import MarketTerms from '@/views/legal/MarketTerms.md';
import AuthorTerms from '@/views/legal/AuthorTerms.md';
import AcceptableUsePolicy from '@/views/legal/AcceptableUsePolicy.md';
import PrivacyPolicy from '@/views/legal/PrivacyPolicy.md';

// Components
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import ContextHeader from '@/components/ContextHeader.vue';


export default {
  props: {
    content: {
      type: String,
      default: 'market'
    },
  },
  components: {
    MarkdownRenderer,
    ContextHeader
  },
  computed: {
    markdown() {
      switch(this.content){
        case "author":
          return AuthorTerms;
        case "privacy-policy":
          return PrivacyPolicy;
        case "acceptable-use-policy":
          return AcceptableUsePolicy;
        default:
          return MarketTerms;
      }
    },
    title() {
      switch(this.content){
        case "author":
          return "Author Terms";
        case "privacy-policy":
          return "Privacy Policy";
        case "acceptable-use-policy":
          return "Acceptable Use Policy";
        default:
          return "Cornerstone.js Market Terms";
      }
    }
  },
}
</script>

<style scoped>
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

.sidebar-tabs a.router-link-active {
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