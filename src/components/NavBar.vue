<template>
  <b-navbar :fixed-top="true">
    <template #brand>
      <b-navbar-item href="#">
        <b-icon pack="fas" size="is-medium" icon="home" type="is-white"> </b-icon>
      </b-navbar-item>
      <b-navbar-item>
        <b-autocomplete rounded placeholder="e.g. Anne" icon="magnify" style="padding-left: 20px">
        </b-autocomplete>
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="#">
        <b-icon pack="mdi" icon="pill" type="is-primary"> </b-icon>
        <span style="padding-left: 16px"></span><span>Drug Currently Used</span>
      </b-navbar-item>
      <b-navbar-item>
        <b-icon pack="mdi" icon="exclamation" type="is-primary"> </b-icon>
        <span style="padding-left: 16px"></span><span>Allergy Drug</span>
      </b-navbar-item>
      <hr />
      <b-navbar-item>
        <b-icon pack="mdi" icon="account" type="is-primary"> </b-icon>
        <span style="padding-left: 16px"></span><span>Profile</span>
      </b-navbar-item>
      <hr />
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons" style="justify-content: center">
          <b-button type="is-ghost">Privacy Statement</b-button>
          <b-button type="is-ghost">Terms of Use</b-button>
          <b-icon pack="mdi" icon="logout" type="is-primary"> </b-icon>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>
