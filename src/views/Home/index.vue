<template>
  <section class="hero is-primary is-fullheight-with-navbar">
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
            <p class="card-header-title" style="color: white">
              <font size="6">รายการยาวันนี้&ensp;<b-icon pack="fas" icon="tablets"></b-icon></font>
            </p>
            <a class="card-header-icon">
              <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
            </a>
          </div>
        </template>

        <div class="card-content" style="padding: 18px">
          <div class="content" style="font-family: 'Kanit'; color: white">
            <strong
              >เช้า&emsp;<b-icon type="is-warning" pack="mdi" icon="weather-partly-cloudy"></b-icon>
            </strong>
            <div v-for="(schedule, index) in drugSchedule" :key="index">
              <p v-if="schedule.drugAlert.time === 'Breakfast'">
                &emsp;-&ensp;{{ schedule.genericName }}
              </p>
            </div>
            <br />
            <strong
              >กลางวัน&emsp;<b-icon type="is-warning" pack="mdi" icon="weather-sunny"></b-icon>
            </strong>
            <div v-for="(schedule, index) in drugSchedule" :key="index">
              <p v-if="schedule.drugAlert.time === 'Lunch'">
                &emsp;-&ensp;{{ schedule.genericName }}
              </p>
            </div>
            <br />
            <strong
              >เย็น&emsp;<b-icon type="is-warning" pack="mdi" icon="weather-night"></b-icon>
            </strong>
            <div v-for="(schedule, index) in drugSchedule" :key="index">
              <p v-if="schedule.drugAlert.time === 'Dinner'">
                &emsp;-&ensp;{{ schedule.genericName }}
              </p>
            </div>
            <br />
            <strong>ก่อนนอน&emsp;<b-icon type="is-warning" pack="mdi" icon="bed"></b-icon> </strong>
            <div v-for="(schedule, index) in drugSchedule" :key="index">
              <p v-if="schedule.drugAlert.time === 'Before Bed'">
                &emsp;-&ensp;{{ schedule.genericName }}
              </p>
            </div>
          </div>
        </div>
      </b-collapse>

      <section
        class="hero is-white is-fullheight-with-navbar"
        style="border-radius: 60px 60px 0 0; margin-top: 1rem"
      >
        <div class="container" style="margin: 0 20px">
          <div class="content is-medium" style="font-family: 'Kanit'">
            <br />
            <h2 style="margin-top: 0">INR</h2>
          </div>
          <div class="INRChart">
            <GChart
              type="LineChart"
              :options="options"
              :data="chartData"
              @ready="onChartReady"
              :settings="{
                packages: ['corechart'],
                callback: () => {
                  this.drawData();
                },
              }"
            />
          </div>

          <div class="media-content" style="margin-top: 12px">
            <b-table
              :data="data"
              :narrowed="isNarrowed"
              :hoverable="isHoverable"
              :loading="isLoading"
              :selected.sync="selected"
              :mobile-cards="hasMobileCards"
              style="table-cell-border: 0"
            >
              <b-table-column
                field="date"
                label="วันที่"
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
                label="ค่า INR ที่คาดหวัง"
                :td-attrs="columnTdAttrs"
                centered
                v-slot="props"
              >
                {{ props.row.inrExpect }}
              </b-table-column>

              <b-table-column
                field="actualINR"
                label="ค่า INR ที่วัดได้"
                :td-attrs="columnTdAttrs"
                centered
                v-slot="props"
              >
                {{ props.row.inrMeasure }}
              </b-table-column>
            </b-table>
          </div>
          <div class="buttons" style="justify-content: center,font-family: 'Kanit'">
            <b-button
              rounded
              label="บันทึกค่า INR"
              type="is-primary"
              size="is-medium"
              @click="isCardModalActive = true"
              expanded
              style="margin-top: 20px"
            />
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
                        <div class="fixedbuttons" style="justify-content: center; margin-top: 2rem">
                          <b-button
                            @click="
                              addInr();
                            "
                            rounded
                            type="is-primary"
                            size="is-medium"
                            expanded
                            >บันทึก</b-button
                          >
                        </div>
                      </form>
                    </div>
                  </section>
                </div>
              </div>
              </b-modal>
                    <b-modal v-model="isCardModalActive2" :width="640" scroll="keep">
              <div class="card">
                <div>
                  <section
                    class="hero is-white"
                    style="border-radius: 60px 60px 0 0; margin-top: 1rem; padding: 1rem"
                  >
                      <div class="content is-medium">
                        <h1 style="margin-top: 0; text-align: center; margin-bottom: 0.25rem">
                          แก้ไขค่า INR
                        </h1>
                      </div>
                    <form class="box">
                      <b-field label="วันที่">
                        <b-datepicker
                          v-model="selected.followDate"
                          placeholder="เลือกวันที่."
                          icon="calendar-today"
                          rounded
                          trap-focus
                        >
                        </b-datepicker>
                      </b-field>

                      <b-field label="ค่า INR ที่คาดหวัง">
                        <b-input v-model="selected.inrExpect" rounded trap-focus></b-input>
                      </b-field>

                      <b-field label="ค่า INR ที่วัดได้จริง">
                        <b-input
                          v-model="selected.inrMeasure"
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
                            updateInr();
                          "
                          type="is-primary"
                          size="is-medium"
                          rounded
                          expanded
                          >บันทึก
                        </b-button>
                        <b-button
                          class="button"
                          @click="
                            isCardModalActive2 = false;
                            deleteInr();
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
                            v-model="selected.followDate"
                            placeholder="เลือกวันที่."
                            icon="calendar-today"
                            rounded
                            trap-focus
                          >
                          </b-datepicker>
                        </b-field>

                        <b-field label="ค่า INR ที่คาดหวัง">
                          <b-input v-model="selected.inrExpect" rounded trap-focus></b-input>
                        </b-field>

                        <b-field label="ค่า INR ที่วัดได้จริง">
                          <b-input
                            v-model="selected.inrMeasure"
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
                              updateInr();
                            "
                            type="is-primary"
                            size="is-medium"
                            rounded
                            expanded
                            >บันทึก
                          </b-button>
                          <b-button
                            class="button"
                            @click="
                              isCardModalActive2 = false;
                              deleteInr();
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
  </section>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

<script>
import { GChart } from 'vue-google-charts';
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
  name: 'HomePage',
  components: {
    GChart,
  },
  data() {
    return {
      drugSchedule: [],
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
      selected: { id: '', inrMeasure: Number(), inrExpect: Number(), followDate: new Date() },
      data: [],
      finalData: [],
      chartData: [],
      options: {
        // title: ''
        width: 350,
        height: 300,
        curveType: 'function', // curve
        lineWidth: 4,
        legend: { position: 'bottom' },
        // colors: ['#F1E065,#FF89E2'],
      },
    };
  },
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    async addInr() {
      const result = await axios.post(
        `https://senior-project-api-gl8ig.ondigitalocean.app/api/inr`,
        {
          followDate: this.selectedDate,
          inrExpect: this.inrExpect,
          inrMeasure: this.inrMeasure,
        }
      ).then((response) => {
          window.location.reload();
            // this.$router.push('/currently-dru');
            console.log(response);
          })
          .catch((error) => {
            // eslint-disable-next-line no-alert
            alert(error.response.data.message);
            console.log(error.response.data.message);
          });
      // console.warn(result);
    },
    async updateInr() {
      const result = await axios.patch(
        `https://senior-project-api-gl8ig.ondigitalocean.app/api/inr/${this.selected.id}/update`,
        {
          followDate: this.selected.followDate,
          inrExpect: this.selected.inrExpect,
          inrMeasure: this.selected.inrMeasure,
        }
      );
      console.warn(result);
    },
    async deleteInr() {
      const result = await axios.delete(
        `https://senior-project-api-gl8ig.ondigitalocean.app/api/inr/${this.selected.id}/delete`,
        {}
      );
      console.warn(result);
    },
    reloadPage() {
      window.location.reload();
    },
    // testData() {
    //   var round = 1;
    //   this.data.forEach((item) => {
    //     this.finalData.push([round, item.id, item.inrMeasure, inrExpect]);
    //     round = round + 1;
    //     // console.warn(this.finalData)
    //   });
    //   console.warn(this.finalData);
    //   // this.data.forEach((item) => this.finalData.push([item.id,item.genericName]));
    //   // console.warn(this.finalData)
    // },
    drawData() {
      var round = 1;
      this.data.forEach((item) => {
        this.finalData.push([round, Number(item.inrMeasure), Number(item.inrExpect)]);
        round = round + 1;
      });
      console.warn(this.finalData);
      this.chartData = new google.visualization.DataTable();
      this.chartData.addColumn('number', 'round');
      this.chartData.addColumn('number', 'ค่า INR ที่วัดได้');
      this.chartData.addColumn('number', 'ค่า INR ที่คาดหวัง');
      this.chartData.addRows(this.finalData);
    },
  },
  watch: {
    // whenever question changes, this function will run
    selected() {
      return (this.isCardModalActive2 = true);
      // console.warn(this.selected)
    },
  },
  mounted() {
    axios.get(`https://senior-project-api-gl8ig.ondigitalocean.app/api/inr`).then((response) => {
      this.data = response.data;
      console.warn(response);
    });
    axios
      .get(`https://senior-project-api-gl8ig.ondigitalocean.app/api/currently-drug`)
      .then((response) => {
        for (const i of response.data) {
          if (i.drugAlert !== null) {
            this.drugSchedule.push(i);
          }
        }
        // console.warn(this.drugSchedule);
      });
  },
};
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
.table tr.is-selected td,
.table tr.is-selected th {
  color: rgb(121, 87, 213);
  border: 0;
  border-color: transparent;
  background-color: #f2effb;
  text-decoration-style: solid;
}
</style>
