<template>
  <div style="background-color: rgb(121, 87, 213)">
    <b-collapse
      class="card"
      animation="slide"
      aria-id="contentIdForA11y3"
      style="background-color: rgb(121, 87, 213)"
    >
      <template #trigger="props">
        <div
          class="card-header"
          role="button"
          aria-controls="contentIdForA11y3"
          :aria-expanded="props.open"
          style="font-family: 'Kanit'"
        >
          <p class="card-header-title"><font size="6">รายการยาวันนี้</font></p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
          </a>
        </div>
      </template>

      <div class="card-content">
        <div class="content" style="font-family: 'Kanit'">รายการยาที่ต้องรับประทานวันนี้</div>
      </div>
    </b-collapse>

    <section
      class="hero is-white is-fullheight-with-navbar"
      style="border-radius: 60px 60px 0 0; margin-top: 1rem"
    >
      <div class="container" style="margin: 0 20px">
        <!-- <div class="container"> -->
        <div class="content is-medium" style="font-family: 'Kanit'">
          <br />
          <h2 style="margin-top: 0">INR</h2>
        </div>
        <div>
          <!-- <Chart></Chart> -->
          <!-- <b-image
            src="https://picsum.photos/600/400"
            alt="A random image"
            ratio="6by4"
            :rounded="rounded"
          ></b-image> -->
        </div>

        <div class="media-content" style="margin-top: 12px">
          <b-table
            :data="isEmpty ? [] : data"
            :bordered="isBordered"
            :striped="isStriped"
            :narrowed="isNarrowed"
            :hoverable="isHoverable"
            :loading="isLoading"
            :focusable="isFocusable"
            :mobile-cards="hasMobileCards"
          >
            <b-table-column
              field="date"
              label="Date"
              :th-attrs="dateThAttrs"
              :td-attrs="columnTdAttrs"
              centered
              v-slot="props"
            >
              <span class="tag is-primary is-light">
                {{ new Date(props.row.date).toLocaleDateString() }}
              </span>
            </b-table-column>

            <b-table-column
              field="expectedINR"
              label="Expected INR"
              :td-attrs="columnTdAttrs"
              centered
              v-slot="props"
            >
              {{ props.row.expectedINR }}
            </b-table-column>

            <b-table-column
              field="actualINR"
              label="Actual INR"
              :td-attrs="columnTdAttrs"
              centered
              v-slot="props"
            >
              {{ props.row.actualINR }}
            </b-table-column>
          </b-table>
        </div>
        <!-- </div> -->
        <div class="buttons" style="justify-content: center,font-family: 'Kanit'">
          <!-- <b-button rounded type="is-primary" size="is-medium" expanded>บันทึกค่า INR</b-button> -->

          <b-button
            rounded
            label="บันทึกค่า INR"
            type="is-primary"
            size="is-medium"
            @click="isCardModalActive = true"
            expanded
          />

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
                        <b-datepicker
                          placeholder="เลือกวันที่."
                          icon="calendar-today"
                          rounded
                          trap-focus
                        >
                        </b-datepicker>
                      </b-field>

                      <b-field label="ค่า INR ที่คาดหวัง">
                        <b-input placeholder="ใส่ค่า INR ที่คาดหวัง" rounded trap-focus></b-input>
                      </b-field>

                      <b-field label="ค่า INR ที่วัดได้จริง">
                        <b-input
                          placeholder="ใส่ค่า INR ที่วัดได้จริง"
                          rounded
                          trap-focus
                        ></b-input>
                      </b-field>
                      <div class="buttons" style="justify-content: center; margin-top: 2rem">
                        <b-button rounded type="is-primary" size="is-medium" expanded
                          >บันทึก</b-button
                        >
                      </div>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </b-modal>
          <!-- <b-button rounded type="is-danger" size="is-medium" expanded>แก้ไขค่า INR</b-button> -->
          <b-button
            rounded
            label="แก้ไขค่า INR"
            type="is-danger"
            size="is-medium"
            @click="isCardModalActive = true"
            expanded
          />

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
                        แก้ไขค่า INR
                      </h1>
                    </div>
                    <form class="box">
                      <b-field label="วันที่">
                        <b-datepicker
                          placeholder="เลือกวันที่."
                          icon="calendar-today"
                          rounded
                          trap-focus
                        >
                        </b-datepicker>
                      </b-field>

                      <b-field label="ค่า INR ที่คาดหวัง">
                        <b-input placeholder="ใส่ค่า INR ที่คาดหวัง" rounded trap-focus></b-input>
                      </b-field>

                      <b-field label="ค่า INR ที่วัดได้จริง">
                        <b-input
                          placeholder="ใส่ค่า INR ที่วัดได้จริง"
                          rounded
                          trap-focus
                        ></b-input>
                      </b-field>
                      <div class="buttons" style="justify-content: center; margin-top: 2rem">
                        <b-button rounded type="is-primary" size="is-medium" expanded
                          >บันทึก</b-button
                        >
                      </div>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </b-modal>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  // components: {
  //   Chart,
  // },
  name: 'HomePage',
  data() {
    const data = [
      { date: '2016/7/15 13:43:27', expectedINR: '1.5', actualINR: '1.5' },
      { date: '2016/8/15 13:43:27', expectedINR: '1.4', actualINR: '1.5' },
      { date: '2016/9/15 13:43:27', expectedINR: '2.1', actualINR: '1.5' },
      { date: '2016/10/15 13:43:27', expectedINR: '1.4', actualINR: '1.5' },
      { date: '2016/11/15 13:43:27', expectedINR: '2.1', actualINR: '1.5' },
      { date: '2016/12/15 13:43:27', expectedINR: '2.1', actualINR: '1.5' },
    ];
    return {
      data,
      isEmpty: false,
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isHoverable: false,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: false,
      isCardModalActive: false,
      // isOpen: true,
    };
  },
  methods: {
    handleSubmit() {
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing');
      });
    },
  },
};
</script>

<style></style>
