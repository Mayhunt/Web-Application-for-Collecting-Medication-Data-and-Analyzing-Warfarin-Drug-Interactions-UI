<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <div style="background-color: #f2effb; border-radius: 60px 60px 0 0; margin-top: 1rem">
      <div class="container" style="margin: 0 20px">
        <div class="content is-medium">
          <div class="mt-1"></div>
          <h2>test</h2>
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
                  <h1 style="margin-top: 0; text-align: center; margin-bottom: 0.25rem">
                    แก้ไขรายการยานี้
                  </h1>
                </div>
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
    isImageModalActive: false,
    isCardModalActive: false,
  }),
};
</script>

<style></style>
