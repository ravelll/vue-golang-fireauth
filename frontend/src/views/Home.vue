<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <header-block msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HeaderBlock from "@/components/HeaderBlock.vue";

export default {
  name: "AppHome",
  components: {
    HeaderBlock
  }
};
</script>
