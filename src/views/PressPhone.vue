<!-- main page -->
<template>
  <TopInfo />
  <div class="content-box">
    <div class="box-content">
      <div class="keypad">
        <input type="text" v-model="value" />
        <KeypadBox @pressed="value = $event" :selfValue="value"></KeypadBox>
      </div>
      <div class="text-box">
        <p class="kor">주문시 사용한 전화번호를 입력해 주세요.</p>
        <p class="eng">Please scan the QR code.</p>
      </div>
    </div>
  </div>
  <BottomCotent v-bind:charShow="charShow"></BottomCotent>
</template>

<script>
import BottomCotent from "../components/BottomCotent";
import TopInfo from "../components/TopInfo";
// eslint-disable-next-line
import KeypadBox from "../components/KeypadBox";

export default {
  name: "App",
  components: { BottomCotent, TopInfo, KeypadBox },
  data: () => ({
    value: "",
    charShow: true,
  }),
};
</script>

<style scoped>
.keypad {
  margin-top: 15px;
  width: 260px;
  display: inline-block;
  margin-bottom: 10px;
}

.keypad input {
  font-size: 25px;
  text-align: center;
  background-color: none;
  /* border-radius: none; */
  border: none;
  margin-top: 20px;
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

.content-btn button {
  width: 130px;
  height: 45px;
  background-color: #86694a;
  border: #86694a;
  border-radius: 12px;
  color: white;
  font-size: 18px;
  margin: 20px;
}

.content-btn p {
  margin-block: -15px;
}
</style>
