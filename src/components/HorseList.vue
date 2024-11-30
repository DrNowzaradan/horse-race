<script setup>
import { ref } from 'vue'
import Table from './HorseTable.vue'

defineProps({
  list: Array,
})

</script>

<template>
  <div class="max-w-sm">
    <Table :list="list" header="Horse List"></Table>
  </div>
  
</template>

<style scoped>

</style>
