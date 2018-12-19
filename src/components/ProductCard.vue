<template>
  <div class="card-wrapper">
    <article class="card">

      <!-- Image -->
      <section class="card-image-wrapper">
        <a href="">
          <img src="https://placehold.it/590x300" />
        </a>
      </section>

      <!-- Content -->
      <section class="card-content-wrapper">
        <div class="content">
          
          <!-- Description -->
          <div class="content-description">
            <h3 class="product-title">
              <a href="#">
                Emo - Health & Medical Mobile Template
              </a>
            </h3>
            <div class="by-line">
              <i>by </i> <a href="#">@dannyrb</a> in <a href="#">Category</a>
            </div>
          </div>

          <!-- Actions -->
          <div class="content-actions">
            <div class="cost">$20</div>
            <div class="buttons">
              <SimpleButton name="Preview" />
              <SimpleButton name="Buy" />
            </div>
          </div>
        </div>
      </section>

    </article>
  </div>
</template>

<script>
import SimpleButton from './SimpleButton.vue'

export default {
  components: {
    SimpleButton
  }
}
</script>

<style scoped>
  .card-wrapper {
    width: 100%;
    height: 100%;
    min-width: 320px;
    display: flex;
  }

  .card {
    color: #999;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 16px #ccc;
    overflow: hidden;
    margin: 16px;

    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

  /*** 
   * Card Image
   */
  .card-image-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  img {
    width: 100%;
    transition-duration: .5s;
    transition-property: left;
    z-index: 1;
  }


  /*** 
   * Card Content
   */
  .card-content-wrapper {
    padding: 16px;
    flex-grow: 1;
  }

  .content-description {
    height: 48px;
  }

  .content-actions {
    display: flex;
    flex-grow: 1;
  }

  .cost {
    flex-grow: 1;
    line-height: 28px;
    color: #4d4d4d;
    font-size: 18px;
    font-weight: 700;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
  }

  .product-title a {
    font-size: 14px;
    color: #4d4d4d;
    max-height: 40px;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-decoration: none;
  }

  .by-line,
  .by-line a {
    color: #999;
    height: 18px;
    font-size: 12px;
    line-height: 18px;
    max-height: 18px;
  }

  a {
    font-weight: bold;
    cursor: pointer;
    position: relative;
    display: inline-block;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>