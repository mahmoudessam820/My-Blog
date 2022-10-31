<template>
  <main>
    <TheHero />
    <TheMain />
  </main>
</template>

<script>
// @ is an alias to /src
import TheHero from "@/components/TheHero.vue";
import TheMain from "@/components/TheMain.vue";

export default {
  name: "Home",
  components: {
    TheHero,
    TheMain,
  },
};
</script>

<style>

</style>