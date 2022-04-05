<template>
    <b-navbar toggleable="lg" type="dark" variant="primary-cstm" ref="nav" :class="nav_classlist">
      <!-- <b-navbar-brand to="/">E. Errico</b-navbar-brand> -->
      <b-navbar-brand href="#">
        <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
        CSS Ninja
    </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item to="/"><font-awesome-icon icon="home" /></b-nav-item>
          <b-nav-item to="/portfolio">Portafolio</b-nav-item>
          <b-nav-item to="/about">About me</b-nav-item>
          <b-nav-item to="/contact">Contact</b-nav-item>
        </b-navbar-nav>
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">IT</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      nav_classlist: [''],
    }
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        // let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
        if (window.pageYOffset > 400) {
          if(!this.nav_classlist.includes('nav-scrolled')) {
            this.nav_classlist.push('nav-scrolled');
          }
        } else {
          this.nav_classlist.splice('nav-scrolled');
        }
      }
    }
  },
  mounted() {
    this.scroll()
  }
}
// when user scroll down, navbar will be fixed

</script>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    padding: 30px;
    color: #fff;
    -webkit-transition: all .7s;
    transition: all .7s;
    background: rgba(255, 255, 255, 0.00)!important;
}
.navbar-dark .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 0.8);
}
.navbar.nav-scrolled{
  background: rgb(0,234,241)!important;
  background: linear-gradient(90deg, rgba(0,234,241,1) 0%, rgba(0,32,81,1) 90%)!important;
  opacity: 0.9!important;
}
</style>