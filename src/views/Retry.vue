<!-- main page -->
<template>
  <TopInfo />

  <div class="content-box">
    <div class="box-content">
      <img src="../assets/qr-scan.png" alt="" width="200px" />
      <div class="text-box">
        <p class="kor">QR코드를 스캔해주세요.</p>
        <p class="eng">Please scan the QR code.</p>
      </div>
    </div>
  </div>
  <BottomCotent v-bind:charShow="charShow"></BottomCotent>
</template>

<script>
import BottomCotent from "../components/BottomCotent";
import TopInfo from "../components/TopInfo";

export default {
  name: "App",
  components: { BottomCotent, TopInfo },
  data: () => ({
    charShow: false,
  }),
};
</script>

<style>
.text-box p {
  margin-block: 2px;
}

.kor {
  font-size: 20px;
}

.eng {
  font-size: 16px;
}

.pickup-sel {
  position: relative;
  width: 100%;
  margin-top: 90px;
}

.pickup-sel a {
  color: black;
}

.content-box {
  width: 430px;
  height: 515px;
  background-image: url("../assets/info_box.png");
  background-size: cover;
  display: inline-block;
  margin-top: 90px;
}

.box-content img {
  margin-top: 70px;
  margin-bottom: 30px;
}
</style>
