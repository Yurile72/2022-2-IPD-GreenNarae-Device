<template>
  <!-- logo -->
  <div class="char" v-show="CharShow">
    <img src="../assets/sungsim.png" alt="" />
  </div>
  <div class="logo">
    <img alt="logo" src="../assets/logo.png" />
  </div>
</template>
ß
<script>
export default {
  props: ['charShow'],
  components: {},
  data() {
    return {
      CharShow: this.charShow,
    }
  },
};
</script>

<style>
.char {
  bottom: 0;
  position: fixed;
  float: left;
}

.char img {
  width: 200px;
}

.logo {
  float: none;
  bottom: 0;
  position: fixed;
  text-align: center;
  width: 100%;
}

.logo img {
  width: 120px;
  margin-bottom: 50px;
}
</style>
