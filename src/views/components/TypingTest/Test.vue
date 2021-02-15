<template>
  <div>
    <div>
      <SelectChar :string="string" :selectChar="nowStep" :uncorrectChar="!uncorrectChar" />
      <button v-on:click="prevStep()">Назад</button>
      <button v-on:click="clearStep()">заново</button>
    </div>
    <div>
      <div>
        <span>Скорость: </span>
      </div>
      <div>
        <span>Точность: </span>
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
    string: String
  },
  data() {
    return {
        nowKey: undefined,
        nowStep: 0,
        uncorrectChar: true,
        exeptionKeyWord: ["Shift", "Control", "Escape"]
    }
  },
  methods: {
      handleKeyPress (e) {
        let key = e.key
        this.nowKey = key
        console.info(key)
        console.info("key = ", key)
        if (!this.isExeptionKW(key))
        if (this.compareChar(key)) {
            this.uncorrectChar = true
            this.nowStep++
        } else {
            this.uncorrectChar = false
        }
        console.info("nowStep = ", this.nowStep)
      },
      compareChar(char) {
          if (this.nowStep <= this.string.length ){
            let correctchar = this.string[this.nowStep]
            if (correctchar == char) {
                return true
            } else {
                return false
            }
          } else {
            // здесь будет что-то про конец теста
              console.info("(((((((")
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
      },
      nextStep() {
        if (this.nowStep >= 0 & this.nowStep <= this.string.length ) 
        this.nowStep++
      },
      isExeptionKW(key) {
        if  (this.exeptionKeyWord.find(kw => kw == key) === undefined) {
          console.info("bbb")
          return false
        } else {
          console.info("aaaa")
          return true
        }
      }
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
        this.handleKeyPress(e)
    })
  }
  
}
</script>
<style scoped>

</style>
