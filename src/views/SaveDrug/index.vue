<template>
  <section
    class="hero is-white is-fullheight-with-navbar"
    style="border-radius: 60px 60px 0 0; margin-top: 1rem"
  >
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

      <div class="media-content">
        <div class="content has-text-black">
          <br />
          <br />
          <strong><h3>ชื่อยาสามัญ</h3></strong>
          <strong><h5>Bismuth subsalicylate tab 1048 mg</h5></strong>
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
              <b-input v-model="receive_place" placeholder="ตัวอย่าง โรงพยาบาลจุฬาภรณ์" rounded> </b-input>
            </b-field>
            <b-field label="บันทึกเพิ่มเติม" label-position="on-border">
              <b-input v-model="more" placeholder="ตัวอย่าง มีผื่นแดงรอบปาก" rounded> </b-input>
            </b-field>
          </div>

          <section>
            <div class="control">
              <b-field>
                <b-switch size="is-medium" type="is-success" v-model="isHide">การตั้งแจ้งเตือนเวลาทานยา</b-switch>
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
                <div class="buttons">
                  <b-button rounded type="is-primary" outlined>เช้า</b-button>
                  <b-button rounded type="is-primary" outlined>กลางวัน</b-button>
                  <b-button rounded type="is-primary" outlined>เย็น</b-button>
                  <b-button rounded type="is-primary" outlined>ก่อนนอน</b-button>
                </div>
                <b-field label="ทุกๆ"><b-select placeholder="จำนวนชั่วโมง" rounded>
                    <option value="1">1 ชั่วโมง</option>
                    <option value="2">2 ชั่วโมง</option>
                    <option value="3">3 ชั่วโมง</option>
                    <option value="4">4 ชั่วโมง</option>
                    <option value="5">5 ชั่วโมง</option>
                    <option value="6">6 ชั่วโมง</option>
                    <option value="7">7 ชั่วโมง</option>
                    <option value="8">8 ชั่วโมง</option>
                    <option value="9">9 ชั่วโมง</option>
                    <option value="10">10 ชั่วโมง</option>
                    <option value="11">11 ชั่วโมง</option>
                    <option value="12">12 ชั่วโมง</option>
                    <option value="13">13 ชั่วโมง</option>
                    <option value="14">14 ชั่วโมง</option>
                    <option value="15">15 ชั่วโมง</option>
                    <option value="16">16 ชั่วโมง</option>
                    <option value="17">17 ชั่วโมง</option>
                    <option value="18">18 ชั่วโมง</option>
                    <option value="19">19 ชั่วโมง</option>
                    <option value="20">20 ชั่วโมง</option>
                    <option value="21">21 ชั่วโมง</option>
                    <option value="22">22 ชั่วโมง</option>
                    <option value="23">23 ชั่วโมง</option>
                    <option value="24">24 ชั่วโมง</option>
                  </b-select>
                </b-field>
              </div>
            </div>
          </section>

          <div class="buttons" style="justify-content: center">
            <b-button rounded type="is-primary" size="is-medium" expanded>
              <router-link to="/drug-used">บันทึก</router-link></b-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SaveDrug',
  data: () => ({
    isHide: false,
  }),
};
</script>

<style></style>
