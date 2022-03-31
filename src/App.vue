<template>
  <div id="app">
    <section class="hero">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head is-white">
        <NavBar></NavBar>
      </div>

      <!-- Hero content: will be in the middle -->
      <section class="hero is-primary is-fullheight-with-navbar">
        <router-view />
      </section>
    </section>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style>
.hero .navbar {
  background: rgb(121, 87, 213) !important;
}
</style>
