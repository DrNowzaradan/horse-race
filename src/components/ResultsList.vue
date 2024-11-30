<script setup>
import Table from './ResultsTable.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const fixture = computed(() => store.state.fixture)
const results = computed(() => store.state.raceResults)


</script>

<template>
  <div class="max-w-sm">
    <Table :list="results" header="Results"></Table>
  </div>
</template>

<style scoped>

</style>
