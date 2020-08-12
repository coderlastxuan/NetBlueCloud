<template>
  <div id="app">
    <TopBar />
    <MainContent />
  </div>
</template>

<script>
import TopBar from './components/Topbar.vue';
import MainContent from './components/Content.vue';
export default {
  name: 'app',
  components: {
    TopBar,
    MainContent
  }
};
</script>

<style >

</style>
