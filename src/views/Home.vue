<template>
  <div class="home">
    <!-- <Layout /> -->
    <div class="homebox">
      <router-view />
    </div>
  </div>
</template>

<script>
// import Layout from "@/layouts/index.vue";
export default {
  name: "Home",
  components: {
    // HelloWorld
    // Layout
  }
};
</script>
<style scoped>
.homebox {
  width: 96%;
  margin: 0 auto;
}
</style>
