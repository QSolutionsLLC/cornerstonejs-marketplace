<template>
  <div>
    <ContextHeader
      :title="displayName"
      :breadcrumbs="breadcrumbs" 
    />

    <main>
      <div class="grid-container">
        <div class="content">

          <!-- Image -->
          <div class="image-preview-box">
            <a href="#">
              <img :src="listingImageUrl" />
            </a>
          </div>

          <!-- Item Description -->
          <section
            class="item-description user-html"
            v-html="content"
            v-if="content"
          ></section>

        </div>

        <div class="sidebar-right">
          <div class="box">
            <form class="purchase-form">
              
              <!-- LICENSE -->
              <div class="license-selection">
                <span class="license-type">
                  <select name="liccense">
                    <option value="regular" selected="selected">Regular License</option>
                    <option value="extended">Extended License</option>
                  </select>
                </span>

                <div class="license-price">
                  $17
                </div>
              </div>

              <div class="info">
                <p>Use, by you or one client, in a single end product which end users are not charged for. The total price includes the item price and a buyer fee.</p>
                <p><a href="#">License details</a> | <a href="#">Why buy with Cornerstone.js Marketplace</a></p>
              </div>

              <button type="submit" class="purchase-button">Buy Now</button>
            </form>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import axios from 'axios';
import pluginImages from '@/utils/pluginImages.js';

import ContextHeader from '@/components/ContextHeader.vue';

export default {
  components: {
    ContextHeader
  },
  props: {
    slug: {
      type: String,
      required: true 
    },
  },
  data() {
    return {
      displayName: undefined,
      category: undefined,
      repositoryFullName: undefined,
      content: undefined
    }
  },
  async created() {
    try {
      const detailResult = await axios.get(`https://f0yz2zh64h.execute-api.us-east-2.amazonaws.com/demo/plugins/${this.slug}`);
      if(detailResult.data){
        console.log(detailResult.data);
        this.category = detailResult.data.category;
        this.displayName = detailResult.data.displayName;
        this.repositoryFullName = detailResult.data.fullName;
        this.fetchProductContent();
      }
    }catch(err){
      console.warn(err);
    }
  },
  methods: {
    async fetchProductContent() {
      const awsBucket = 'csmarket-listing-assets';
      const contentUrl = `https://s3.us-east-2.amazonaws.com/${awsBucket}/${this.repositoryFullName}/index.html`;

      const contentResult = await axios.get(contentUrl);
      if(contentResult.data){
        this.content = contentResult.data;
      }
    }
  },
  computed: {
    breadcrumbs() {
      if(!this.category) return []
      
      return [{
        to: `/plugins/${this.category}`,
        text: this.category
      }];
    },
    listingImageUrl() { 
      return pluginImages.getListing(this.repositoryFullName);
    },
  },
}
</script>

<style>
/***
 * USER HTML
 */
.user-html {
  line-height: 1.5;
}

.user-html h1 {
  border-bottom: 1px solid #d4d4d4;
  font-size: 26px;
  line-height: 33px;
}

.user-html h2 {
  border-bottom: 1px solid #d4d4d4;
  font-size: 24px;
  line-height: 30px;
}

.user-html h3 {
  border-bottom: 1px solid #d4d4d4;
  font-size: 22px;
  line-height: 27px;
}

.user-html h4 {
  font-size: 20px;
  line-height: 24px;
}

.user-html h5 {
  font-size: 18px;
  line-height: 21px;
}

.user-html h6 {
  font-size: 18px;
  line-height: 18px;
}

.user-html h1,
.user-html h2,
.user-html h3,
.user-html h4,
.user-html h5,
.user-html h6 {
  color: #545454;
  font-weight: 400;
  margin: 30px 0 20px;
  padding: 0 0 10px 0;
}

.user-html table {
  margin-bottom: 20px;
  max-width: 100%;
  overflow: auto;
}

.user-html ul,
.user-html ol {
  padding-left: 35px;
  margin-bottom: 20px;
}

.user-html ul {
  list-style: disc;
}

.user-html p {
  margin-bottom: 20px;
  padding: 0;
}

.user-html blockquote {
  border-left: 1px solid #454545;
  color: #777;
  font-style: italic;
  margin: 0 0 20px 0;
  padding-left: 20px;
}

.user-html strong,
.user-html b {
  font-weight: bold;
}

.user-html pre {
  margin-bottom: 20px;
  background-color: whitesmoke;
  background-image: linear-gradient(#f5f5f5 50%, #e6e6e6 50%);
  background-size: 38px 38px;
  border: 1px solid #d4d4d4;
  display: block;
  line-height: 19px;
  overflow: visible;
  overflow-y: hidden;
  padding: 0 0 0 4px;

  color: #333333;
  font: 11px Monaco, "Courier New", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", monospace;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.user-html a {
  color: #0084B4;
  text-decoration: none;
}

.user-html a:hover {
  color: #00719b;
  text-decoration: underline;
}
</style>

<style scoped>
main {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 64rem;
  min-height: 250px;
  margin: 0 auto;
  padding: 16px 0 32px;
}

h1 {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 16px;
  padding: 0;
  padding-left: 0.625rem;
}

.grid-container {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  margin: 0 auto;
}

.grid-container::after {
  content: "";
  display: table;
  clear: both;
}

.image-preview-box {
  background-color: #fafafa;
  color: #666666;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #e1e8ed;
  min-height: 245px;
  padding: 12px;
  position: relative;
  text-align: center;
}

.image-preview-box > a {
  position: relative;
  display: inline-block;
  max-width: 100%;
}

.image-preview-box img {
  display: block;
  max-width: 100%;
  margin: 0 auto;
}

.item-description {
  margin-bottom: 20px;
}


/***  
 * BOX
 */
.box {
  background-color: #fafafa;
  color: #666666;
  margin-bottom: 20px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #e1e8ed;
}

.license-selection {
  display: table;
  width: 100%;
  line-height: 1;
  margin-bottom: 8px;
}

.license-type {
  display: table-cell;
  height: 40px;
  vertical-align: middle;
  padding-right: 10px;
  font-size: 16px;
  font-weight: bold;
}

.license-type select {
  font-size: 13px;
  font-weight: normal;
  outline: 0;
  width: auto;
  height: 30px;
  padding: 5px 8px;
  border-radius: 4px;
  background: white;
  color: #333333;
  border: 1px solid #bababa;
}

.license-price {
  display: table-cell;
  vertical-align: middle;
  color: #454545;
  text-align: right;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 16px;
  padding: 0;
  font-size: 36px;
}

.info {
  clear: both;
  margin-bottom: 8px;
}

.info p {
  font-size: 14px;
  color: #666666;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 16px;
  padding: 0;
}

.info a {
  color: #0084B4;
}

.info a:hover {
  color: #00719b;
}

.purchase-button {
  box-sizing: border-box;
  background-color: gray;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  display: inline-block;
  line-height: 1.5;
  margin: 0;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  padding: 10px 20px;
  width: 100%;
  font-weight: bold;
}

.purchase-button:hover {
  background-color: #0084B4;
  text-decoration: none;
  outline: none;
}

@media (min-width: 1024px) {
  main {
    min-height: 540px;
  }

  .content {
    float: left;
    width: 616px;
  }

  .sidebar-right {
    float: right;
    margin-left: 18px;
    margin-right: 0;
    width: 350px;
  }
}

@media (min-width: 569px) {
  .box {
    padding: 15px;
  }
}
</style>