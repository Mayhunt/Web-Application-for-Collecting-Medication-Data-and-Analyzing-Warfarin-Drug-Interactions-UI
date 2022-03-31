<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <div
      style="
        background-color: rgba(189, 174, 230, 255);
        border-radius: 60px 60px 0 0;
        margin-top: 1rem;
      "
    >
      <div class="container" style="margin: 0 20px">
        <div class="content is-medium">
          <br />
          <h1>Allergic Drugs</h1>
        </div>
        <div class="box is-clickable" v-for="(AllergicAll, index) in allergics" :key="index">
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
                  xxxxxxx
                  <br />
                  <strong>Symptoms</strong>
                  <br />
                  xxxxxxx
                </p>
              </div>
            </div>
          </article>
        </div>
        <div class="fixedbutton">
          <b-button class="mt-4" rounded type="is-primary" size="is-medium" expanded>รูปใบแพ้ยา</b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AllergicAll',
  data: () => ({
    allergics: [
      {
        imgURL: '',
      },
      {
        imgURL: '',
      },
      {
        imgURL: '',
      },
      {
        imgURL: '',
      },
      {
        imgURL: '',
      },
      {
        imgURL: '',
      },
    ],
  }),
};
</script>

<style>
.fixedbutton {
  position: fixed;
  padding-left: 15px;
  padding-right: 15px;
  left: 0%;
  bottom: 0px;
  background-color: rgba(189, 174, 230, 255);
  width: 100%;
  height: 10%;
}
</style>
