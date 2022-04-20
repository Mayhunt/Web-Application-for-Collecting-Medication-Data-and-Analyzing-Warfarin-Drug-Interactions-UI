<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <div style="background-color: #f2effb; border-radius: 60px 60px 0 0; margin-top: 1rem">
      <div class="container" style="margin: 0 20px">
        <div class="content is-medium">
          <div class="mt-1"></div>
          <h2>รายการยาที่ใช้ปัจจุบัน</h2>
        </div>
        <div
          class="box is-clickable"
          @click="isCardModalActive = true"
          v-for="(Currenly, index) in drugcurrently"
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
                  <strong>ชื่อยาสามัญ</strong>
                  <br />
                  xxxxxxx
                  <br />
                  <strong>บันทึกเพิ่มเติม</strong>
                  <br />
                  xxxxxxx
                </p>
              </div>
            </div>
          </article>
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
                  <b-field label="วันที่ได้รับยา" label-position="on-border">
                    <b-input placeholder="" rounded Disabled> </b-input>
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
                    <router-link to="/edit-drugused"> แก้ไขรายการยานี้</router-link></b-button
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
export default {
  name: 'drug-currenly',
  data: () => ({
    drugcurrently: [
      {
        imgURL: '',
      },
      {
        imgURL: '',
      },
      {
        imgURL: '',
      },
      {
        imgURL: '',
      },
      {
        imgURL: '',
      },
      {
        imgURL: '',
      },
    ],
    isCardModalActive: false,
  }),
};
</script>

<style></style>
