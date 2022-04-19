<template>
  <div style="background-color: rgb(121, 87, 213)">
    <div style="background-color: rgb(121, 87, 213); max-height: 56px">
      <router-link to="/register1">
        <b-icon
          class="is-clickable"
          pack="fas"
          icon="arrow-left"
          size="is-medium"
          type="is-white"
          style="margin: 12px"
        >
        </b-icon>
      </router-link>
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
        <div class="media-body">
          <figure class="image is-128x128">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
        </div>
        <form class="box">
          <b-field label="Name*" label-position="on-border">
            <b-input v-model="first_name" placeholder="Name" rounded> </b-input>
          </b-field>
          <b-field label="Surname*" label-position="on-border">
            <b-input v-model="last_name" placeholder="Surname" rounded> </b-input>
          </b-field>
          <b-field label="ID Number" label-position="on-border">
            <b-input v-model="id_card_number" placeholder="X-XXXX-XXXXX-XX-X" rounded> </b-input>
          </b-field>
          <b-field label="Date of Birth" label-position="on-border">
            <b-datepicker
              v-model="selectedDate"
              placeholder="Click to select..."
              icon="calendar-today"
              :icon-right="selected ? 'close-circle' : ''"
              icon-right-clickable
              @icon-right-click="clearDate"
              rounded
              trap-focus
            >
            </b-datepicker>
          </b-field>
          <b-field label="Blood Group" label-position="on-border">
            <b-input v-model="blood_group" placeholder="ตัวอย่าง B+" rounded> </b-input>
          </b-field>
          <b-field label="โรคประจำตัว" label-position="on-border">
            <b-input v-model="medication_condition" placeholder="Heart Disease" rounded> </b-input>
          </b-field>
          <b-field label="น้ำหนัก" label-position="on-border">
            <b-input :value="weight" @change="updateWeight" placeholder="XX " rounded expanded>
            </b-input>
            <p class="control">
              <span class="button is-static is-rounded">กิโลกรัม</span>
            </p>
          </b-field>
          <b-field label="ส่วนสูง" label-position="on-border">
            <b-input :value="height" @change="updateHeight" placeholder="XXX " rounded expanded>
            </b-input>
            <p class="control">
              <span class="button is-static is-rounded">เซนติเมตร</span>
            </p>
          </b-field>
          <b-field label="BMI" label-position="on-border">
            <b-input :value="bmi" rounded disabled> </b-input>
          </b-field>
          <b-field label="เบอร์โทร" label-position="on-border">
            <b-input v-model="phone_num" placeholder="XXX-XXXXXXX" rounded> </b-input>
          </b-field>
          <hr />
          <h4>ผู้ติดต่อฉุกเฉิน</h4>
          <br />
          <b-field label="ชื่อ" label-position="on-border">
            <b-input v-model="emergency_contact" placeholder="ชื่อ" rounded> </b-input>
          </b-field>
          <b-field label="เบอร์โทร" label-position="on-border">
            <b-input v-model="emergency_phone_num" placeholder="XXX-XXXXXXX" rounded> </b-input>
          </b-field>
          <div
            class="buttons"
            style="justify-content: center; margin-top: 2.5rem; margin-bottom: 4rem"
          >
            <b-button rounded type="is-primary" size="is-medium" expanded>
              <router-link to="/question">Continue</router-link></b-button
            >
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'RegisterContinuePage',
  data() {
    return {
      weight: 0,
      height: 0,
      bmi: 0,
    };
  },
  methods: {
    updateHeight(event) {
      this.height = event.target.value;
      this.bmi = this.weight / ((this.height / 100) * (this.height / 100));
    },
    updateWeight(event) {
      this.height = event.target.value;
      this.bmi = this.weight / ((this.height / 100) * (this.height / 100));
    },
    // updateR(event) {
    //     this.form.sale_rate = event.target.value
    //     this.form.sale_total = this.form.sale_quantity * this.form.sale_rate
    //   }
  },
  // updateHeight(event) {
  //   this.height = event.target.value;
  //   this.bmi = this.weight / ((this.height / 100) * (this.height / 100));
  // },
};
</script>

<style>
.input {
  margin-bottom: 0.5rem;
}
</style>
