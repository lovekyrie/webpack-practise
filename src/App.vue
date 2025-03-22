<script setup>
import { ref } from 'vue'

const msg = ref('hello world')
</script>

<template>
  <div class="msg">
    {{ msg }}
  </div>
</template>
