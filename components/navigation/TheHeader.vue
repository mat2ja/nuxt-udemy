<template>
  <nav class="navbar is-black" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          🛵 wakasaki
        </nuxt-link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div class="navbar-divider" />

      <div id="navMenu" class="navbar-menu is-black">
        <ul class="navbar-end">
          <li class="navbar-item">
            <nuxt-link to="/posts" class="navbar-link">
              Blog
            </nuxt-link>
          </li>
          <li class="navbar-item">
            <nuxt-link to="/about" class="navbar-link">
              About
            </nuxt-link>
          </li>
          <li class="navbar-item">
            <nuxt-link to="/admin" class="navbar-link">
              Admin
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'TheHeader',
  mounted () {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

    // Check if there are any navbar burgers
    if ($navbarBurgers.length) {
      $navbarBurgers.forEach((el) => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  }
}
</script>

<style scoped>
/* .navbar-link:hover,
.navbar-link:active,
.navbar-link.nuxt-link-active {
  color: red;
} */
</style>
