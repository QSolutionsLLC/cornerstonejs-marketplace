<template>
  <main class="view-home">

    <section class="search-header-form">
      <h1>High Quality Cornerstone.js Plugins, Videos, and Support</h1>
      <h2>Resources vetted for quality and backed by core Cornerstone.js team members.</h2>
    
      <form role="search" method="get" action="/search">
        <input type="search" placeholder="e.g. MPR" autocomplete="off" aria-label="search" name="term" value="">
        <button class="_1MegD qfSa4" style="border-radius:0 7px 7px 0">
          <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 512 512" style="vertical-align:middle">
            <title>Search</title>
            <g>
              <path d="M507.5 469.3c0 10.5-3.8 19.5-11.5 27.2s-16.7 11.5-27.2 11.5c-10.9 0-20-3.8-27.2-11.5l-103.7-103.4c-36.1 25-76.3 37.5-120.6 37.5-28.8 0-56.4-5.6-82.7-16.8s-49-26.3-68-45.3-34.2-41.7-45.3-68c-11.2-26.3-16.8-53.9-16.8-82.7s5.6-56.4 16.8-82.7 26.3-49 45.3-68 41.7-34.2 68-45.3c26.3-11.2 53.9-16.8 82.7-16.8s56.4 5.6 82.7 16.8c26.3 11.2 49 26.3 68 45.3s34.2 41.7 45.3 68c11.2 26.3 16.8 53.9 16.8 82.7 0 44.3-12.5 84.5-37.5 120.6l103.7 103.7c7.5 7.5 11.2 16.5 11.2 27.2zm-154.8-251.5c0-37.3-13.2-69.2-39.8-95.7-26.5-26.5-58.4-39.8-95.7-39.8s-69.2 13.3-95.7 39.8-39.8 58.4-39.8 95.7 13.2 69.2 39.8 95.7c26.5 26.5 58.4 39.8 95.7 39.8s69.2-13.2 95.7-39.8c26.6-26.5 39.8-58.4 39.8-95.7z"></path>
            </g>
          </svg>
        </button>
      </form>
    </section>

  </main>
</template>

<script>
export default {
  name: 'home',
}
</script>

<style scoped>
.search-header-form {
  padding: 32px 8px;
  background-color: #1fbda5;;
}

h1, h2 {
  color: #fff;
  line-height: 1.5;
  text-align: center;
}

h1 {
  font-size: 36px;
  font-weight: 700;
}

h2 {
  font-size: 20px;
  margin-bottom: 24px;
}

form {
  height: 60px;
  margin: 0 auto 16px auto;
  max-width: 550px;
  display: flex;
  position: relative;
}

input[type="search"] {
  flex: 1 auto;
  border: 0;
  border-radius: 7px 0 0 7px;
  color: gray;
  font-size: 16px;
  line-height: normal;
  height: 100%;
  padding: 10px 5px 10px 20px;
}

form button {
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fff;
  color: #999;
  border-radius: 0 7px 7px 0;
  padding: 5px 1%;
  border: 0;
  cursor: pointer;
}

form button:hover {
  background-color: #f2f2f2;
}

@media (max-width: 831px){
  h1 {
    font-size: 28px;
  }

  h2 {
    font-size: 18px;
  }
}
</style>