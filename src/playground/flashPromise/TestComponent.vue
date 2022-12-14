<template>
  <div>
    <button id="send-btn" @click="handleClick()">button</button>
    {{ message }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      message: "",
    };
  },
  methods: {
    async handleClick() {
      const response = Promise.resolve({ data: "value" });
      response.then(() => {
        this.message = "非同期処理が完了しました。";
        console.log("非同期ない");
      });
      console.log("非同期外");
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
