<template>
  <section class="hero is-white is-fullheight">
    <div style="background-color: rgb(121, 87, 213)">
      <section>
        <b-image
          :src="require('@/assets/logo2.jpeg')"
          alt="The Buefy Logo"
          ratio="5by3"
          :rounded="rounded"
        >
        </b-image>
      </section>
      <section
        class="hero is-white"
        style="border-radius: 60px 60px 0 0; margin-top: 1rem; padding: 1rem"
      >
        <div>
          <div class="content is-medium">
            <!-- <br> -->
            <h1 style="margin-top: 0; text-align: center; margin-bottom: 0.25rem">
              Create Account
            </h1>
            <!-- <h6 style="font-size:1rem; text-align:center">Welcome back you've been missed</h6> -->
          </div>
          <form class="box">
            <b-field label="Username">
              <b-input
                v-model="username"
                placeholder="Username"
                type="user"
                icon="account-circle"
                icon-clickable
                rounded
                @icon-click="userIconClick"
              >
              </b-input>
            </b-field>
            <b-field label="Password">
              <b-input
                v-model="password"
                placeholder="Password"
                type="password"
                icon="lock-question"
                icon-clickable
                password-reveal
                rounded
                @icon-click="passwordIconClick"
              >
              </b-input>
            </b-field>
            <!-- <b-field label="ConfirmPassword">
              <b-input
                placeholder="Confirm Password"
                type="password"
                icon="lock-check"
                icon-clickable
                password-reveal
                rounded
                @icon-click="passwordIconClick"
              >
              </b-input> -->
            <!-- </b-field> -->
            <!-- <div class="buttons" style="justify-content: right"><b-button type="is-text" size="is-small">Forget Password</b-button></div> -->
            <div class="fixedbuttons" style="justify-content: center; margin-top: 2rem">
              <router-link to="/register2"
                ><b-button @click="sendData" type="is-primary" size="is-medium" rounded expanded>
                  ถัดไป</b-button
                ></router-link
              >

              <!-- <button class="button is-text">Register</button> -->
            </div>
          </form>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import Store from '../../store/index';

export default {
  name: 'RegisterPage',
  Store,
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    sendData() {
      this.$store.commit('setUsername', this.username);
      this.$store.commit('setPassword', this.password);
    },
  },
};
</script>

<style></style>
