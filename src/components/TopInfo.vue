<!-- main page -->
<template>
  <div class="top">
    <!-- back -->
    
    <!-- <a href="/"><img src="../assets/back-btn.png" alt="" /></a> -->
    <a @click="$router.go(-1)"><img src="../assets/back-btn.png" alt="" /></a>
    <div class="top-info">
      <p class="time">{{ time }}</p>
      <p class="location">{{ location }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    time: "2022.12.31 - 23:59",
    location: "성심당 은행동 본점",
  }),
  mounted() {
    this.updateNow();
    setInterval(this.updateNow.bind(this), 1000);
  },
  methods: {
    updateNow() {
      // https://cocobi.tistory.com/30
      let date = new Date();
      this.time =
        date.getFullYear() +
        "." +
        date.getMonth() +
        "." +
        date.getDate() +
        " - " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds();
    },
  },
};
</script>

<style>
.text-box p {
  margin-block: 2px;
}

.top {
  margin-top: 30px;
  margin-left: 30px;
  text-align: left;
  display: flex;
}

.top img {
  width: 75px;
  float: left;
}

.top-info {
  margin-top: 10px;
  margin-left: 10px;
  float: left;
}

.top-info p {
  margin-block: 2px;
}

.pickup-sel {
  position: relative;
  width: 100%;
  margin-top: 90px;
}
</style>
