<template>
  <header>
    <div class="container">
      <nav class="navbar">
        <!-- logo -->
        <a href="#">
          <img src="../assets/images/logo.png" alt="logo-light" class="logo-light" />
          <img src="../assets/images/logo.png" alt="logo-dark" class="logo-dark" />
        </a>

        <div class="btn-group">
          <button class="theme-btn theme-btn-mobile light" v-on:click="themeColor(theme)">
            <ion-icon name="moon" class="moon"></ion-icon>
            <ion-icon name="sunny" class="sun"></ion-icon>
          </button>

          <button class="nav-menu-btn" v-on:click="toggleClass()">
            <ion-icon name="menu-outline"></ion-icon>
          </button>
        </div>

        <div class="flex-wrapper">
          <ul class="desktop-nav">
            <li>
              <a href="#" class="nav-link">Home</a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/mahmoud-el-kariouny-822719149/" target="_blank"
                class="nav-link">About Me</a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/mahmoud-el-kariouny-822719149/" target="_blank"
                class="nav-link">Contact</a>
            </li>
          </ul>

          <button class="theme-btn theme-btn-desktop light">
            <ion-icon name="moon" class="moon"></ion-icon>
            <ion-icon name="sunny" class="sun"></ion-icon>
          </button>
        </div>

        <div class="mobile-nav" :class="[isActive ? '' : 'active']">
          <button class="nav-close-btn" v-on:click="toggleClass()">
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <div class="wrapper">
            <p class="h3 nav-title">Main Menu</p>

            <ul>
              <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
              </li>

              <li class="nav-item">
                <a href="https://www.linkedin.com/in/mahmoud-el-kariouny-822719149/" target="_blank"
                  class="nav-link">About Me</a>
              </li>

              <li class="nav-item">
                <a href="https://www.linkedin.com/in/mahmoud-el-kariouny-822719149/" target="_blank"
                  class="nav-link">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <p class="h3 nav-title">Topics</p>

            <ul>
              <li class="nav-item">
                <a href="https://dev.to/mahmoudessam/ultimate-guide-to-learn-sql-basics-intermediate-advanced-3e0h"
                  target="_blank" class="nav-link">Database</a>
              </li>

              <li class="nav-item">
                <a href="https://dev.to/mahmoudessam/the-architecture-of-web-browsers-1o1k" target="_blank"
                  class="nav-link">Software Development</a>
              </li>

              <li class="nav-item">
                <a href="https://dev.to/mahmoudessam/introduction-to-http-5hkj" target="_blank" class="nav-link">Web
                  Performance</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    themeColor: Function
  },
  data: function () {
    return {
      isActive: true,
      theme: 'dark-theme',
    }
  },
  methods: {
    toggleClass: function () {
      this.isActive = !this.isActive;
    },
  },
};
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/header-style.css";
</style>
