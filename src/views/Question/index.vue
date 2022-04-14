<template>
<section
      class="hero is-white is-fullheight">
  <div style="background-color: rgb(121, 87, 213)">
    <section>
      <b-image
        :src="require('@/assets/logo2.jpeg')"
        alt="The Buefy Logo"
        ratio="5by3"
        :rounded="rounded"
      >
      </b-image>
    </section>
    <section
      class="hero is-white"
      style="border-radius: 60px 60px 0 0; margin-top: 1rem; padding: 1rem"
    >
      <div>
        <div class="content is-medium">
          <!-- <br> -->
          <h1 style="margin-top: 0; text-align: center; margin-bottom: 0.25rem">
            คำถามรักษาความปลอดภัย
          </h1>
          <p> คำถามรักษาความปลอดภัยตั้งขึ้นเพื่อใช้ในการยืนยันตัวตนในกรณีที่ผู้ใช้งานลืมรหัสผ่านในการเข้าใช้งาน
          </p>
          <!-- <h6 style="font-size:1rem; text-align:center">Welcome back you've been missed</h6> -->
        </div>
        <form class="box">
          <b-field label="คำถาม">
            <b-select
              rounded
              expanded
              required
              placeholder="Select a Question"
              icon="question"
              icon-pack="fas"
            >
              <option value="question1">สุนัขตัวแรกชื่อว่าอะไร</option>
              <option value="question2">บ้านเกิดของคุณชื่อ</option>
            </b-select>
          </b-field>
          <b-field label="คำตอบ">
            <b-input rounded expanded required placeholder="ใส่คำตอบ"></b-input>
          </b-field>

          <div class="buttons" style="justify-content: center">
            <b-button type="is-text"><router-link to="/question2">เพิ่มคำใบ้</router-link></b-button>
          </div>

          <!-- <div class="buttons" style="justify-content: right"><b-button type="is-text" size="is-small">Forget Password</b-button></div> -->
          <div class="buttons" style="justify-content: center; margin-top: 2rem">
            <b-button rounded type="is-primary" size="is-medium" expanded>
              <router-link to="/register3">Continue</router-link></b-button>
            <!-- <button class="button is-text">Register</button> -->
          </div>
        </form>
      </div>
    </section>
  </div>
</section>
</template>

<script>
export default {
  name: 'QuestionPage',
};
</script>

<style></style>
