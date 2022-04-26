<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <NavBar></NavBar>
    <div
      class="hero is-fullheight-with-navbar"
      style="background-color: #f2effb; border-radius: 60px 60px 0 0; margin-top: 1rem"
    >
      <div class="container" style="margin: 0 20px">
        <div class="content is-medium">
          <div class="mt-1"></div>
          <h1>รายการยาที่แพ้</h1>
        </div>
        <div
          class="box is-clickable"
          @click="
            isCardModalActive = true;
            sendData(AllergicAll);
          "
          v-for="(AllergicAll, index) in allergicDrug"
          :key="index"
          style="border-radius: 30px 30px 30px 30px"
        >
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Generic Name</strong>
                  <br />
                  {{ AllergicAll.genericName }}
                  <br />
                  <strong>Symptoms</strong>
                  <br />
                  {{ AllergicAll.symptom }}
                </p>
              </div>
            </div>
          </article>
        </div>
        <div class="pb-5 pt-5"></div>
        <div class="pb-5 pt-5"></div>
        <div class="fixedbutton">
          <router-link to="/allergic-pic"><b-button class="mt-4" rounded type="is-primary" size="is-medium" expanded>
             รูปใบแพ้ยา</b-button
          ></router-link>
        </div>
      </div>
      <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
        <div class="card">
          <div>
            <section
              class="hero is-white"
              style="border-radius: 60px 60px 0 0; margin-top: 1rem; padding: 1rem"
            >
              <div>
                <div class="content is-medium">
                  <h3 style="margin-top: 0; text-align: center; margin-bottom: 0.25rem">
                    แก้ไขรายการยานี้
                  </h3>
                </div>
                <div>
                  <div class="media-content" style="padding-left: 115px">
                    <figure class="image is-128x128">
                      <img src="https://bulma.io/images/placeholders/128x128.png" />
                    </figure>
                  </div>
                </div>
                <div class="media-content">
                  <div class="content">
                    <br />
                    <strong><h5>ชื่อยาสามัญ</h5></strong>
                    <strong><h5> {{this.details.genericName}} </h5></strong>
                  </div>
                  <b-field label="อาการที่แพ้" label-position="on-border">
                    <b-input :value="this.details.symptom" Disabled> </b-input>
                  </b-field>
                  <b-field label="สถานที่ได้รับ" label-position="on-border">
                    <b-input
                      :value="this.details.place"
                      placeholder="ตัวอย่าง โรงพยาบาลจุฬาภรณ์"
                      Disabled
                      rounded
                    >
                    </b-input>
                  </b-field>
                  <b-field label="บันทึกเพิ่มเติม" label-position="on-border">
                    <b-input :value="this.details.more" placeholder="ตัวอย่าง มีผื่นแดงรอบปาก" rounded Disabled>
                    </b-input>
                  </b-field>
                </div>
                <div class="fixedbuttons" style="justify-content: center; margin-top: 2rem">
                  <router-link to="/edit-allergic"><b-button @click="sendEditDrug()" type="is-primary" size="is-medium" rounded expanded>
                    แก้ไขรายการยานี้</b-button
                  ></router-link>
                  <b-button @click="deleteDrug(); reloadPage()" type="is-danger" size="is-medium" rounded expanded>
                    ลบรายการยานี้
                    </b-button
                  >
                </div>
              </div>
            </section>
          </div>
        </div>
      </b-modal>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import NavBar from '../../components/NavBar.vue';

export default {
  name: 'AllergicAll',
  components: {
    NavBar,
  },
  data: () => ({
    allergicDrug: [],
    isCardModalActive: false,
    details: {},
  }),
  mounted() {
    axios.get('http://localhost:8080/api/allergic-drug').then((response) => {
      this.allergicDrug = response.data;
      console.log(response);
    });
  },
  methods: {
    sendData(detail) {
      this.details = detail;
      return this.details;
      // console.warn(detail);
    },
    sendEditDrug() {
      this.$store.commit('setEditDrug', this.details.id);
    },
    async deleteDrug() {
      const result = await axios.delete(
        `http://localhost:8080/api/allergic-drug/${this.details.id}/delete`,
      );
      console.warn(result);
    },
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>

<style>
.fixedbutton {
  position: fixed;
  padding-left: 15px;
  padding-right: 15px;
  left: 0%;
  bottom: 0px;
  background-color: #f2effb;
  width: 100%;
  height: 10%;
}
</style>
