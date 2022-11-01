<template>
  <div class="hero">
    <div class="container">
      <div class="left">
        <h1 class="h1">
          Hi, I'm <b>Mahmoud El-kariouny</b> <br />Software-Developer
        </h1>

        <p class="h3">Specialized in web-development</p>

        <div class="btn-group">
          <a href="https://www.linkedin.com/in/mahmoud-el-kariouny-822719149/" class="btn btn-primary"
            target="_blank">Contact Me<ion-icon name='call'>
            </ion-icon></a>

          <a href="https://www.linkedin.com/in/mahmoud-el-kariouny-822719149/" class="btn btn-secondary"
            target="_blank">About Me <ion-icon name="code-slash"></ion-icon></a>
        </div>
      </div>

      <div class="right">
        <div class="pattern-bg"></div>
        <div class="img-box">
          <img src="../assets/images/hero.png" alt="Mahmoud el-kariouny" class="hero-img" />
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/css/hero-style.css";
</style>

<script>
export default {
  name: "TheHero",
};
</script>
