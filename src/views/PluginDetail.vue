<template>
  <div>
    <ContextHeader
      :title="detail.displayName"
      :breadcrumbs="breadcrumbs" 
    />

    <main>
      <div class="grid-container">
        <div class="content">

          <!-- Image -->
          <div class="image-preview-box">
            <a href="#">
              <img :src="listingImageUrl" v-if="listingImageUrl" />
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

          <!-- LICENSE BOX -->
          <div class="box">
            <form class="purchase-form">
              
              <!-- LICENSE -->
              <div class="license-selection">
                <span class="license-type">
                  MIT
                  <!-- <select name="license">
                    <option value="regular" selected="selected">Regular License</option>
                    <option value="extended">Extended License</option>
                  </select> -->
                </span>

                <div class="license-price">
                  $0
                </div>
              </div>

              <div class="info">
                <!-- <p>Use, by you or one client, in a single end product which end users are not charged for. The total price includes the item price and a buyer fee.</p> -->
                <p>The author has chosen to offer this software free of charge and under the permissive MIT license.
                  Please consider buying them a coffee if you find this software useful as a small token of thanks!</p>
                <p><a href="#">License details</a> | <a href="#">Why buy with us</a></p>
              </div>

              <!-- <button type="submit" class="purchase-button">Buy Now</button>-->
              <a :href="detail.htmlUrl" class="btn">
                <icon-base icon-name="github">
                  <icon-github />
                </icon-base> View On GitHub
              </a>
              <BuyCoffeeButton
                style="margin-top: 12px;"
                :author="`@${detail.ownerLogin}`"
                :donationUrl="detail.buyMeACoffee"
                v-if="detail.buyMeACoffee"
              />
            </form>
          </div>

          <!-- AUTHOR BOX -->
          <div class="box">
            
            <div class="media">
              <a :href="detail.ownerHtmlUrl" class="media-item">
                <img :src="detail.ownerAvatar" v-if="detail.ownerAvatar" />
              </a>
              <div class="media-body">
                <h2>
                  <a :href="detail.ownerHtmlUrl">@{{ detail.ownerLogin }}</a>
                </h2>
              </div>
            </div>
            
            <a :href="detail.ownerHtmlUrl" class="btn">
              <icon-base icon-name="github">
                  <icon-github />
                </icon-base> View Portfolio
            </a>
          </div>

          <!-- DETAILS BOX -->
        
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import axios from 'axios';
import pluginImages from '@/utils/pluginImages.js';

import BuyCoffeeButton from '@/components/BuyCoffeeButton.vue';
import ContextHeader from '@/components/ContextHeader.vue';
import IconBase from '@/components/IconBase.vue';
import IconGithub from '@/components/icons/IconGithub.vue';

export default {
  components: {
    BuyCoffeeButton,
    ContextHeader,
    IconBase,
    IconGithub
  },
  props: {
    detail: {
      type: Object,
      required: true 
    },
    content: {
      type: String,
      required: true
    }
  },
  computed: {
    breadcrumbs() {
      if(!this.detail.category) return [];
      
      return [{
        to: `/plugins/${this.detail.category}`,
        text: this.detail.category
      }];
    },
    listingImageUrl() { 
      if(!this.detail.fullName) return undefined;

      return pluginImages.getListing(this.detail.fullName);
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


/***  
 * BOX - LICENSE
 */
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

/***  
 * BOX - AUTHOR
 */

.media {
  display: flex;
  flex-flow: nowrap;
}

.media .media-item {
  position: relative;
  margin-right: 1em;
  flex: 0 auto;
  height: 80px;
  width: 80px;
}

.media .media-item img {
  width: 100%;
}

.media .media-body {
  flex: 1 0;
  align-self: flex-start;
}

.media-body h2 {
  color: #454545;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 16px;
  padding: 0;
}

.media-body a {
  color: #454545;
  text-decoration: none;
}

.media-body a:hover {
  text-decoration: underline;
}

.box a.btn {
  display: block;
  box-shadow: 0 2px 0 #a8a8a8;
  position: relative;
  border: none;
  width: 100%;
  background-color: #e6e6e6;
  color: #666666;
  font-size: 14px;
  padding: 5px 20px;
  line-height: 1.5;
  margin: 8px 0 0 0;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 4px;
}

.box a.btn:hover {
  background-color: #e0e0e0;
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