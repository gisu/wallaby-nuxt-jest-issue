<template>
  <div>
    <div v-if="statusMessage"
         class="flex items-center headerStatus"
         v-text="statusMessage">
    </div>
    This is a test
    <svg v-html="require('~/assets/vector/icon-confirm.svg')"></svg>
  </div>

</template>

<script>
  /**
   * Displays different status messages
   */
  export default {
    name: 'testcomp',
    props: {
      /**
       * The Statusmessage
       */
      statusMessage: {
        required: false,
        type: String
      }
    }
  };
</script>

<style scoped lang="scss">
  .headerStatus {
    height: 40px;
    /*border-color: config('colors.gray');*/
    border-style: solid;
    border-width: 1px 0 0 0;
    margin-right: -1.2rem;
    margin-left: -1.2rem;
    padding-left: 1.2rem;
    padding-right: 1.2rem;

    @media screen and (min-width: 768px) {
      border-width: 0 0 0 1px;
      height: 100%;
      padding-left: 20px;
      padding-right: 20px;
      margin-left: 20px;
      margin-right: 0;
    }
  }
</style>
