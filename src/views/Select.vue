<!-- main page -->
<template>
  <TopInfo />

  <!-- button -->
  <div class="pickup-sel">
    <div class="text-box">
      <p class="kor">픽업하실 방식을 선택해주세요.</p>
      <p class="eng">Please select your pick-up method.</p>
    </div>
    <!-- 추후 PressPhone 으로 이동 -->
    <a href="Confirm">
      <div class="sel-box">
        <div class="box-content">
          <img src="../assets/keypad-btn.png" alt="" width="150px" />
          <div class="text-box">
            <p class="kor">전화번호 입력</p>
            <p class="eng">Enter your phone number</p>
          </div>
        </div>
      </div>
    </a>
    <a href="QRScan">
      <div class="sel-box">
        <div class="box-content">
          <img src="../assets/qr-btn.png" alt="" width="190px" />
          <div class="text-box">
            <p class="kor">QR 코드 조회</p>
            <p class="eng">QR code lookup</p>
          </div>
        </div>
      </div>
    </a>
  </div>

  <BottomCotent />
</template>

<script>
import BottomCotent from "../components/BottomCotent";
import TopInfo from "../components/TopInfo";

export default {
  name: "App",
  components: { BottomCotent, TopInfo },
};
</script>

<style>
body {
  text-align: center;
  background-image: url("../assets/background.png");
  background-size: cover;
  margin: 0px;
  width: 600px;
  height: 1024px;
  transition: opacity 0.65s 0.15s;
  color: #3e3a39;
}

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

.sel-box {
  width: 250px;
  height: 420px;
  background-image: url("../assets/sel_box.png");
  background-size: cover;
  display: inline-block;
  margin: 20px;
}

.box-content img {
  margin-top: 70px;
  margin-bottom: 30px;
}
</style>
