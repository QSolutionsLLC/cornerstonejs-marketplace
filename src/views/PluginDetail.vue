<template>
  <main>
    <h1>Item Name - Hello World</h1>

    <div class="grid-container">
      <div class="content-s">

        <!-- Image -->
        <div class="image-preview-box">
          <a href="#">
            <img src="https://placehold.it/590x300" />
          </a>
        </div>

        <!-- Item Description -->
        <section class="item-description" v-html="content" v-if="content"></section>

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
</template>

<script>
import axios from 'axios';

export default {
  props: {
    slug: {
      type: String,
      required: true 
    },
  },
  data() {
    return {
      repositoryFullName: undefined,
      content: undefined
    }
  },
  async created() {
    try {
      const detailResult = await axios.get(`https://f0yz2zh64h.execute-api.us-east-2.amazonaws.com/demo/plugins/${this.slug}`);
      if(detailResult.data){
        console.log(detailResult.data);
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
}
</script>

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

  .content-s {
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