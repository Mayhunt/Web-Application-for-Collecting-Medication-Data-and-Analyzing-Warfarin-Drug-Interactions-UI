<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <div style="background-color: #f2effb; border-radius: 60px 60px 0 0; margin-top: 1rem">
      <!-- <div style="background-color: rgb(121, 87, 213); max-height: 56px">
      <b-icon pack="fas" icon="arrow-left" size="is-medium" type="is-white" style="margin: 12px">
      </b-icon>
    </div> -->
      <!-- <section>
            <b-image
                :src="require('@/assets/logo.png')"
                alt="The Buefy Logo"
                ratio="601by200"
                :rounded="rounded">
            </b-image>
        </section> -->
      <section
        class="hero is-white is-fullheight-with-navbar"
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
            <b-field label="=ชื่อ*" label-position="on-border">
              <b-input v-model="me.firstName" placeholder="ชื่อ" rounded> </b-input>
            </b-field>
            <b-field label="นามสกุล*" label-position="on-border">
              <b-input v-model="me.lastName" placeholder="นามสกุล" rounded> </b-input>
            </b-field>
            <b-field label="เลขประจำตัวประชาชน" label-position="on-border">
              <b-input v-model="me.idCardNumber" placeholder="เลขประจำตัวประชาชน 13 หลัก" rounded> </b-input>
            </b-field>
            <b-field label="วันเกิด" label-position="on-border">
              <b-datepicker
                v-model="selectedDate"
                placeholder="กดเลือกวันเกิด"
                icon="calendar-today"
                rounded
                trap-focus
              >
              </b-datepicker>
            </b-field>
            <b-field label="หมู่เลือด" label-position="on-border">
              <b-input v-model="me.bloodGroup" placeholder="B+" rounded> </b-input>
            </b-field>
            <b-field label="โรคประจำตัว" label-position="on-border">
              <b-input v-model="me.medicationCondition" placeholder="โรคหัวใจ,โรคเบาหวาน" rounded> </b-input>
            </b-field>
            <b-field label="น้ำหนัก" label-position="on-border">
              <b-input v-model.number="me.weight" placeholder="XX " rounded expanded> </b-input>
              <p class="control">
                <span class="button is-static is-rounded">กิโลกรัม</span>
              </p>
            </b-field>
            <b-field label="ส่วนสูง" label-position="on-border">
              <b-input v-model.number="me.height" placeholder="XXX " rounded expanded> </b-input>
              <p class="control">
                <span class="button is-static is-rounded">เซนติเมตร</span>
              </p>
            </b-field>
            <b-field label="BMI" label-position="on-border">
              <b-input v-model.number="calBMI" placeholder="ดัชนีมวลกาย" rounded disabled> </b-input>
            </b-field>
            <b-field label="เบอร์โทร" label-position="on-border">
              <b-input v-model="me.phoneNum" placeholder="XXX-XXXXXXX" rounded> </b-input>
            </b-field>
            <hr />
            <h4>ผู้ติดต่อฉุกเฉิน</h4>
            <br />
            <b-field label="ชื่อ" label-position="on-border">
              <b-input v-model="me.emergencyContact" placeholder="ชื่อ" rounded> </b-input>
            </b-field>
            <b-field label="เบอร์โทร" label-position="on-border">
              <b-input v-model="me.emergencyPhoneNum" placeholder="XXX-XXXXXXX" rounded> </b-input>
            </b-field>
            <div
              class="fixedbuttons"
              style="justify-content: center; margin-top: 2.5rem; margin-bottom: 4rem"
            >
              <div class="fixedbuttons" style="justify-content: center">
                <router-link to="me">
                  <b-button @click="updateProfile()" rounded type="is-primary is-light" size="is-medium" expanded
                    >บันทึก</b-button
                  ></router-link
                >
                <br />
                <router-link to="sign-in">
                  <b-button type="is-danger is-light" size="is-medium" rounded expanded>
                    ลบบัญชีผู้ใช้นี้</b-button
                  ></router-link
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
import { mapGetters } from 'vuex';

export default {
  name: 'UpdateMe',
  components: {},
  data() {
    return {
      selectedDate: new Date(),
      me: {},
      pic: '',
    };
  },
  mounted() {
    axios.get(`http://localhost:8080/api/auth/me?id=${this.$store.getters.id}`).then((response) => {
      this.me = response.data;
      console.log(response);
    });
  },
  computed: {
    ...mapGetters(['user']),
    calBMI() {
      const bmi = parseFloat(this.me.weight / (this.me.height / 100) ** 2).toFixed(2);
      return Number(bmi);
    },
  },
  methods: {
    async updateProfile() {
      const result = await axios.patch(
        `http://localhost:8080/api/auth/${this.$store.getters.id}/update`,
        {
          username: this.me.username,
          password: this.me.password,
          firstName: this.me.first_name,
          lastName: this.me.last_name,
          idCardNumber: this.me.id_card_number,
          birthDate: this.selectedDate,
          bloodGroup: this.me.blood_group,
          medicationCondition: this.me.medication_condition,
          weight: this.me.weight,
          height: this.me.height,
          bmi: this.me.calBMI,
          phoneNum: this.me.phone_num,
          emergencyContact: this.me.emergency_contact,
          emergencyPhoneNum: this.me.emergency_phone_num,
          pic: this.me.pic,
        },
      );
      console.warn(result);
    },
  },
};
</script>

<style>
.input {
  margin-bottom: 0.5rem;
}
</style>
