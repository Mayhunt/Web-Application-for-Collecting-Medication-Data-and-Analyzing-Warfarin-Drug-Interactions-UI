<template>
  <section
    class="hero is-white is-fullheight-with-navbar"
    style="border-radius: 60px 60px 0 0; margin-top: 1rem"
  >
    <div class="container" style="margin: 0 50px">
      <div class="content">
        <br />
        <h2>บันทึกรายการยาที่แพ้</h2>
      </div>
      <div>
        <b-image
          :src="require('@/assets/ex1.png')"
          alt="The Buefy Logo"
          ratio="2by1"
          :rounded="rounded"
        ></b-image>
      </div>

      <div class="media-content">
        <div class="content has-text-black">
          <br />
          <br />
          <strong><h3>ชื่อยาสามัญ</h3></strong>
          <strong><h5>Bismuth subsalicylate tab 1048 mg</h5></strong>
          <hr />
          <!-- <div class="box"> -->
            <b-field label="อาการที่แพ้" label-position="on-border">
              <b-input placeholder="มีผื่นแดงรอบปาก" rounded> </b-input>
            </b-field>
            <b-field label="สถานที่ได้รับ" label-position="on-border">
              <b-input placeholder="XXXXXXXXX" rounded> </b-input>
            </b-field>
            <b-field label="บันทึกเพิ่มเติม" label-position="on-border">
              <b-input placeholder="ตัวอย่าง มีผื่นแดงรอบปาก" rounded> </b-input>
            </b-field>
            <br>
            <br>
          <!-- </div> -->
          <!-- <div class="buttons has-addons is-centered">
            <b-button class="button" size="is-medium" type="is-primary is-light">บันทึก</b-button>
          </div> -->

          <div class="buttons" style="justify-content: center">
            <b-button rounded type="is-primary is-light" size="is-medium" expanded>แก้ไข</b-button>
            <b-button rounded type="is-danger is-light" size="is-medium" expanded>ลบรายการยานี้</b-button>
          </div>
        </div>
      </div>

      <!-- </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'SaveAllergic',
};
</script>

<style></style>
