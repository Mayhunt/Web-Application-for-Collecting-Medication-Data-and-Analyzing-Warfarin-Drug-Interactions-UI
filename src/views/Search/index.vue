<template>
  <section
    class="hero is-white is-fullheight-with-navbar"
    style="border-radius: 60px 60px 0 0; margin-top: 1rem"
  >
    <div class="container" style="margin: 0 45px">
      <!-- <div class="container"> -->
      <div class="content is-medium">
        <br />
        <h1>{{this.$store.getters.searchdrugs.genericName}}</h1>
      </div>
      <div>
        <b-image :src="require('@/assets/ex1.png')" alt="ex1" ratio="2by1" :rounded="rounded">
        </b-image>
      </div>

      <!-- <div class="media-content"> -->
      <div class="content has-text-black">
        <br />
        <br />
        <div>
          <span class="is-size-3"><strong>ชื่อยาสามัญ</strong></span>
          <!-- <b-icon pack="mdi" icon="alpha-i-circle-outline" type="is-primary" @click="isImageModalActive = true"> </b-icon> -->
          <b-button type="is-white" size="is-meduim" @click="isImageModalActive = true"  icon-right="alpha-i-circle-outline" />
        </div>
        <b-modal v-model="isImageModalActive">
          <p class="image is-1280x960">
            <b-image :src="require('@/assets/i.png')" alt="i" :rounded="rounded"> </b-image>
          </p>
        </b-modal>

        {{this.$store.getters.searchdrugs.genericName}}
        <hr />
        <strong><h2>ข้อควรระวัง</h2></strong>
        {{this.$store.getters.searchdrugs.caution}}
      </div>
      <!-- <div class="fixedbutton justify-content-center is-fullwidth">
          <b-button size="is-medium" class="is-fullwidth" type="is-primary is-light"
            >Save to Drug Currenlty Used</b-button
          >
          <br />
          <b-button size="is-medium" class="is-fullwidth" type="is-danger is-light"
            >Save to Allergic Drug Used</b-button
          >
        </div> -->
      <div class="buttons" style="justify-content: center">
        <b-button type="is-primary is-light" size="is-medium" expanded
          ><router-link to="/save-drug">บันทึกไปรายการยาปัจจุบัน</router-link></b-button
        >
        <b-button rounded type="is-danger is-light" size="is-medium" expanded
          ><router-link to="/save-allergic">บันทึกไปรายการยาที่แพ้</router-link></b-button
        >
      </div>
    </div>

    <!-- </div> -->
    <!-- </div> -->
  </section>
</template>

<script>
// import store from '../../store/index';

export default {
  name: 'SearchPage',
};
</script>

<script>
export default {
  name: 'SearchPage',
  data() {
    return {
      isImageModalActive: false,
    };
  },
};
</script>

<style>
.fixedbutton {
  /* position:fixed;  */
  /* justify-content: center; */
  bottom: 0px;
}
</style>
