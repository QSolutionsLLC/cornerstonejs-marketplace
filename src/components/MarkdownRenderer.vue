<template>
  <div v-html="markdownAsHtml" class="marked-container">

  </div>
</template>

<script>
import marked from 'marked';

export default {
  props: {
    markdown: {
      type: String,
      default: ''
    },
  },
  computed: {
    markdownAsHtml() {
      return marked(this.markdown)
    }
  }
}
</script>

<style>
.marked-container {
  color: #666666;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  padding: 0;
}

/**
 * Headers
 */
.marked-container h2 {
  font-size: 24px;
  color: #454545;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 16px;
  padding: 0;
}

.marked-container h3 {
  font-size: 20px;
  color: #454545;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 16px;
  padding: 0;
}

/**
 * Sections
 */
.marked-container p,
.marked-container ol > li {
  margin-bottom: 16px;
}

.marked-container blockquote {
  background-color: whitesmoke;
  border: 1px solid whitesmoke;
  color: #787878;
  font-size: 14px;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px 0;
}

.marked-container blockquote p {
  margin-bottom: 0;
  font-size: inherit;
}

/**
 * Lists
 */
.marked-container ul {
  list-style: disc;
  margin-left: 32px;
  margin-bottom: 16px;
}

.marked-container ol {
  padding-left: 24px;
}

.marked-container ol > li {
  list-style-type: decimal;
}

/**
 * Emphasis
 */
.marked-container strong {
  font-weight: bold;
}

/**
 * Links
 */
.marked-container a {
  color: #0084B4;
  text-decoration: none;
}

.marked-container a:hover {
  color: #00719b;;
  text-decoration: underline;
}
</style>