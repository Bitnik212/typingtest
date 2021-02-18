<template>
  <div class="container-fluid">
    <div class="pb-4">
      <h4 class="text-white-50">Здесь ты можешь потренироваться в слепой печати</h4>
    </div>
    <div v-if="step == 0">
      <Setup :step="step" @nextStep="nextStep" />
    </div>
    <div v-else-if="step == 1">
      <Typing :string='string' :step="step"  @prevStep="prevTrainerStep" />
    </div>
  </div>
</template>

<script>
import Setup from '@/views/components/TypingTest/Setup'
import Typing from '@/views/components/trainer/Typing'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Trainer',
  components: {
      Typing,
      Setup
  },
  data() {
      return {
          string: "Как принято считать, стремящиеся вытеснить традиционное производство, нанотехнологии, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут функционально разнесены на независимые элементы! Но выбранный нами инновационный путь обеспечивает актуальность укрепления моральных ценностей. Имеется спорная точка зрения, гласящая примерно следующее: диаграммы связей превращены в посмешище, хотя само их существование приносит несомненную пользу обществу",
      }
  },
  methods: {
    ...mapActions(['nextTrainerStep', 'prevTrainerStep', 'fetchTextFT', 'fetchTextBI']),
    getText() {
      if (this.sourceSelected.name === "FishText") {
        this.fetchTextFT(this.sentenceCount)
        this.string = this.textFT
      } else if (this.sourceSelected.name === "BaconIpsum") {
        this.fetchTextBI(this.sentenceCount, (r) => {
          this.string = r
        })
        this.string = this.textBI
        
      }
    },
    nextStep () {
      this.getText()
      this.nextTrainerStep()
    },
    watchString(v) {
      this.string = v
    }
  },
  computed: {
    ...mapGetters({
      step: 'trainerStep',
      sentenceCount: 'sentenceCount',
      textFT: 'textFT', 
      textBI: 'textBI',
      sourceSelected: "sourceSelected"
    })
  },
  watch: {
    textFT: 'watchString',
    textBI: 'watchString'
  },
  mounted () {
    this.getText()
    // this.fetchTextBI(1)
  }
  
}



</script>

