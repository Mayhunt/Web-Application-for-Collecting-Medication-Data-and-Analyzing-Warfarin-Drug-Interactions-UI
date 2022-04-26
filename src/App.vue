<template>
  <div id="app" style="font-family: 'Kanit'">
    <section class="hero">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head is-white">
        <!-- <NavBar></NavBar> -->
      </div>

      <!-- Hero content: will be in the middle -->
      <section class="hero is-primary is-fullheight-with-navbar">
        <router-view />
      </section>
    </section>
  </div>
</template>

<script>
// import NavBar from './components/NavBar.vue';
// import axios from 'axios';
// import NavBar from './components/NavBar.vue';
import Store from './store/index';

export default {
  name: 'App',
  Store,
  // components: {
  //   NavBar,
  // },
  // async created() {
  //   const response = await axios.get('http://localhost:8080/api/auth/me');
  //   this.$store.dispatch('user', response.data);
  // },
};
</script>

<style>
.hero .navbar {
  background: rgb(121, 87, 213) !important;
}
.button {
  font-family: 'Kanit';
}
.input {
  font-family: 'Kanit';
}
</style>
