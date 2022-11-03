<template>
  <div id="app" :class="mode">
    <TheHeader :themeColor="toggleTheme" />
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
  data() {
    return {
      mode: 'light-theme'
    }
  },
  components: {
    TheHeader,
    TheFooter,
  },
  methods: {
    toggleTheme(themeMode) {
      if (this.mode === 'light-theme') {
        this.mode = themeMode;
      } else if (this.mode === 'dark-theme') {
        this.mode = 'light-theme';
      }
    },
  },
};
</script>