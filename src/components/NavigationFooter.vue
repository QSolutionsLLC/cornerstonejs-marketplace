<template>
  <footer>
    <div class="footer-wrapper">
      <div class="footer-nav-container">
        <nav style="width: 100%;">
          <ul class="parent-list">
            <li>
              <ul>
                <li class="title">CornerstoneJS Market</li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Licenses</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">Become an affiliate</a></li>
              </ul>
            </li>
            <li>
              <ul>
                <li class="title">Help</li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Websites</a></li>
                <li><a href="#">Authors</a></li>
                <li><a href="#">Help Center</a></li>
              </ul>
            </li>
            <li>
              <ul>
                <li class="title">Our Community</li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Forums</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
footer {
  background-color: #1a1a1a;
  color: #fff;
  font-size: 13px;
  padding-bottom: 32px;
  padding-top: 32px;
}

.footer-wrapper {
  max-width: 1408px;
  padding: 0 16px;
  margin: 0 auto;
}

.footer-nav-container {
  display: flex;
  padding: 32px 8px 16px;
}

.parent-list {
  display: flex;
  justify-content: space-between;
  list-style: none;
  max-width: 620px;
  width: 100%;
  margin: 0;
  padding: 0;
}

.parent-list ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.parent-list .title {
  font-weight: 700;
  height: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.parent-list ul li {
  padding: 0;
  display: block;
  list-style: none;
  white-space: nowrap;
  margin-bottom: 16px;
}

.parent-list a {
  color: #fff;
  opacity: .5;
  text-decoration: none;
  display: inline-block;
  position: relative;
  transition: opacity .2s cubic-bezier(.39,.575,.565,1);
}

.parent-list a:hover {
  opacity: 1;
  text-decoration: underline;
}
</style>