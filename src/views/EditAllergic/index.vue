<template>
  <section
    class="hero is-white is-fullheight-with-navbar"
    style="border-radius: 60px 60px 0 0; margin-top: 1rem"
  >
    <NavBar></NavBar>
    <div class="container" style="margin: 0 50px">
      <div class="content">
        <br />
        <h2>แก้ไขรายการยาที่แพ้</h2>
      </div>
      <div>
        <b-image
          :src="`http://localhost:8080/api/storage?key=${this.allergicDrug.pic}`"
          alt="The Buefy Logo"
          ratio="2by1"
          :rounded="rounded"
        ></b-image>
      </div>

      <div>
        <div class="content has-text-black">
          <br />
          <br />
          <strong><h3>ชื่อยาสามัญ</h3></strong>
          <strong
            ><h5>{{ this.allergicDrug.genericName }}</h5></strong
          >
          <hr />
          <!-- <div class="box"> -->
          <b-field label="อาการที่แพ้" label-position="on-border">
            <b-input v-model="allergicDrug.symptom" placeholder="มีผื่นแดงรอบปาก" rounded>
            </b-input>
          </b-field>
          <b-field label="สถานที่ได้รับ" label-position="on-border">
            <b-input v-model="allergicDrug.place" placeholder="โรงพยาบาลจุฬาภรณ์" rounded>
            </b-input>
          </b-field>
          <b-field label="บันทึกเพิ่มเติม" label-position="on-border">
            <b-input v-model="allergicDrug.more" placeholder="ตัวอย่าง มีผื่นแดงรอบปาก" rounded>
            </b-input>
          </b-field>
          <br />
          <br />
          <!-- </div> -->
          <!-- <div class="buttons has-addons is-centered">
            <b-button class="button" size="is-medium" type="is-primary is-light">บันทึก</b-button>
          </div> -->

          <div class="fixedbuttons" style="justify-content: center">
            <router-link to="/allergic-drug"
              ><b-button
                @click="updateDrug()"
                rounded
                type="is-primary is-light"
                size="is-medium"
                expanded
              >
                บันทึก</b-button
              ></router-link
            >
            <br />

            <router-link to="/allergic-drug"
              ><b-button
                @click="deleteDrug()"
                rounded
                type="is-danger is-light"
                size="is-medium"
                expanded
              >
                ลบรายการยานี้</b-button
              ></router-link
            >
          </div>
        </div>
      </div>

      <!-- </div> -->
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import NavBar from '../../components/NavBar.vue';

export default {
  name: 'SaveAllergic',
  components: {
    NavBar,
  },
  data() {
    return {
      allergicDrug: {},
    };
  },
  mounted() {
    axios
      .get(`http://localhost:8080/api/allergic-drug/${this.$store.getters.editdrug.id}`)
      .then((response) => {
        this.allergicDrug = response.data;
        this.allergicDrug.pic = this.$store.getters.editdrug.pic;
        console.log(response);
      });
  },
  methods: {
    async updateDrug() {
      const result = await axios.patch(
        `http://localhost:8080/api/allergic-drug/${this.allergicDrug.id}/update`,
        {
          more: this.allergicDrug.more,
          symptom: this.allergicDrug.symptom,
          place: this.allergicDrug.place,
        },
      );
      console.warn(result);
    },
  },
};
</script>

<style></style>
