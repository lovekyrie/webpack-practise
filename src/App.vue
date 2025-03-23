<script setup lang="ts">
import { ref } from 'vue'

const msg = ref<string>('hello world')
</script>

<template>
  <div class="msg">
    {{ msg }}
  </div>
</template>

<style scoped lang="less">
.msg {
  font-size: 18px;
  margin: 40px 0 0;
  color: #42b983;
}
</style>
