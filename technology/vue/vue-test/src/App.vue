<template>
  <div id="app">
     <m-header></m-header>
     <router-view></router-view>
  </div>
</template>

<script>
  import MHeader from './components/header/header';
  export default {
    components: {
      MHeader
    }

  }
</script>

<style lang="scss">
    * {
        margin:0;padding:0;
    }
</style>
