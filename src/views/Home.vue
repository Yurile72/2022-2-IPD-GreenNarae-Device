<!-- main page -->
<template>
  <div class="main-body">
    <!-- promotion image -->
    <div class="promotion">
      <img alt="logo" src="../assets/pro1.png" />
    </div>
    <!-- button -->
    <div class="pickup-start">
      <!-- <button></button> -->
      <div class="start-btn">
        <a href="Select">
          <img src="../assets/start-btn.png" />
          <p>픽업하려면 화면을 터치해주세요.</p>
        </a>
      </div>
      <p id="pickup-start-eng">Touch the screen to pickup tour bread</p>
    </div>
    <BottomCotent v-bind:charShow="charShow"></BottomCotent>
  </div>
</template>

<script>
import BottomCotent from "../components/BottomCotent";
export default {
  name: "App",
  components: { BottomCotent },
  data: () => ({
    charShow: false,
  }),
};
</script>

<style>
body {
  overflow: hidden;
  width: 600px;
  height: 1042px;
}

.main-body {
  text-align: center;
  background-color: #fdf4e0;
  margin: 0px;
  /* width:100%;
    height:100%; */
  width: 600px;
  height: 1024px;
}

.promotion {
  margin-bottom: 10px;
}

.promotion img {
  width: 600px;
}

.pickup-start {
  margin-bottom: 100px;
}

#pickup-start-eng {
  font-size: 15px;
  margin: -15px;
}

.pickup-start button {
  background: #bdad8b;
  line-height: 50px;
  border: solid 2px grey;
  border-radius: 25px;
  font-size: 20px;
  color: white;
  width: 400px;
}

.start-btn {
  position: relative;
}

.start-btn img {
  height: 100px;
  vertical-align: middle;
}

.start-btn p {
  /* padding: 5px 10px; */
  /* text-align: center; */
  font-size: 21px;
  color: white;
  position: absolute;
  top: 28%;
  left: 50%;
  line-height: 2%;
  transform: translate(-50%, -50%);
}

.logo {
  float: left;
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
