<template>
  <div>
    <button id="send-btn" @click="handleClick">button</button>
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
    handleClick() {
      setTimeout(() => (this.message = "非同期処理が完了しました。"), 3000);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
