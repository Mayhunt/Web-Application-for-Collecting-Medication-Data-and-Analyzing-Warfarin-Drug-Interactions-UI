/* eslint-disable no-restricted-syntax */
<template>
  <b-navbar :fixed-top="true">
    <template #brand>
      <b-navbar-item href="#">
        <router-link to="/home">
          <b-icon pack="fas" size="is-large" icon="home" type="is-white"> </b-icon>
        </router-link>
      </b-navbar-item>
      <b-navbar-item>
        <b-autocomplete
          rounded
          placeholder="ค้นหาด้วยชื่อยาสามัญ"
          icon="magnify"
          v-model="name"
          clearable
          :data="filteredDataArray"
          field="genericName"
          @select="(option) => (selected = option)"
          style="padding-left: 5px"
        >
          <template #empty>No results found</template>
        </b-autocomplete>
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="#">
        <router-link to="/currently-drug">
        <b-icon pack="mdi" icon="pill" type="is-primary" size="is-medium"> </b-icon>
          <span style="padding-left: 16px"></span><span>รายการยาที่ใช้ปัจจุบัน</span>
        </router-link>
      </b-navbar-item>
      <b-navbar-item>
        <router-link to="/allergic-drug">
          <b-icon pack="mdi" icon="exclamation" type="is-primary" size="is-medium"> </b-icon>
          <span style="padding-left: 16px"></span><span>รายการยาที่แพ้</span>
        </router-link>
      </b-navbar-item>
      <b-navbar-item>
        <router-link to="/allergic-pic">
          <b-icon pack="fas" icon="fa-solid fa-file-image" type="is-primary" size="is-medium">
          </b-icon>
          <span style="padding-left: 16px"></span><span>รูปภาพใบแพ้ยา</span>
        </router-link>
      </b-navbar-item>
      <hr />
      <b-navbar-item>
        <router-link to="/me">
          <b-icon pack="mdi" icon="account" type="is-primary" size="is-medium"> </b-icon>
          <span style="padding-left: 16px"></span><span>ข้อมูลส่วนตัว</span>
        </router-link>
      </b-navbar-item>
      <hr />
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons" style="justify-content: center">
          <b-button type="is-ghost">Privacy Statement</b-button>
          <b-button @click="sendData" type="is-ghost">Terms of Use</b-button>
          <router-link to="/sign-in">
            <b-icon pack="mdi" icon="logout" type="is-primary" size="is-medium"></b-icon>
          </router-link>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import axios from 'axios';
import router from '../router/index';
// import Store from '../store/index';

export default {
  name: 'NavBar',
  data() {
    return {
      data: [],
      name: '',
      selected: '',
      // allData: [],
    };
  },
  computed: {
    filteredDataArray() {
      // eslint-disable-next-line arrow-body-style
      return this.data.filter((option) => {
        // console.warn(this.selected);
        return option.genericName.toString().toLowerCase().indexOf(this.name.toLowerCase()) >= 0;
        // this.sendData(option);
      });
    },
  },
  mounted() {
    axios.get('http://localhost:8080/api/search').then((response) => {
      this.data = response.data;
      // this.allData = data.data;
      // data.data.forEach((item) => this.data.push(item.genericName));
      console.warn(this.selected);
    });
  },
  methods: {
    sendData(option) {
      this.$store.commit('setCaution', option.caution);
      // eslint-disable-next-line no-restricted-syntax
      // this.allData.forEach((item) => {
      //   if (item.genericName === this.selected) {
      //     console.warn(item.genericName);
      //   }
      // });

      // (item in this.allData) {
      //   if (item.genericName === this.selected) {
      //     console.log(item.caution);
      //   }
      // }
      // this.allData.forEach((item) => item.genericName === this.selected);
      // return console.log(item.caution);
      // this.$store.commit('setUsername', this.username);
      // this.$store.commit('setPassword', this.password);
    },
  },
  watch: {
    // whenever question changes, this function will run
    selected() {
      console.warn(this.selected);
      router.push({ name: 'Search' });
      this.$store.commit('setsearchdrugs', this.selected);
    },
  },
};
</script>
