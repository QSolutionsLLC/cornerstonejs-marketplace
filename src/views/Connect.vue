<template>
  <main>

    <input type="text" v-model="state" />
    <StripeButton :state="state" />
    
  </main>
</template>

<script>
  import StripeButton from '@/components/StripeButton.vue'

  export default {
    components: {
      StripeButton
    },
    data() {
      return {
        state: undefined
      }
    },
  }
</script>

<style scoped>
main {
  width: 100%;
  max-width: 1408px;
  margin: 0 auto;
}

</style>