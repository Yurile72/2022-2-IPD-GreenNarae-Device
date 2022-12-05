<!-- main page -->
<template>
  <TopInfo />

  <div class="content-box">
    <div class="box-content">
      <img src="../assets/box_main.png" alt="">
      <div class="text-box">
        <p class="kor">{{num}}호에서 제품을<br>수령해주세요.</p>
        <p class="eng">Please pick up the bread from the {{num}}th compartment.</p>
      </div>
      <p id="count">{{count}}초뒤 초기 화면으로 이동합니다.</p>
      
    </div>
  </div>

  <BottomCotent />
</template>

<script>
import BottomCotent from "../components/BottomCotent";
import TopInfo from "../components/TopInfo";

export default {
  name: "App",
  components: { BottomCotent, TopInfo },
  data: () => ({
    num: "402",
    count: "10"
  }),
  mounted() {
    this.countdown();
    setInterval(this.countdown.bind(this), 1000);
  },
  methods: {
    countdown() {
      this.count--;
      if (this.count <= 1) {
        this.$router.push({path: "/"});
      }
    }
  }
};
</script>

<style scoped>
.text-box {
  margin-top: 10px;
  margin-bottom: 30px;
}

.text-box p {
  margin-block: 2px;
}

.kor {
  font-size: 25px;
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
  color: #3E3A39;
}

.content-btn {
  float: left;
}

#count {
  font-size: 14px;
}

.box-content {
  display: inline-block;
  height: 100%;
}

.content-btn button{
  width: 130px;
  height: 45px;
  background-color: #86694A;
  border: #86694A;
  border-radius: 12px;
  color: white;
  font-size: 18px;
  margin: 20px;
}

.content-btn p {
  margin-block: -15px;
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
  margin-top: 90px;
  width: 350px;
  margin-bottom: 30px;
}
</style>
