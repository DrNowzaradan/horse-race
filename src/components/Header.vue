<template>
    <header class="bg-white border-b border-neutral-400">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div class="flex lg:gap-x-20 gap-x-10 mx-auto">    
          <button href="#" class="text-base/6 font-semibold text-gray-100 bg-neutral-900 px-5 py-2 rounded-lg" @click="generateFixture" :disabled="raceRunning">Generate Program</button>
          <button href="#" class="text-base/6 font-semibold text-gray-100 bg-neutral-900 px-5 py-2 rounded-lg" @click="startRound" :disabled="raceRunning || currentRound >= fixture.length">Start Round</button>
        </div>
      </nav>
    </header>
  </template>
  
<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore();
const raceRunning = computed(() => store.state.raceRunning)
const currentRound = computed(() => store.state.currentRound)
const fixture = computed(() => store.state.fixture)
const startRound = () => {
    store.dispatch('runRace')
};
const generateFixture = () => {
    store.dispatch("generateRaceFixture")
};
    
</script>