<script setup>
    import { computed, ref } from 'vue'
    import { useStore } from 'vuex'
    import HorseSvg from './HorseIcon.vue'

    const store = useStore()
    const raceFixture = computed(() => store.state.fixture)
    const showSimulator = computed(() => store.state.showSimulator)
    const currentRound = computed(() => store.state.currentRound)
    const raceRunning = computed(() => store.state.raceRunning)
    const currentRoundHorses = computed(() => store.state.currentRoundHorses)
    const raceResults = computed(() => store.state.raceResults)
    
    const getHorseStyle = (horse, index) => {
        const round = raceFixture.value[currentRound.value] // current round info
        const speed = horse.condition // representitive speed value of horse
        const distance = round.distance // distance of round
        const duration = distance / speed // movement speed of horse

        return {
            left: raceRunning.value ? '95%' : '63px', // moving to right
            transition: raceRunning.value ? `left ${duration}s linear` : 'none', // for smooth transition
        }
    }
</script>

<template>
    <div class="max-w-2xl w-full">
        <div v-if="showSimulator" class="simulator overflow-hidden relative h-[550px] w-full border-r-4 border-red-500 flex flex-col gap-y-1 justify-center items-center">
            <!-- renders 10 selected horses for the round -->
            <div v-for="(horse, index) in currentRoundHorses" :key="horse.id" class="relative h-16 w-full border border-neutral-400 ">
                <div class="horse py-2 px-3 leading-8"
                    :style="getHorseStyle(horse, index)">
                    <HorseSvg :color="horse.color" ></HorseSvg> 
                </div>
                <div class="w-[60px] h-full text-center inline-block py-2 px-3 bg-green-300 absolute leading-8" >
                    {{ index + 1 }}
                </div>
            </div>
        </div>
        
       
    </div>
    
</template>

<style>

.horse {
  position: absolute;
  width: 60px;
  text-wrap: nowrap;
  text-align: center;
  color: white;
  font-size: 12px;
}
</style>