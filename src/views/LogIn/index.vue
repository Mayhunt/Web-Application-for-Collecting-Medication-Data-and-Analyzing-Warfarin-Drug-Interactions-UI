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
            <h1 style="margin-top: 0; text-align: center; margin-bottom: 0.25rem">Hello Again!</h1>
            <h6 style="font-size: 1rem; text-align: center">Welcome back you've been missed</h6>
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
                rounded
                password-reveal
                @icon-click="passwordIconClick"
              >
              </b-input>
            </b-field>
            <div class="buttons" style="justify-content: right">
              <b-button type="is-text" size="is-small">ลืมรหัสผ่าน</b-button>
            </div>
            <div class="fixedbuttons" style="justify-content: center">
              <router-link to="/home"
                ><b-button @click="logIn()" rounded type="is-primary" size="is-medium" expanded>
                  เข้าสู่ระบบ</b-button
                ></router-link>
              <!-- <b-button @click="logIn()" rounded type="is-primary" size="is-medium" expanded>
                เข้าสู่ระบบ</b-button
              > -->
              <div class="buttons" style="justify-content: center">
                <router-link to="/register1"
                  ><b-button type="is-text">ลงทะเบียนผู้ใช้ใหม่</b-button></router-link
                >
              </div>
            </div>

          </form>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
// import { mapActions } from 'vuex';
// import login from '../../store/auth'

export default {
  name: 'LogInPage',
  data() {
    return {
      username: this.username,
      password: this.password,
    };
  },
  methods: {
    // ...mapActions({
    //   logIn: 'auth/logIn',
    // }),
    // submit() {
    //   this.logIn(this.form);
    // },
    async logIn() {
      const result = await axios.post('http://localhost:8080/api/auth/sign-in', {
        // console.log(result.data);
        username: this.username,
        password: this.password,
      });
      localStorage.setItem('token', result.data.accessToken);
      this.$store.dispatch('user', result.data.user);
      console.warn(localStorage.getItem('token'));
    },
  },
};
</script>

<style></style>
