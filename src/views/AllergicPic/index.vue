<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <div style="background-color: #f2effb; border-radius: 60px 60px 0 0; margin-top: 1rem">
      <div class="container" style="margin: 0 20px">
        <div class="content is-medium">
          <div class="mt-1"></div>
          <h1>ใบแพ้ยา</h1>
        </div>
        <div
          class="box is-clickable"
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
            ></b-image>
          </div>
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
