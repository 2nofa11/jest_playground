<template>
  <div>
    <button id="send-btn" @click="handleClick()">button</button>
    {{ message }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export const get = () => Promise.resolve({ data: "value" });

export default defineComponent({
  data() {
    return {
      message: "",
    };
  },
  methods: {
    async handleClick() {
      const response = await axios.get("mock/service");
      this.message = response.data;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
