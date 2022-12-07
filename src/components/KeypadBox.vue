<template>
  <!-- <Keyboard @pressed="value = $event" :selfValue="value"></Keyboard> -->
  <div class="keypad">
    <button
      v-for="key in keys"
      :key="key"
      @click="press(key)"
      class="keypad-btn"
    >
      {{ key }}
    </button>
    <button class="keypad-btn" @click="clear()">&larr;</button>
    <button class="keypad-btn" @click="press(0)">0</button>
    <button class="keypad-btn" @click="submit()">확인</button>
  </div>
</template>

<script>
export default {
  props: ["selfValue"],
  data() {
    return {
      value: "",
      keys: [1,2,3,4,5,6,7,8,9],
    };
  },
  methods: {
    press(key) {
      this.value = `${this.value}${key}`;
    },
    clear(type) {
      if (type === "all") this.value = "";
      else this.value = this.value.substring(0, this.value.length - 1);
    },
    submit() {
      this.$router.push({name: 'Confirm', query: {name: this.value}})

    }
  },
  watch: {
    value() {
      this.$emit("pressed", this.value);
    },
    selValue() {
      this.value = this.selfValue;
    },
  },
  created() {},
};
</script>

<style scoped>
.keypad-btn {
  font-size: 19px;
  /* font-weight: 300; */
  background-color: #84684a;
  color: #ffffff;
  width: 52px;
  height: 52px;
  margin: 12px;
  border-radius: 50%;
  border: none;
}
</style>
