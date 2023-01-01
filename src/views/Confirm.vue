<!-- main page -->
<template>
  <TopInfo />
  <div class="content-box">
    <div class="box-content">
      <div class="text-box">
        <p class="kor">
          {{ $route.query.name }} 님<br />제품을 수령하시겠습니까?
        </p>
        <p class="eng">Do you want to receive the product?</p>
      </div>
      <div class="content-btn">
        <!-- <button type="button" @click="openPickupBox" onclick="location.href='Complete';">예</button> -->
        <button type="button" @click="openPickupBox">예</button>
        <p>Yes</p>
      </div>
      <div class="content-btn">
        <button type="button" onclick="location.href='/';">아니오</button>
        <p>No</p>
      </div>
    </div>
  </div>
  <BottomCotent v-bind:charShow="charShow"></BottomCotent>
</template>

<script>
import { getDatabase, ref, update } from "firebase/database";
import BottomCotent from "../components/BottomCotent";
import TopInfo from "../components/TopInfo";

export default {
  name: "App",
  components: { BottomCotent, TopInfo },
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    value: "",
    charShow: true
  }),
  methods: {
    openPickupBox: function () {
      const db = getDatabase(this.$firebase);
      const updates = {};
      updates["/pick_201/door"] = true;
      update(ref(db), updates);
      updates["/pick_201/door"] = false;
      setTimeout(() => update(ref(db), updates), 2000);
      // setTimeout(() => location.href='Complete',600);
      this.$router.replace("Complete");

      // location.href='Complete';
    },
  },
  created() {
    this.value = this.$route.query.info;
  },
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
  color: #3e3a39;
}

.content-btn {
  float: left;
}

.box-content {
  display: inline-block;
  height: 100%;
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
