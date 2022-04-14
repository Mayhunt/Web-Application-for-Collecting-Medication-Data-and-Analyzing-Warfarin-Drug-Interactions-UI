<template>
  <section>
    <div class="buttons">
      <b-button
        rounded
        label="บันทึกค่า INR"
        type="is-primary"
        size="is-medium"
        @click="isCardModalActive = true"
        expanded
      />
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
                <h1 style="margin-top: 0; text-align: center; margin-bottom: 0.25rem">
                  บันทึกค่า INR
                </h1>
              </div>
              <form class="box">
                <b-field label="วันที่">
                  <b-datepicker placeholder="เลือกวันที่." icon="calendar-today" rounded trap-focus>
                  </b-datepicker>
                </b-field>

                <b-field label="ค่า INR ที่คาดหวัง">
                  <b-input placeholder="ใส่ค่า INR ที่คาดหวัง" rounded trap-focus></b-input>
                </b-field>

                <b-field label="ค่า INR ที่วัดได้จริง">
                  <b-input placeholder="ใส่ค่า INR ที่วัดได้จริง" rounded trap-focus></b-input>
                </b-field>
                <div class="buttons" style="justify-content: center; margin-top: 2rem">
                  <b-button rounded type="is-primary" size="is-medium" expanded>บันทึก</b-button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </b-modal>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isCardModalActive: false,
    };
  },
};
</script>
