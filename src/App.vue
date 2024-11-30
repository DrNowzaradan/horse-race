<script setup>
import HorseList from './components/HorseList.vue'
import Header from './components/Header.vue'
import ProgramList from './components/ProgramList.vue'
import ResultsList from './components/ResultsList.vue'
import Simulator from "./components/Simulator.vue"
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

//set horses condition between 1 to 100 randomly
store.dispatch('setHorsesCondition')

const horseList = computed(() => store.state.horses) 
const programList = computed(() => store.state.fixture)
const resultsList = computed(() => store.state.raceResults)
const currentRound = computed(() => store.state.currentRound)
const currentRoundDistance = computed(() => store.state.distance)

</script>

<template>
  <Header></Header>
  <main class="flex flex-wrap mx-auto container py-24 gap-10 relative">
    <div class="absolute top-10 left-1/2 -translate-x-1/2 text-lg font-medium" v-if="programList.length != 0">{{ currentRound + 1 }}. Round - {{ currentRoundDistance }}m</div>
    <HorseList :list="horseList" />
    <Simulator />
    <ProgramList :list="programList" />
    <ResultsList v-if="resultsList.length != 0" :list="resultsList" />
  </main>
</template>

<style scoped>

</style>
