<template>
  <div>
    <div class="mx-2 mb-3">
        <h1>Оцени свои клавиатурные скилы</h1>
    </div>
    <div class=" mx-2">
      <div v-if="testStep == 0">
        <Setup :step="testStep" @nextStep="nextStep"/>
      </div>
      <div v-else-if="testStep == 1">
        <Test :step="testStep" @testResult="resultTest" @nextStep="nextTestStep" @prevStep="prevTestStep" :string='string' />
      </div>
      <div v-else-if="testStep == 2">
        <TestResult :result="result" :step="testStep" @prevStep="prevTestStep" />
      </div>
    </div>
  </div>
</template>

<script>
import Setup from '@/views/components/TypingTest/Setup'
import Test from '@/views/components/TypingTest/Test'
import TestResult from '@/views/components/TypingTest/TestResult'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'TypingTest',
  components: {
      Setup,
      Test,
      TestResult
  },
  data() {
      return {
        result: undefined,
        string: "",
        // string: "Как принято считать, стремящиеся вытеснить традиционное производство, нанотехнологии, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут функционально разнесены на независимые элементы! Но выбранный нами инновационный путь обеспечивает актуальность укрепления моральных ценностей. Имеется спорная точка зрения, гласящая примерно следующее: диаграммы связей превращены в посмешище, хотя само их существование приносит несомненную пользу обществу",
      }
  },
  methods: {
    ...mapActions(['nextTestStep', 'prevTestStep', 'fetchTextFT', 'fetchTextBI']),
    resultTest (ctx) {
      this.result = ctx
    },
    nextStep () {
      this.getText()
      this.nextTestStep()
    },
    getText() {
      if (this.sourceSelected.name === "FishText") {
        this.fetchTextFT(this.sentenceCount)
      } else if (this.sourceSelected.name === "BaconIpsum") {
        this.fetchTextBI(this.sentenceCount)
      }
    },
    watchString(v) {
      if ( v != "" && v != undefined ) {
        this.string = v

      }
    }
  },
  computed: {
    ...mapGetters(['testStep', 'textFT', 'textBI', 'sentenceCount', 'sourceSelected'])
  },
  watch: {
    textFT: 'watchString',
    textBI: 'watchString'
  },
  mounted () {
    this.getText()
  }
  
    
}

</script>
<style>
</style>
