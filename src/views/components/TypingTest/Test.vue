<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-10">
        <h4 class="text-white-50 mb-3">Просто начни печатать и тест начнется</h4>
        <SelectChar class="rounded text-wrap bg-dark p-3" :string="string" :selectChar="nowStep" :uncorrectChar="uncorrectChar" />
      </div>
      <div class="col-2 p-3 rounded text-wrap bg-dark border-radius-5">
        <div class="fs-1 fw-bold">
          Скорость: {{typingSpeed}}
        </div>
        <div>
          <span>Точность: {{typingAccuracy}}</span>
        </div>
        <div>
          <span>Пройденное время: {{testTime}}</span>
        </div>
      </div>
      <div class="my-3 ">
        <button v-on:click="PrevStep()" class="btn btn-primary px-2 mr-2">Назад</button>
        <button v-on:click="stopTest()" class="btn btn-danger px-2 mx-2 ">Заново</button>    
      </div>
    

    
    </div>
  </div>
</template>

<script>
import SelectChar from '@/views/components/SelectChar'

export default {
  name: 'Test',
  components: {
      SelectChar
  },
  props: {
    string: String,
    step: Number
  },
  data() {
    return {
        nowKey: undefined,
        nowStep: 0,
        // oldStep: 0,
        uncorrectChar: false,
        exeptionKeyWord: ["Shift", "Control", "Escape", "GroupNext"],
        intervalID: undefined,
        testStarted: false,
        typingSpeed: 0,
        typingAccuracy: 0,
        testTime: 0,
        uncorrectedCharsCount: 1,
        tempStep: this.step,
    }
  },
  methods: {
      NextStep () {
        this.$emit("nextStep", this.tempStep++)
      },
      PrevStep () {
        this.$emit('prevStep', this.tempStep--)
      },
      finalTest () {
        this.$emit('testResult', {
          "accuracy": this.typingAccuracy,
          "speed": this.typingSpeed
        })
        this.NextStep()
      },
      handleKeyPress (e) {
        let key = e.key
        this.nowKey = key
        // console.info("key = ", key)
        if (!this.isExeptionKW(key)) {
          if (this.compareChar(key)) {
            this.uncorrectChar = false
            this.nextStep()
            if (this.nowStep == 1) {
              this.startTest()
            }
          } else {
              this.uncorrectedCharsCount++
              this.uncorrectChar = true
          }
        }
      },
      compareChar(char) {
          if (this.nowStep < this.string.length-1 ){
            let correctchar = this.string[this.nowStep]
            if (correctchar == char) {
                return true
            } else {
                return false
            }
          } else {
            // здесь будет что-то про конец теста
              // console.info("Конец теста!!")
              this.finalTest()
          }
          
      },
      prevStep () {
          if (this.nowStep != 0){
            --this.nowStep
          }
      },
      clearStep () {
          if (this.nowStep != 0) 
          this.nowStep = 0
          clearInterval(this.intervalID)
      },
      stopTest() {
        this.clearStep()
        clearInterval(this.intervalID)
        this.testStarted = false
        this.testTime = 0
      },
      nextStep() {
        if (this.nowStep >= 0 & this.nowStep <= this.string.length ) 
        this.nowStep++
      },
      startTest() {
        
        this.intervalID = setInterval(() => {
          this.testTime++
          this.typingSpeed = (this.nowStep/this.testTime*60).toFixed()
          this.accuracy(this.uncorrectedCharsCount)
        }, 1000)
        this.testStarted = true
      },
      accuracy (newValue) {
        this.typingAccuracy = (100 - newValue/this.string.length*100).toFixed()
      },
      isExeptionKW(key) {
        if  (this.exeptionKeyWord.find(kw => kw == key) === undefined) {
          return false
        } else {
          return true
        }
      },

  },
  mounted() {
    document.addEventListener("keydown", (e) => {
        this.handleKeyPress(e)
    });
    
  }
  
}
</script>
<style scoped>

</style>
