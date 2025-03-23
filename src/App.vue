<script setup>
import { computed, ref } from '@vue/reactivity';
const message = ref('Hello World')
const isActivity = ref(false)
const cls = computed(() => (isActivity.value ? 'active': 'deactive'))
const handleClick = () => {
  isActivity.value = !isActivity.value
}
</script>

<template>
  <div :class="['main', cls]">
    <h3>{{ message }}</h3>
    <button @click="handleClick">Toggle</button>
  </div>
</template>

<style scoped>
h3 {
  color: #42b983;
}
.main {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 20px 12px;
  transition: background 0.3s linear;
}
.activate {
  background: #000;
}
.deactivate {
  background: #fff;
}
</style>
