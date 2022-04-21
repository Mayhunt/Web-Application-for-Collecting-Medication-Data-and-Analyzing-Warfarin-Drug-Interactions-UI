<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <div
      class="hero is-fullheight-with-navbar"
      style="background-color: #f2effb; border-radius: 60px 60px 0 0; margin-top: 1rem"
    >
      <div class="container" style="margin: 0 20px">
        <div class="content is-medium">
          <div class="mt-1"></div>
          <h1>ใบแพ้ยา</h1>
        </div>
        <div
          class="box is-clickable has-text-centered"
          v-for="(allergic, index) in allergics"
          :key="index"
          style="border-radius: 30px 30px 30px 30px"
        >
          <div>
            <b-image
              :src="require('@/assets/allergicpic2.png')"
              alt="The Buefy Logo"
              ratio="2by1"
              :rounded="rounded"
            >
            </b-image>
          </div>
          <div class="pb-1 pt-1"></div>

          <b-button
            class="button"
            rounded
            type="is-danger"
            size="is-small"
            icon-left="trash-can"
            @click="isCardModalActive = true"
            >ลบรูปใบแพ้ยา</b-button
          >
        </div>
        <div class="pb-5 pt-5"></div>
        <div class="pb-5 pt-5"></div>
        <!-- <div class="fixedbutton"> -->
        <!-- <b-button class="button is-medium is-fullwidth" type="is-primary">เพิ่มรูปใบแพ้ยา</b-button> -->
        <!-- </div> -->
        <div class="fixedbutton">
          <b-button class="mt-4" rounded type="is-primary" size="is-medium" expanded
            >เพิ่มรูปใบแพ้ยา</b-button
          >
        </div>
        <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
          <div class="card">
            <div>
              <section
                class="hero is-white"
                style="border-radius: 60px 60px 60px 60px; margin-top: 1rem; padding: 1rem"
              >
                <div>
                  <div class="content is-medium">
                    <h4 style="margin-top: 0; text-align: center; margin-bottom: 0.25rem">
                      ลบรูปใบแพ้ยา
                    </h4>
                    <br/>
                    <div class="columns is-mobile is-centered">
                         ท่านต้องการลบรูปภาพใบแพ้ยานี้
                    </div>
                  </div>

                  <div class="buttons" style="justify-content: center; margin-top: 2rem">
                    <b-button
                      class="button"
                      @click="isCardModalActive = false"
                      type="is-grey-lighter"
                      size="is-medium"
                      rounded
                      expanded
                      >ยกเลิก</b-button
                    >
                    <b-button
                      class="button"
                      @click="isCardModalActive = false"
                      type="is-danger"
                      size="is-medium"
                      rounded
                      expanded
                      >ลบรูป</b-button
                    >
                  </div>
                </div>
              </section>
            </div>
          </div>
        </b-modal>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AllergicPage',
  data: () => ({
    allergics: [
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
