<template>
  <section
    class="hero is-white is-fullheight-with-navbar"
    style="border-radius: 60px 60px 0 0; margin-top: 1rem"
  >
    <NavBar></NavBar>
    <div class="container" style="margin: 0 45px">
      <div class="content">
        <br />
        <h2>บันทึกรายการยาปัจจุบัน</h2>
      </div>
      <div>
        <b-image
          :src="require('@/assets/ex1.png')"
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
            ><h5>{{ this.$store.getters.searchdrugs.genericName }}</h5></strong
          >
          <hr />
          <div class="box" style="margin-top: 1rem; padding: 0rem">
            <b-field label="วันที่ได้รับยา" label-position="on-border">
              <b-datepicker
                v-model="selectedDate"
                placeholder="Click to select..."
                icon="calendar-today"
                rounded
                trap-focus
              >
              </b-datepicker>
            </b-field>
            <b-field label="สถานที่ได้รับ" label-position="on-border">
              <b-input v-model="receive_place" placeholder="ตัวอย่าง โรงพยาบาลจุฬาภรณ์" rounded>
              </b-input>
            </b-field>
            <b-field label="บันทึกเพิ่มเติม" label-position="on-border">
              <b-input v-model="more" placeholder="ตัวอย่าง มีผื่นแดงรอบปาก" rounded> </b-input>
            </b-field>
          </div>

          <section>
            <div class="control">
              <b-field>
                <b-switch size="is-medium" type="is-success" v-model="isHide"
                  >การตั้งแจ้งเตือนเวลาทานยา</b-switch
                >
              </b-field>
              <hr />
              <div v-if="isHide">
                <b-field label="จำนวนยา" label-position="on-border">
                  <b-input v-model="tabs" placeholder=" 2 เม็ด" rounded> </b-input>
                </b-field>
                <div class="buttons">
                  <b-button rounded type="is-primary" outlined>ก่อนอาหาร</b-button>
                  <b-button rounded type="is-primary" outlined>หลังอาหาร</b-button>
                </div>
                <p>เวลา</p>
                <div>
                  <b-field>
                    <b-checkbox size="is-medium" :value="false"> เช้า </b-checkbox>
                  </b-field>
                  <b-field>
                    <b-checkbox size="is-medium" :value="false"> กลางวัน </b-checkbox>
                  </b-field>
                  <b-field>
                    <b-checkbox size="is-medium" :value="false"> เย็น </b-checkbox>
                  </b-field>
                  <b-field>
                    <b-checkbox size="is-medium" :value="false"> ก่อนนอน</b-checkbox>
                  </b-field>
                </div>
                <b-field label="ทุกๆ">
                  <b-input placeholder="6 ชั่วโมง (ใส่แค่ตัวเลข)" rounded trap-focus></b-input>
                </b-field>
              </div>
            </div>
          </section>
          <div class="pb-5 pt-5"></div>

          <div class="fixedbuttons" style="justify-content: center">
            <router-link to="/currently-drug">
              <b-button rounded type="is-primary" size="is-medium" expanded>
                บันทึก</b-button
              ></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from '../../components/NavBar.vue';

export default {
  name: 'SaveDrug',
  components: {
    NavBar,
  },
  data: () => ({
    isHide: false,
  }),
};
</script>

<style>
.option {
  font-family: 'Kanit';
}
</style>
