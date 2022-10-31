<template>
  <div id="app" class="light-theme">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<style>
@import "./assets/css/general.css";
</style>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter.vue"

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>