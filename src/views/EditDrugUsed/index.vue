<template>
  <section
    class="hero is-white is-fullheight-with-navbar"
    style="border-radius: 60px 60px 0 0; margin-top: 1rem"
  >
    <div class="container" style="margin: 0 45px">
      <div class="content">
        <br />
        <h2>แก้ไขรายการยาปัจจุบัน</h2>
      </div>
      <div>
        <b-image
          :src="`http://localhost:8080/api/storage?key=${this.currentlyDrug.pic}`"
          alt="The Buefy Logo"
          ratio="2by1"
          :rounded="rounded"
        >
        </b-image>
      </div>

      <div>
        <div class="content has-text-black">
          <br />
          <br />
          <strong><h3>ชื่อยาสามัญ</h3></strong>
          <strong
            ><h5>{{ currentlyDrug.genericName }}</h5></strong
          >
          <hr />
          <div style="margin-top: 1rem; padding: 0rem">
            <b-field label="วันที่ได้รับยา" label-position="on-border">
              <b-datepicker
                v-model="currentlyDrug.receiveDate"
                placeholder="Click to select..."
                icon="calendar-today"
                rounded
                trap-focus
              >
              </b-datepicker>
            </b-field>
            <b-field label="สถานที่ได้รับ" label-position="on-border">
              <b-input v-model="currentlyDrug.receivePlace" placeholder="XXXXXXXXX" rounded>
              </b-input>
            </b-field>
            <b-field label="บันทึกเพิ่มเติม" label-position="on-border">
              <b-input v-model="currentlyDrug.more" placeholder="ตัวอย่าง มีผื่นแดงรอบปาก" rounded>
              </b-input>
            </b-field>
            <hr />
          </div>

          <section>
            <div class="control">
              <b-field>
                <b-switch size="is-medium" type="is-success" v-model="isHide"
                  >การตั้งแจ้งเตือนเวลาทานยา</b-switch
                >
              </b-field>

              <div v-if="isHide">
                <b-field label="จำนวนยา" label-position="on-border">
                  <b-input v-model.number="drugAlert.tabs" placeholder=" 2 เม็ด" rounded> </b-input>
                </b-field>
                <b-field grouped position="is-center">
                  <b-checkbox-button
                    class="takes"
                    v-model="takesGroup"
                    native-value="before meal"
                    type="is-primary is-light"
                  >
                    <span>ก่อนอาหาร</span>
                  </b-checkbox-button>
                  <b-checkbox-button
                    class="takes"
                    v-model="takesGroup"
                    native-value="after meal"
                    type="is-primary is-light"
                  >
                    <span>หลังอาหาร</span>
                  </b-checkbox-button>
                </b-field>
                <p>เวลา</p>
                <div>
                  <b-field grouped group-multiline position="is-center">
                    <b-checkbox-button
                      class="choose"
                      v-model="timeGroup"
                      native-value="Breakfast"
                      type="is-primary is-light"
                    >
                      <b-icon pack="mdi" icon="weather-partly-cloudy"></b-icon>
                      <span>เช้า</span>
                    </b-checkbox-button>
                    <b-checkbox-button
                      class="choose"
                      v-model="timeGroup"
                      native-value="Lunch"
                      type="is-primary is-light"
                    >
                      <b-icon pack="mdi" icon="weather-sunny"></b-icon>
                      <span>กลางวัน</span>
                    </b-checkbox-button>
                    <b-checkbox-button
                      class="choose"
                      v-model="timeGroup"
                      native-value="Dinner"
                      type="is-primary is-light"
                    >
                      <b-icon pack="mdi" icon="weather-night"></b-icon>
                      <span>เย็น</span>
                    </b-checkbox-button>
                    <b-checkbox-button
                      class="choose"
                      v-model="timeGroup"
                      native-value="Before Bed"
                      type="is-primary is-light"
                    >
                      <b-icon pack="mdi" icon="bed"></b-icon>
                      <span>ก่อนนอน</span>
                    </b-checkbox-button>
                  </b-field>
                </div>
                <!-- <b-field label="ทุกๆ">
                  <b-input placeholder="6 ชั่วโมง (ใส่แค่ตัวเลข)" rounded trap-focus></b-input>
                </b-field> -->
                <br />
              </div>
              <br />
            </div>
          </section>

          <div class="fixedbuttons" style="justify-content: center">
            <router-link to="/currently-drug"
              ><b-button @click="updateDrug()" type="is-primary is-light" size="is-medium" rounded expanded>
                บันทึก</b-button
              ></router-link
            >
            <br />
            <router-link to="/currently-drug"
              ><b-button @click="deleteDrug();" type="is-danger is-light" size="is-medium" rounded expanded>
                ลบรายการยานี้</b-button
              ></router-link
            >
            <div class="pb-5 pt-5"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EditDrugUsed',
  data: () => ({
    isHide: false,
    currentlyDrug: {},
    drugAlert: [],
    takesGroup: [],
    timeGroup: [],
  }),
  mounted() {
    axios
      .get(`http://localhost:8080/api/currently-drug/${this.$store.getters.editdrug.id}`)
      .then((response) => {
        this.currentlyDrug = response.data;
        this.currentlyDrug.pic = this.$store.getters.editdrug.pic;
        this.currentlyDrug.receiveDate = new Date(this.currentlyDrug.receiveDate);
        this.isHide = this.currentlyDrug.alertStatus;
        console.log(this.currentlyDrug.receiveDate);
      });
    if (this.currentlyDrug.alertStatus !== false) {
      axios.get('http://localhost:8080/api/drug-alert/').then((response) => {
        // eslint-disable-next-line prefer-destructuring
        this.drugAlert = response.data[0];
        // this.drugAlert = this.drugAlert[0];
        this.takesGroup = [this.drugAlert.take];
        this.timeGroup = [this.drugAlert.time];
        console.log(this.drugAlert);
      });
    }
  },
  methods: {
    async updateDrug() {
      const result = await axios.patch(
        `http://localhost:8080/api/currently-drug/${this.currentlyDrug.id}/update`,
        {
          more: this.currentlyDrug.more,
          receiveDate: this.currentlyDrug.receiveDate,
          receivePlace: this.currentlyDrug.receivePlace,
          alertStatus: this.isHide,
        },
      );
      console.warn(result);
      if (this.isHide === true) {
        const result2 = await axios.patch(
          `http://localhost:8080/api/drug-alert/${this.drugAlert.id}/update`,
          {
            tabs: this.drugAlert.tabs,
            take: this.takesGroup[0],
            time: this.timeGroup[0],
          },
        );
        console.warn(result2);
      }
      const result2 = await axios.patch(
        `http://localhost:8080/api/drug-alert/${this.drugAlert.id}/update`,
        {
          tabs: null,
          take: null,
          time: null,
        },
      );
      console.warn(result2);
    },
    async deleteDrug() {
      const result = await axios.delete(
        `http://localhost:8080/api/currently-drug/${this.currentlyDrug.id}/delete`,
        {},
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
