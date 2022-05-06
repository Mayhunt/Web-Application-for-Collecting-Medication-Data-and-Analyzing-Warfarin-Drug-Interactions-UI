<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <div
      class="hero is-fullheight-with-navbar"
      style="background-color: #f2effb; border-radius: 60px 60px 0 0; margin-top: 1rem"
    >
      <div class="container" style="margin: 0 20px">
        <div class="content is-medium">
          <div class="mt-1"></div>
          <h2>รายการยาที่ใช้ปัจจุบัน</h2>
        </div>
        <div
          class="box is-clickable"
          @click="
            isCardModalActive = true;
            sendData(Currently);
          "
          v-for="(Currently, index) in drugcurrently"
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
                  {{ Currently.genericName }}
                  <br />
                  <strong>บันทึกเพิ่มเติม</strong>
                  <br />
                  {{ Currently.more }}
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
                    <strong
                      ><h5>{{ this.details.genericName }}</h5></strong
                    >
                    <strong><h5>บันทึกเพิ่มเติม</h5></strong>
                    <h4>{{ this.details.more }}</h4>
                  </div>
                  <b-field label="วันเกิด" label-position="on-border">
                    <b-datepicker
                      :value="new Date(this.details.receiveDate)"
                      :locale="ES"
                      placeholder="กดเลือกวันที่ได้รับยา"
                      icon="calendar-today"
                      rounded
                      trap-focus
                      disabled
                    >
                    </b-datepicker>
                  </b-field>
                  <!-- </b-field>
                  <b-field label="วันที่ได้รับยา" label-position="on-border">
                    <b-input placeholder="" rounded Disabled> </b-input>
                  </b-field> -->
                  <b-field label="สถานที่ได้รับ" label-position="on-border">
                    <b-input
                      :value="this.details.receivePlace"
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
                <div class="fixedbutton" style="justify-content: center; margin-top: 2rem">
                  <router-link to="/edit-drugused">
                    <b-button
                      @click="sendEditDrug()"
                      class="button"
                      type="is-danger"
                      size="is-medium"
                      rounded
                      expanded
                    >
                      แก้ไขรายการยานี้</b-button
                    >
                  </router-link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </b-modal>
      <b-notification
        v-model="isNotification"
        type="is-warning"
        role="alert"
        has-icon
        position="is-top"
        aria-close-label="Close notification"
      >
        <p>
          <strong>พบรายการยาที่อาจก่อให้เกิดอันตรกิริยากับยาวาร์ฟาริน ทั้งหมด {{this.druginteracts.length }} รายการ</strong>
          <br>
          <strong>รายการยา {{ this.druginteracts[0].genericName }}</strong>
          <br />
          อาจก่อให้เกิด{{ this.druginteracts[0].criteria }} และอาจ{{ this.druginteracts[0].effectInr }}
          <br />
          <strong style="font-size:small">*ผู้ใช้งานควรปรึกษาแพทย์ก่อนการใช้งาน</strong>
          <!-- <strong>บันทึกเพิ่มเติม</strong>
                  <br />
                  {{ Currently.more }} -->
        </p>
      </b-notification>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'drug-currenly',
  data: () => ({
    details: {},
    drugcurrently: [],
    druginteract: [],
    druginteracts: [],
    isCardModalActive: false,
    isNotification: false,
  }),
  mounted() {
    axios.get('http://localhost:8080/api/interact').then((response) => {
      this.druginteract = response.data;
      console.log(this.druginteract);
    });
    axios.get('http://localhost:8080/api/currently-drug').then((response) => {
      this.drugcurrently = response.data;
      this.drugcurrently.receiveDate = new Date(this.drugcurrently.receiveDate);
      // eslint-disable-next-line consistent-return
      this.drugcurrently.forEach((a) => {
        if (a.id === 'fa879f4f-22af-438f-bf04-1e42d6b9249d') {
          this.interact();
          return console.warn('success');
        }
      });
      console.log(this.drugcurrently);
    });
  },
  methods: {
    interact() {
      this.drugcurrently.forEach((b) => {
        // eslint-disable-next-line consistent-return
        this.druginteract.forEach((c) => {
          if (b.genericName === c.genericName) {
            this.isNotification = true;
            this.druginteracts.push(c);
            return this.isNotification;
          }
        });
        return console.warn(b.id);
      });
    },
    sendData(detail) {
      this.details = detail;
      return this.details;
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

<style></style>
