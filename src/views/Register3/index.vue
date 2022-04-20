<template>
  <div style="background-color: rgb(121, 87, 213)">
    <div style="background-color: rgb(121, 87, 213); max-height: 56px"></div>
    <!-- <section>
            <b-image
                :src="require('@/assets/logo.png')"
                alt="The Buefy Logo"
                ratio="601by200"
                :rounded="rounded">
            </b-image>
        </section> -->
    <section
      class="hero is-white is-fullheight"
      style="border-radius: 60px 60px 0 0; margin-top: 1rem; padding: 1rem"
    >
      <div>
        <div class="content has-text-black" style="padding: 0.5rem">
          <br />
          <strong><h2 style="margin-bottom: 0.5rem">การขออนุญาตเข้าถึงข้อมูล</h2></strong>
          <p>&emsp; This is a four spaces gap</p>
          <br />
        </div>
        <div>
          <b-field>
            <b-checkbox  v-model="isDisable" type="is-primary" size="is-medium" required>
              เข้าใจเนื้อหาทั้งหมด
            </b-checkbox>
          </b-field>
        </div>
        <div
          class="buttons"
          style="justify-content: center; margin-top: 2.5rem; margin-bottom: 6rem"
        >
          <b-button
            rounded
            type="is-primary"
            size="is-medium"
            expanded
            disabled="isDisable === false"
          >
            <router-link to="/home">เสร็จสิ้น</router-link></b-button
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'RegisterPrivacyPage',
  data() {
    return {
      isDisable: false,

    };
  },
};
</script>

<style>
.input {
  margin-bottom: 0.5rem;
}
</style>
