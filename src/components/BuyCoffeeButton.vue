<template>
  <div>
    <link href="https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext" rel="stylesheet">
    <a class="bmc-button" target="_blank" :href="`https://www.buymeacoffee.com/${donationUrl}`">
      <img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" :alt="`Buy ${author} a coffee`">
      <span style="margin-left:5px">Buy {{ author }} a coffee</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      default: "the author"
    },
    donationUrl: {
      type: String,
      required: true
    }
  },
}
</script>

<style scoped>
img {
  width: 27px;
  margin-bottom: 1px;
  box-shadow: none;
  border: none;
  vertical-align: middle;
}

.bmc-button{
  line-height: 36px;
  height: 37px;
  text-decoration: none;
  display: block;
  text-align: center;
  color:#ffffff;
  background-color:#FF813F;
  border-radius: 3px;
  border: 1px solid transparent;
  padding: 0px 9px;
  font-size: 17px;
  letter-spacing:-0.08px;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  margin: 0 auto;
  font-family:'Lato', sans-serif;
  box-sizing: border-box;
  transition: 0.3s all linear;
}
  
.bmc-button:hover,
.bmc-button:active,
.bmc-button:focus {
  text-decoration: none;
  box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
  opacity: 0.85;
  color:#ffffff;
}
</style>