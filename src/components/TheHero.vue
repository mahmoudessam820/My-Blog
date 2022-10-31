<template>
  <div class="hero">
    <div class="container">
      <div class="left">
        <h1 class="h1">
          Hi, I'm <b>Mahmoud El-kariouny</b> <br />Software-Developer
        </h1>

        <p class="h3">Specialized in web-development</p>

        <div class="btn-group">
          <a href="https://www.linkedin.com" class="btn btn-primary" target="_blank">Contact Me <ion-icon
              name="code-slash"></ion-icon></a>

          <a href="https://drive.google.com/file/d/1Q1UUr9EIy2DEyHmmDC_VU0qeqq3npICM/view" class="btn btn-secondary"
            target="_blank">Download CV <ion-icon name="cloud-download-outline"></ion-icon></a>
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
.hero {
  background: var(--background-primary);
  padding-top: 2rem;
  padding-bottom: var(--py);
  text-align: center;
}

.hero .h1 {
  /* margin-bottom: 1rem; */
  line-height: 1.6;
}

.hero b {
  color: var(--accent);
  font-weight: inherit;
}

.hero .h3 {
  color: var(--foreground-secondary);
  margin-bottom: 2rem;
}

.hero .btn-group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  text-align: center;
}

.hero .right {
  display: none;
}
</style>

<script>
export default {
  name: "TheHero",
};
</script>
