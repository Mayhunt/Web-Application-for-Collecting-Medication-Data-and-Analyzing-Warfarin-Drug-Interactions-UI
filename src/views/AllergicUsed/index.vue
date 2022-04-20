<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <div style="background-color: #f2effb; border-radius: 60px 60px 0 0; margin-top: 1rem">
      <div class="container" style="margin: 0 20px">
        <div class="content is-medium">
          <div class="mt-1"></div>
          <h1>Allergic Drugs</h1>
        </div>
        <div
          class="box is-clickable"
          v-for="(AllergicAll, index) in allergicDrug"
          :key="index"
          style="border-radius: 30px 30px 30px 30px"
        >
          <router-link to="/edit-allergic">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Generic Name</strong>
                    <br />
                    {{ AllergicAll.genericName}}
                    <br />
                    <strong>Symptoms</strong>
                    <br />
                    {{ AllergicAll.symptom}}
                  </p>
                </div>
              </div>
            </article>
          </router-link>
        </div>
        <div class="pb-5 pt-5"></div>
        <div class="pb-5 pt-5"></div>
        <div class="fixedbutton">
          <b-button class="mt-4" rounded type="is-primary" size="is-medium" expanded>
            <router-link to="/allergic-pic"> รูปใบแพ้ยา</router-link></b-button
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AllergicAll',
  data: () => ({
    allergicDrug: [],
  }),
  mounted() {
    axios.get('http://localhost:8080/allergic-drug').then((response) => {
      this.allergicDrug = response.data;
      console.log(response);
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
  background-color: #f2effb;
  width: 100%;
  height: 10%;
}
</style>
