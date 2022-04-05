<template>
  <div class="sidemenu">
    <b-navbar-nav type="dark" variant="primary-cstm">
      <b-nav-item to="/">Home <font-awesome-icon :icon="['fa', 'home']"/></b-nav-item>
      <b-nav-item to="/portfolio">Portafolio <font-awesome-icon :icon="['fa', 'book-open']"/></b-nav-item>
      <b-nav-item to="/about">About me <font-awesome-icon :icon="['fa', 'address-card']"/></b-nav-item>
      <b-nav-item to="/contact">Contact <font-awesome-icon :icon="['fa', 'sms']"/></b-nav-item>
    </b-navbar-nav>
  </div>
</template>

<script>
export default {
  name: 'Sidemenu',
}
</script>

<style scoped>
.navbar-nav {
    background: #1c2331!important;
}
.nav-item {
    padding: 5px 0px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.nav-link {
    color: rgba(255, 255, 255, 0.5)!important;
}
.nav-link:hover, .nav-link:focus {
    color: rgba(255, 255, 255, 0.75)!important;
}
.sidemenu{
    border: 1px solid lightgray!important;
    padding: 5px!important;
    border-radius: 10px!important;
    box-shadow: 0px 3px 7px -1px rgb(50 50 50 / 38%)!important;
}
</style>