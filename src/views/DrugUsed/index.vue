<template>
<section
      class="hero is-primary is-fullheight-with-navbar">
      <div style="background-color: #f2effb;
      border-radius: 60px 60px 0 0; margin-top: 1rem"
    >
  <div class="container" style="margin: 0 20px">
    <div class="content is-medium">
      <div class="mt-1"></div>
      <h2>รายการยาที่ใช้ปัจจุบัน</h2>
    </div>
    <div class="box is-clickable" v-for="(currentlyDrugAll, index) in currentlyDrug" :key="index" style="border-radius: 30px 30px 30px 30px">
      <router-link to="/edit-drugused">
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
              {{ currentlyDrugAll.genericName}}
              <br />
              <strong>บันทึกเพิ่มเติม</strong>
              <br />
              {{ currentlyDrugAll.more}}
            </p>
          </div>
        </div>
      </article>
      </router-link>
    </div>
  </div>

</div>
</section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'drug-currenly',
  data: () => ({
    currentlyDrug: [],
  }),
  mounted() {
    axios.get('http://localhost:8080/currently-drug').then((response) => {
      this.currentlyDrug = response.data;
      console.log(response);
    });
  },
};
</script>

<style></style>
