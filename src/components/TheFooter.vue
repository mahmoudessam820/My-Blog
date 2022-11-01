<template>
  <footer>
    <div class="container">

      <div class="wrapper">

        <a href="#" class="footer-logo">
          <img src="../assets/images/logo-light.svg" alt="DevBlog's Logo" width="150" class="logo-light">
          <img src="../assets/images/logo-dark.svg" alt="DevBlog's Logo" width="150" class="logo-dark">
        </a>

        <p class="footer-text">
          Learn about Web accessibility, Web performance, and Database management.
        </p>

      </div>

      <div class="wrapper">

        <p class="footer-title">Quick Links</p>

        <ul>

          <li>
            <a href="https://www.linkedin.com/in/mahmoud-el-kariouny-822719149/" class="footer-link"
              target="_blank">LinkdIn</a>
          </li>

          <li>
            <a href="https://github.com/mahmoudessam820" class="footer-link" target="_blank">GitHub</a>
          </li>

          <li>
            <a href="https://twitter.com/Mahmoud42275" class="footer-link" target="_blank">Twitter</a>
          </li>

        </ul>

      </div>

      <div class="wrapper">

        <p class="footer-title">Another Blog</p>

        <ul>

          <li>
            <a href="https://dev.to/mahmoudessam/" class="footer-link" target="_blank">Dev.to</a>
          </li>

          <li>
            <a href="https://tealfeed.com/mahmoud_134478" class="footer-link" target="_blank">TealFeed</a>
          </li>

          <li>
            <a href="https://www.medium.com/" class="footer-link" target="_blank">Medium</a>
          </li>

        </ul>

      </div>

    </div>

    <p class="copyright">
      &copy; Copyright 2022 <a href="https://www.linkedin.com/in/mahmoud-el-kariouny-822719149/">Code-Sky</a>
    </p>
  </footer>
</template>

<style scoped>
@import "../assets/css/footer-style.css";
</style>

<script>
export default {
  name: "TheFooter",
};
</script>
