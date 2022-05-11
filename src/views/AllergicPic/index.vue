<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <div
      class="hero is-fullheight-with-navbar"
      style="background-color: #f2effb; border-radius: 60px 60px 0 0; margin-top: 1rem"
    >
      <div class="container" style="margin: 0 20px">
        <div class="content is-medium">
          <div class="mt-1"></div>
          <h1>ใบแพ้ยา</h1>
        </div>
        <div
          class="box is-clickable has-text-centered"
          v-for="(allergic, index) in allergics"
          :key="index"
          style="border-radius: 30px 30px 30px 30px"
          @click="isImageModalActive = true"
        >
          <div>
            <b-image src="http://localhost:8080/api/storage?key=EB1YVYvR.png" alt="The Buefy Logo" ratio="2by1"> </b-image>
          </div>
          <div class="pb-1 pt-1"></div>

          <b-button
            class="button"
            rounded
            type="is-danger"
            size="is-small"
            icon-left="trash-can"
            @click="isCardModalActive = true"
            >ลบรูปใบแพ้ยา</b-button
          >
        </div>
        <!-- pop up -->
        <b-modal v-model="isImageModalActive">
          <p class="image">
            <b-image :src="require('@/assets/allergicpic2.png')" alt="i" :rounded="rounded">
            </b-image>
          </p>
        </b-modal>
        <!--  -->
        <div class="pb-5 pt-5"></div>
        <div class="pb-5 pt-5"></div>
        <!-- <div class="fixedbutton"> -->
        <!-- <b-button class="button is-medium is-fullwidth" type="is-primary">เพิ่มรูปใบแพ้ยา</b-button> -->
        <!-- </div> -->
        <div class="fixedbutton">
          <b-button
            @click="isAddModalActive = true"
            class="mt-4"
            rounded
            type="is-primary"
            size="is-medium"
            expanded
            >เพิ่มรูปใบแพ้ยา</b-button
          >
        </div>
        <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
          <div class="card">
            <div>
              <section
                class="hero is-white"
                style="border-radius: 60px 60px 60px 60px; margin-top: 1rem; padding: 1rem"
              >
                <div>
                  <div class="content is-medium">
                    <h4 style="margin-top: 0; text-align: center; margin-bottom: 0.25rem">
                      ลบรูปใบแพ้ยา
                    </h4>
                    <br />
                    <div class="columns is-mobile is-centered">ท่านต้องการลบรูปภาพใบแพ้ยานี้</div>
                  </div>

                  <div class="buttons" style="justify-content: center; margin-top: 2rem">
                    <b-button
                      class="button"
                      @click="(isCardModalActive = false), (isImageModalActive = false)"
                      type="is-danger"
                      size="is-medium"
                      rounded
                      expanded
                      >ลบรูป</b-button
                    >
                  </div>
                </div>
              </section>
            </div>
          </div>
        </b-modal>
        <b-modal v-model="isAddModalActive" :width="640" scroll="keep">
          <div class="card">
            <div>
              <section
                class="hero is-white"
                style="border-radius: 60px 60px 0 0; margin-top: 1rem; padding: 1rem"
              >
                <div>
                  <div class="content is-medium">
                    <h1 style="margin-top: 0; text-align: center; margin-bottom: 0.25rem">
                      เพิ่มรูปภาพใบแพ้ยา
                    </h1>
                  </div>
                  <div class="media-body" align="center">
                    <figure v-if="preview" class="image">
                      <b-image :src="preview" class="img-fluid" style="width: 80%" />
                    </figure>
                    <figure v-else class="image">
                      <img
                        style="width: 256px; height: 256px"
                        class="image"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/No_Preview_image_2.png/1024px-No_Preview_image_2.png"
                      />
                    </figure>
                  </div>
                  <div>
                    <!-- <div class="col-md-6"> -->
                    <!-- add image icon -->
                    <br />
                    <input type="file" accept="image/*" @change="previewImage" id="my-file" />
                    <!-- </div> -->
                  </div>
                  <div class="fixedbuttons" style="justify-content: center; margin-top: 2rem">
                    <b-button
                      @click="
                        addImage();
                        reloadPage();
                      "
                      rounded
                      type="is-primary"
                      size="is-medium"
                      expanded
                      >บันทึกรูปภาพ</b-button
                    >
                  </div>
                </div>
              </section>
            </div>
          </div>
        </b-modal>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AllergicPage',

  data: () => ({
    allergics: [
      {
        imgURL: '',
      },
      {
        imgURL: '',
      },
    ],
    data: {},
    isCardModalActive: false,
    isImageModalActive: false,
    isAddModalActive: false,
    preview: null,
    image: null,
    a: null,
  }),
  // mounted() {
  //   axios
  //     .get('http://localhost:8080/api/storage', {
  //       params: { key: 'R7YD7nsy.png' },
  //       responseType: 'arraybuffer',
  //     })
  //     .then((response) => {
  //       Buffer.from(response.data, 'base64');
  //       console.warn(response.request.responseURL);
  //     });
  // },
  methods: {
    async addImage() {
      // const user =  this.$store.getters.username,
      const fd = new FormData();
      fd.append('file', this.image);
      const result = await axios.post('http://localhost:8080/api/storage', fd, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      console.warn(result.data);
      const result1 = await axios.patch(`http://localhost:8080/api/inr/${this.selected.id}/update`, {
        followDate: this.selected.followDate,
        inrExpect: this.selected.inrExpect,
        inrMeasure: this.selected.inrMeasure,
      });
      console.warn(result1);
    },
    previewImage(event) {
      const input = event.target;
      console.warn(event.target.files[0]);
      if (input.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        };
        // eslint-disable-next-line prefer-destructuring
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
      console.warn(this.image);
    },
    reloadPage() {
      window.location.reload();
      console.warn('reload');
    },
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
.hero .navbar {
  background: rgb(121, 87, 213) !important;
}
</style>
