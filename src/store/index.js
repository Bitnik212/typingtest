import Vue from 'vue'
import Vuex from 'vuex'
import FishText from './modules/FishText'
import BaconIpsum from './modules/BaconIpsum'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    global: {
      test: 0,
      trainer: 0
    },
    sentenceCount: 1,
    sourceSelected: {
      "value": "fish-text.ru",
      "name": "FishText",
      "id": "1"
    },
    langSelected: {
      "name": "RU",
      "id": "1"
    },
    langs: [
      {
        "name": "Выберите язык:",
        "id": "0"
      },
      {
        "name": "RU",
        "id": "1"
      },
      {
        "name": "EN",
        "id": "2"
      }
    ],
    sources: {
      "RU": [
        {
          "value": "0",
          "name": "Выберите источник:",
          "id": "0"
        },
        {
          "value": "fish-text.ru",
          "name": "FishText",
          "id": "1"
        }
      ],
      "EN": [
        {
          "value": "0",
          "name": "Выберите источник:",
          "id": "0"
        },
        {
          "value": "baconipsum.com",
          "name": "BaconIpsum",
          "id": "1"
        }
      ]
    }
  },
  actions: {
    nextTestStep (ctx) {
      let gg = ctx.state.global.test
      ctx.commit("updateTestStep", ++gg)
    },
    prevTestStep (ctx) {
      let gg = ctx.state.global.test
      if (gg >= 0) {
        ctx.commit("updateTestStep", --gg)
      }
    },
    nextTrainerStep (ctx) {
      let gg = ctx.state.global.trainer
      ctx.commit("updateTrainerStep", ++gg)
    },
    prevTrainerStep (ctx) {
      let gg = ctx.state.global.trainer
      if (gg >= 0) {
        ctx.commit("updateTrainerStep", --gg)
      }
    },

  },
  mutations: {
    updateTestStep (state, testStep) {
      state.global.test = testStep
      console.info("testStep = ", testStep)
    },
    updateTrainerStep (state, trainerStep) {
      state.global.trainer = trainerStep
    },
    updateSentenceCount(state, sentenceCount) {
      state.sentenceCount = sentenceCount
    },
    updateSourceSelected(state, value) {
      state.sourceSelected = state.sources[state.langSelected.name].find( e => e.value == value) 
    },
    updateLangSelected(state, value) {
      state.langSelected = state.langs.find( e => e.id == value)
    }
  },
  getters: {
    testStep: (state) => {
      return state.global.test
    },
    trainerStep: (state) => {
      return state.global.trainer
    },
    sources: (state) => {
      return state.sources
    },
    sentenceCount(state) {
      return state.sentenceCount
    },
    langs (state) {
      return state.langs
    },
    langSelected (state) {
      return state.langSelected
    },
    sourceSelected (state) {
      return state.sourceSelected
    }
  },
  modules: {
    FishText,
    BaconIpsum
  }
})
