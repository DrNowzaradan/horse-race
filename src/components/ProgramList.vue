<script setup>
import Table from './ProgramTable.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const fixture = computed(() => store.state.fixture)

</script>

<template>
  <div class="max-w-sm">
    <div v-if="fixture.length">
        <Table :list="fixture" header="Program"></Table>
    </div>
    <div v-else class="text-2xl font-medium">
        Click to Generate Program button to set a race fixture
    </div>
    
  </div>
  
</template>

<style scoped>

</style>
