<template>
  <footer>
    <div class="footer-wrapper">

      <!-- NAV + Quick Stats -->
      <div class="footer-row">

        <!-- NAV -->
        <nav class="nav-container">
          <ul class="parent-list">
            <li>
              <ul>
                <li class="title">CornerstoneJS Market</li>
                <li><RouterLink to="/legal/market">Terms</RouterLink></li>
                <li><a href="#">Licenses</a></li>
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

      <hr class="show-tablet" />
      
      <!-- Quick Stats -->
      <div class="quick-stats">
        <img class="logo" src="https://placehold.it/300x36" />

        <ul>
          <li class="gNZTp">
            <span class="_3zD21">0 </span>
            items sold
          </li>
          <li class="gNZTp">
            <span class="_3zD21">$0 </span>
            community earnings
          </li>
        </ul>
      </div>

      </div>

      <hr />

      <div class="footer-row">
        <div class="copyright">
          <ul>
            <li>
              <RouterLink to="/about">About Cornerstone</RouterLink>
            </li>
            <li>
              <RouterLink to="/legal/privacy-policy">Privacy Policy</RouterLink>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
          
          <small>© 2018 Q Solutions LLC. Trademarks and brands are the property of their respective owners.</small>
        </div>
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

.footer-row {
  display: flex;
  padding: 32px 8px 16px;
}


/***
 * Footer Nav
 */
.nav-container {
  width: 100%;
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

/***
 * Quick Stats
 */
.quick-stats {
  color: gray;
  margin-left: auto;
  padding-left: 32px;
  white-space: nowrap;
}

.quick-stats .logo {
  display: block;
  height: 20px;
  margin-bottom: 16px;
  transform: translateY(-4px);
  width: auto;
  border-style: none;
}

.show-tablet {
  display: none;
}

.quick-stats ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
}

.quick-stats li {
  list-style: none;
  padding: 0;
}

.quick-stats li:not(:first-child) {
  margin-left: 16px;
}

.quick-stats span {
  color: #fff;
  display: block;
  font-size: 16px;
  font-weight: 700;
}

hr {
  background-color: #262626;
  border: none;
  display: block;
  height: 2px;
  margin: 0 auto;
  padding: 0;
  overflow: visible;
}

/***
 * Copyright
 */
.copyright ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.copyright li {
  display: inline-block;
}

.copyright li:not(:first-child) {
  margin-left: 24px;
}

.copyright a {
  color: #fff;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.copyright a:hover {
  text-decoration: underline;
}

.copyright small {
  display: block;
  opacity: .4;
  margin-top: 32px;
}


/***
 * Breakpoint(s)
 */

@media (max-width: 959px){
  .footer-row {
    flex-direction: column-reverse;
    padding-top: 16px;
  }
  
  .nav-container {
    margin-top: 32px;
  }

  .nav-container ul {
    max-width: 600px;
  }

  .show-tablet {
    display: block;
    width: 100%;
    margin: 32px 0 16px 0;
  }

  .quick-stats {
    align-items: center;
    display: flex;
    margin-left: 0;
    padding-left: 0;
  }

  .quick-stats .logo {
    margin-bottom: 0;
  }

  .quick-stats ul {
    margin-left: 24px;
    margin-top: 0;
  }

  .quick-stats li {
    margin-left: 32px;
  }

  .copyright {
    margin-top: 16px;
  }
}

@media (max-width: 639px){
  .quick-stats {
    align-items: flex-start;
    flex-direction: column;
    margin-left: 0;
    margin-right: 0;
  }

  .quick-stats ul {
    margin-left: 0;
    margin-right: auto;
    margin-top: 16px;
  }

  .quick-stats li {
    margin-left: 0;
  }

  .quick-stats li:not(:first-child) {
    margin-left: 32px;
  }
}

@media (max-width: 400px){
  .nav-container > ul {
    flex-direction: column;
  }

  .nav-container > ul > li:not(:first-child)  {
    margin-top: 16px;
  }
}
</style>