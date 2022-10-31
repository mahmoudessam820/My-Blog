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
            <a href="#" class="footer-link">Advertise with us</a>
          </li>

          <li>
            <a href="#" class="footer-link">About Us</a>
          </li>

          <li>
            <a href="#" class="footer-link">Contact Us</a>
          </li>

        </ul>

      </div>

      <div class="wrapper">

        <p class="footer-title">Legal Stuff</p>

        <ul>

          <li>
            <a href="#" class="footer-link">Privacy Notice</a>
          </li>

          <li>
            <a href="#" class="footer-link">Cookie Policy</a>
          </li>

          <li>
            <a href="#" class="footer-link">Terms Of Use</a>
          </li>

        </ul>

      </div>

    </div>

    <p class="copyright">
      &copy; Copyright 2022 <a href="#">Code-Sky</a>
    </p>
  </footer>
</template>

<style scoped>
footer {
  background: var(--background-primary);
}

footer .container {
  padding: var(--py) 15px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

footer .wrapper {
  text-align: center;
}

.footer-logo {
  margin-bottom: 10px;
}

.footer-text {
  color: var(--foreground-secondary);
  max-width: 300px;
  margin-inline: auto;
  margin: auto;
  /* fallback for margin-inline */
}

.footer-title {
  color: var(--foreground-primary);
  font-weight: 700;
  margin-bottom: 0.4rem;
}

.footer-link {
  color: var(--foreground-secondary);
}

.footer-link:hover {
  color: var(--accent);
}

.copyright {
  color: var(--foreground-secondary);
  font-size: var(--fs-4);
  text-align: center;
  padding: 1rem;
  border-top: 1px solid var(--action-primary);
}

.copyright a {
  color: var(--accent);
  font-weight: 500;
}

.copyright a:hover {
  text-decoration: underline;
}

/**
 * responsive for larger than 650px screen
*/

@media (min-width: 650px) {
  footer .container {
    padding: var(--py) 30px;
    grid-template-columns: 2fr 1fr 1fr;
  }

  footer .wrapper {
    text-align: left;
  }

  .footer-text {
    margin: 0;
  }
}


/**
 * responsive for larger than 1024px screen
 */

@media (min-width: 1024px) {

  .footer-title {
    font-size: 1.125rem;
  }

  .footer-link {
    margin-bottom: 0.3rem;
  }


}
</style>

<script>
export default {
  name: "TheFooter",
};
</script>
