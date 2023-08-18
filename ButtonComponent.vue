<script setup>
defineProps(["buttonText"]);
</script>

<template>
<button {{ buttonText }}></button>
<div>
    <img src=".compon" alt="">
</div>
</template>

<style scoped>
   button{
      padding: 12px 32px;
      border-radius: 40px;
      background: #fff;
   }
</style>