<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <div class="hero is-fullheight-with-navbar" style="background-color: #f2effb; border-radius: 60px 60px 0 0; margin-top: 1rem">
      <div class="container" style="margin: 0 20px">
        <div class="content is-medium">
          <div class="mt-1"></div>
          <h1>รายการยาที่แพ้</h1>
        </div>
        <div
          class="box is-clickable"
          @click="isCardModalActive = true"
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
          <b-button class="mt-4" rounded type="is-primary" size="is-medium" expanded>
            <router-link to="/allergic-pic"> รูปใบแพ้ยา</router-link></b-button
          >
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
                    <strong><h5>Bismuth subsalicylate tab 1048 mg</h5></strong>
                    <strong><h5>บันทึกเพิ่มเติม</h5></strong>
                    <h4>xxxxxxx</h4>
                  </div>
                  <b-field label="อาการที่แพ้" label-position="on-border">
                    <b-input placeholder="มีผื่นแดงรอบปาก" rounded Disabled> </b-input>
                  </b-field>
                  <b-field label="สถานที่ได้รับ" label-position="on-border">
                    <b-input
                      v-model="receive_place"
                      placeholder="ตัวอย่าง โรงพยาบาลจุฬาภรณ์"
                      Disabled
                      rounded
                    >
                    </b-input>
                  </b-field>
                  <b-field label="บันทึกเพิ่มเติม" label-position="on-border">
                    <b-input v-model="more" placeholder="ตัวอย่าง มีผื่นแดงรอบปาก" rounded Disabled>
                    </b-input>
                  </b-field>
                </div>
                <div class="buttons" style="justify-content: center; margin-top: 2rem">
                  <b-button class="button" type="is-danger" size="is-medium" rounded expanded>
                    <router-link to="/edit-allergic"> แก้ไขรายการยานี้</router-link></b-button
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

export default {
  name: 'AllergicAll',
  data: () => ({
    allergicDrug: [],
    isCardModalActive: false,
  }),
  mounted() {
    axios.get('http://localhost:8080/allergic-drug').then((response) => {
      this.allergicDrug = response.data;
      console.log(response);
    });
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
