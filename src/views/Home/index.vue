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
          <p class="card-header-title" style="color: white"><font size="6">รายการยาวันนี้</font></p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
          </a>
        </div>
      </template>

      <div class="card-content">
        <div class="content" style="font-family: 'Kanit'; color: white">
          รายการยาที่ต้องรับประทานวันนี้
        </div>
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
        <div class="INRChart">
          <GChart type="LineChart" :options="options" :data="chartData" @ready="onChartReady" />
        </div>

        <div class="media-content" style="margin-top: 12px">
          <b-table
            :data="data"
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
                {{ new Date(props.row.followDate).toLocaleDateString() }}
              </span>
            </b-table-column>

            <b-table-column
              field="expectedINR"
              label="Expected INR"
              :td-attrs="columnTdAttrs"
              centered
              v-slot="props"
            >
              {{ props.row.inrExpect }}
            </b-table-column>

            <b-table-column
              field="actualINR"
              label="Actual INR"
              :td-attrs="columnTdAttrs"
              centered
              v-slot="props"
            >
              {{ props.row.inrMeasure }}
            </b-table-column>
          </b-table>
        </div>
        <!-- </div> -->
        <div class="buttons" style="justify-content: center,font-family: 'Kanit'">
          <!-- <b-button rounded type="is-primary" size="is-medium" expanded>บันทึกค่า INR</b-button> -->
          <div class="fixedbutton">
            <b-button
              rounded
              label="บันทึกค่า INR"
              type="is-primary"
              size="is-medium"
              @click="isCardModalActive = true"
              expanded
            />
            <b-button
              rounded
              label="แก้ไขค่า INR"
              type="is-danger"
              size="is-medium"
              @click="isCardModalActive2 = true"
              expanded
            />
          </div>
          <!-- popup-add inr -->
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
                          v-model="selectedDate"
                          placeholder="เลือกวันที่."
                          icon="calendar-today"
                          rounded
                          trap-focus
                        >
                        </b-datepicker>
                      </b-field>

                      <b-field label="ค่า INR ที่คาดหวัง">
                        <b-input
                          v-model.number="inrExpect"
                          placeholder="ใส่ค่า INR ที่คาดหวัง"
                          rounded
                          trap-focus
                        ></b-input>
                      </b-field>

                      <b-field label="ค่า INR ที่วัดได้จริง">
                        <b-input
                          placeholder="ใส่ค่า INR ที่วัดได้จริง"
                          rounded
                          trap-focus
                          v-model.number="inrMeasure"
                        ></b-input>
                      </b-field>
                      <div class="buttons" style="justify-content: center; margin-top: 2rem">
                        <b-button
                          @click="
                            addInr();
                            reloadPage();
                          "
                          rounded
                          type="is-primary"
                          size="is-medium"
                          expanded
                          ><router-link to="/home">บันทึก </router-link></b-button
                        >
                      </div>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </b-modal>

          <!-- popup edit inr -->
          <b-modal v-model="isCardModalActive2" :width="640" scroll="keep">
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
                        <b-button
                          class="button"
                          @click="
                            isCardModalActive2 = false;
                            reloadPage();
                          "
                          type="is-primary"
                          size="is-medium"
                          rounded
                          expanded
                          >บันทึก</b-button
                        >
                        <b-button
                          class="button"
                          @click="
                            isCardModalActive2 = false;
                            reloadPage();
                          "
                          type="is-danger"
                          size="is-medium"
                          rounded
                          expanded
                          >ลบรายการนี้</b-button
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

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

<script>
import { GChart } from 'vue-google-charts';
import axios from 'axios';
export default {
  name: 'HomePage',
  components: {
    GChart,
  },
  data() {
    return {
      selectedDate: new Date(),
      inrMeasure: Number(),
      inrExpect: Number(),
      isEmpty: false,
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isHoverable: false,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: false,
      isCardModalActive: false,
      isCardModalActive2: false,
      data: [],
      chartData: [
        ['date'],
        [],
      ],
      options: {
        // title: ''
        width: 350,
        height: 300,
        curveType: 'function', // curve
        lineWidth: 4,
        // colors: ['#e0440e'],
      },
    };
  },
  methods: {
    async addInr() {
      const result = await axios.post(`http://localhost:8080/api/inr`, {
        followDate: this.selectedDate,
        inrExpect: this.inrExpect,
        inrMeasure: this.inrMeasure,
      });
      console.warn(result);
    },
    reloadPage() {
      window.location.reload();
    },
  },
  mounted() {
    axios.get(`http://localhost:8080/api/inr`).then((response) => {
      this.data = response.data;
      console.log(response);
    });
  },
};
// สร้าง vue.config.js แล้ว แต่ดึงมาไม่ได้
</script>

<style>
.fixedbutton {
  position: fixed;
  padding-left: 15px;
  padding-right: 15px;
  left: 0%;
  bottom: 0px;
  width: 100%;
  height: 15%;
}
</style>
