<template>
  <div style="background-color: rgb(121, 87, 213)">
    <div style="background-color: rgb(121, 87, 213); max-height: 56px">
      <b-icon pack="fas" icon="arrow-left" size="is-medium" type="is-white" style="margin: 12px">
      </b-icon>
    </div>
    <!-- <section>
            <b-image
                :src="require('@/assets/logo.png')"
                alt="The Buefy Logo"
                ratio="601by200"
                :rounded="rounded">
            </b-image>
        </section> -->
    <section
      class="hero is-white is-fullheight"
      style="border-radius: 60px 60px 0 0; padding: 1rem"
    >
      <div>
        <!-- <div class="content is-medium">
                <h1 style="margin-top:0; text-align:center; margin-bottom:0.25rem">Create Account</h1>
            </div> -->
        <div class="media-body" style="padding-left: 115px">
          <!-- <figure class="image is-128x128 ">
            <img center class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
          </figure> -->
          <figure class="media-left">
            <p class="image is-128x128">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
            </p>
          </figure>
        </div>
        <form class="box">
          <b-field label="Name*" label-position="on-border">
            <b-input :value="me.firstName" rounded disabled> </b-input>
          </b-field>
          <b-field label="Surname*" label-position="on-border">
            <b-input :value="me.lastName" rounded disabled> </b-input>
          </b-field>
          <b-field label="ID Number" label-position="on-border">
            <b-input :value="me.idCardNumber" rounded disabled> </b-input>
          </b-field>
          <b-field label="Date of Birth" label-position="on-border">
            <b-datepicker placeholder="Click to select..." icon="calendar-today" rounded trap-focus>
            </b-datepicker>
          </b-field>
          <b-field label="Blood Type" label-position="on-border">
            <b-input :value="me.bloodGroup" placeholder="B+" rounded disabled> </b-input>
          </b-field>
          <b-field label="โรคประจำตัว" label-position="on-border">
            <b-input :value="me.medicationCondition" rounded disabled> </b-input>
          </b-field>
          <b-field label="น้ำหนัก" label-position="on-border">
            <b-input :value="me.weight" rounded expanded disabled> </b-input>
            <p class="control">
              <span class="button is-static is-rounded">กิโลกรัม</span>
            </p>
          </b-field>
          <b-field label="ส่วนสูง" label-position="on-border">
            <b-input :value="me.height" rounded expanded disabled> </b-input>
            <p class="control">
              <span class="button is-static is-rounded">เซนติเมตร</span>
            </p>
          </b-field>
          <b-field label="BMI" label-position="on-border">
            <b-input :value="me.bmi" rounded disabled> </b-input>
          </b-field>
          <b-field label="เบอร์โทร" label-position="on-border">
            <b-input :value="me.phoneNum" disabled rounded> </b-input>
          </b-field>
          <hr />
          <h4>ผู้ติดต่อฉุกเฉิน</h4>
          <br />
          <b-field label="ชื่อ" label-position="on-border">
            <b-input :value="me.emergencyContact" rounded disabled> </b-input>
          </b-field>
          <b-field label="เบอร์โทร" label-position="on-border">
            <b-input :value="me.emergencyPhoneNum" rounded disabled> </b-input>
          </b-field>
          <div
            class="buttons"
            style="justify-content: center; margin-top: 2.5rem; margin-bottom: 4rem"
          >
            <div class="buttons" style="justify-content: center">
              <router-link to="update-me">
                <b-button rounded type="is-primary is-light" size="is-medium" expanded
                  >แก้ไข้ข้อมูล</b-button
                ></router-link
              >
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Profile',
  data: () => ({
    me: {},
  }),
  mounted() {
    axios.get('http://localhost:8080/auth/me').then((response) => {
      this.me = response.data;
      console.log(response);
    });
  },
};
</script>

<style>
.input {
  margin-bottom: 0.5rem;
}
</style>
