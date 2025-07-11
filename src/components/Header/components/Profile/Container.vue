<script setup>
import { ref } from 'vue';

const hideProfile = ref(true);

function showHide() {
  hideProfile.value = !hideProfile.value;
}
</script>

<template>
  <div
    @click="showHide"
    class="flex h-12 w-12 text-center items-center justify-center bg-white rounded-full text-blue-600 text-lg cursor-pointer">
    NK
  </div>

  <div v-if="!hideProfile">
    açılır menü divi
  </div>
</template>
