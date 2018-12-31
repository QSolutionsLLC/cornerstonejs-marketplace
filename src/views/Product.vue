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
        <section class="item-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum sed urna eget rutrum. Suspendisse sed lacus elit. Ut varius risus nunc, sit amet ultrices purus aliquet ac. Pellentesque facilisis elementum eros, vitae pulvinar neque tincidunt a. Duis tempor rhoncus fringilla. Fusce eget egestas tortor, in sagittis orci. Curabitur volutpat dui hendrerit hendrerit posuere. Quisque bibendum nunc at auctor molestie. Vestibulum blandit lacus ut rutrum laoreet. Pellentesque convallis vel mauris eu rutrum. Vivamus pellentesque massa in viverra tempor. Nunc ullamcorper imperdiet odio ut ultricies. Maecenas eget justo arcu. Sed vehicula magna ultricies commodo semper. Donec et libero semper, iaculis tellus ut, sollicitudin ex.

          Morbi ac consequat ante. In ac nulla eget neque posuere vulputate nec nec lacus. Ut feugiat ipsum in tortor sodales condimentum. Nam in felis enim. Duis vulputate libero at volutpat blandit. Proin tortor odio, mattis ac maximus ut, ultricies sed elit. Nam finibus metus in ipsum convallis, sed venenatis odio vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis non nulla ac nisi pulvinar malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam diam urna, feugiat efficitur gravida consectetur, tristique id tellus. Quisque nec ex ultrices, fringilla tellus in, gravida purus. Sed laoreet at arcu quis mattis. Vestibulum mattis convallis tortor, non tincidunt odio mollis sed.

          Phasellus sodales sem vel interdum suscipit. Integer a pretium ligula, sed feugiat leo. Integer aliquet enim quis augue hendrerit mollis. Donec id lorem ante. Vestibulum sapien turpis, porta quis faucibus aliquam, fringilla dignissim libero. Pellentesque nec elementum felis. Nullam ornare condimentum viverra. Proin at augue nec ex sollicitudin imperdiet vel in velit. Pellentesque fermentum ipsum et sollicitudin pretium. Quisque ligula sapien, interdum ut lectus sed, posuere ultricies neque. Sed sit amet tempus ante. Morbi in libero ut metus pulvinar aliquet imperdiet sit amet ante.
        </section>

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
  export default {
      
  }
export default {
  props: {
    slug: {
      type: String,
      required: true 
    },
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