import { createStore } from 'vuex'
import horses from'../data/horses.json'
// Create a new store instance.
const store = createStore({
  state: {
    horses: horses,
    fixture: [],
    showSimulator: false,
    raceRunning: false,
    currentRound: 0,
    raceResults: [],
    currentRoundHorses: [],
    distance: 1200,
  },
  mutations: {
    //set the condition value randomly for each horse
    setHorsesCondition(state){
        state.horses.forEach(horse => {
            horse.condition = Math.floor(Math.random() * 100) + 1
        })
    },
    setFixture(state, fixture){
        state.fixture = fixture
    },
    setCurrentRound(state, round) {
        state.currentRound = round
    },
    setRaceRunning(state, isRunning) {
        state.raceRunning = isRunning
    },
    addRaceResult(state, result) {
        state.raceResults.push(result)
    },
    //if clicked on the generate button, refresh the whole process
    resetSimulator(state) {
        state.fixture = []
        state.currentRound = 0
        state.raceResults = []
        state.raceRunning = false
        state.distance = 1200
    },
    setSimulator(state, isShowing){
        state.showSimulator = isShowing
    },
    setCurrentRoundHorses(state){
        state.currentRoundHorses = state.fixture[state.currentRound].horses
    },
    setDistance(state, distance) {
        state.distance = distance
    }
  },
  actions: {
    setHorsesCondition({commit}){
        commit('setHorsesCondition')
    },
    //generates race fixture for 6 rounds and sets the simulator
    generateRaceFixture({commit, state}){
        commit('resetSimulator')
        const rounds = 6;
        const baseDistance = state.distance;
        const horsePerRound = 10;
        let fixture = []

        for (let i = 0; i < rounds; i++) {
            const distance = baseDistance + i * 200;
            const selectedHorses = [];
            const randomHorseNames = [];
            let horseCounter = 0;

            //selects 10 horses randomly for each round
            while(horseCounter < horsePerRound){
                const randomIndex = Math.floor(Math.random() * state.horses.length);
                if(randomHorseNames.includes(state.horses[randomIndex].name)){
                    continue;
                }
                const horseName = state.horses[randomIndex].name;
                randomHorseNames.push(horseName);
                horseCounter++;
            }

            randomHorseNames.forEach(name => {
                const horse = state.horses.find(h => h.name === name)
                selectedHorses.push(horse)
            })

            //adds the neccesary info to proper index of the fixture
            fixture.push({round: i + 1, distance: distance, horses: selectedHorses})
        }
        commit('setFixture', fixture)
        commit('setCurrentRoundHorses')
        commit('setSimulator', true)
    },
    runRace({commit, state}){
        commit('setCurrentRoundHorses')

        const currentRound = state.fixture[state.currentRound]
        if (!currentRound) return

        setTimeout(() => {
            commit('setRaceRunning', true)
        }, 500)

        //gets the value of the slowest horse
        const maxDuration = Math.max(
            ...currentRound.horses.map(horse => currentRound.distance / horse.condition)
        )
        
        //waits until the last horse is finished then sets the results
        setTimeout(() => {
          const sortedHorses = state.currentRoundHorses.slice().sort((a, b) => b.condition - a.condition)
          commit('addRaceResult', {
            round: state.currentRound + 1,
            distance: state.fixture[state.currentRound].distance,
            horses: sortedHorses
          })
          commit('setRaceRunning', false)
          if (state.currentRound + 1 < state.fixture.length) {
            commit('setCurrentRound', state.currentRound + 1)
            commit('setDistance', state.distance + 200)
          } 
        }, maxDuration * 1000 + 1000)
    }
  }

})

export default store