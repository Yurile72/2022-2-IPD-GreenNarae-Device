<!-- main page -->
<template>
  <TopInfo />

  <div class="content-box">
    <div class="box-content">
      <div class="text-box">
        <p class="kor">{제품명}<br>제품을 수령하시겠습니까?</p>
        <p class="eng">Do you want to receive the product?</p>
      </div>
      <div class="content-btn">
        <button type="button" onclick="location.href='Complete';">예</button>
        <p>Yes</p>
      </div>
      <div class="content-btn">
        <button type="button" onclick="location.href='/';">아니오</button>
        <p>No</p>
      </div>
      
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
};
</script>

<style scoped>
.text-box {
  margin-top: 180px;
  margin-bottom: 110px;
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
  margin-top: 70px;
  margin-bottom: 30px;
}
</style>
