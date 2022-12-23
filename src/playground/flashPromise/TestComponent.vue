<template>
  <div>
    <button id="send-btn" @click="handleClick()">button</button>
    {{ message }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
function dispMsg() {
  alert("時間切れです");
}

export default defineComponent({
  data() {
    return {
      message: "",
    };
  },
  methods: {
    async handleClick() {
      const response = Promise.resolve(
        window.setTimeout(() => {
          this.message = "非同期処理が完了しました。";
        }, 5000)
      ).then(function () {
        console.log("終わった");
      });
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
