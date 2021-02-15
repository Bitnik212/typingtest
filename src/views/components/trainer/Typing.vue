<template>
  <div>
    <!-- <h3>страница</h3> -->
    <SelectChar :string="string" :selectChar="nowStep" :uncorrectChar="!uncorrectChar" />
    <button v-on:click="prevStep()">Назад</button>
    <button v-on:click="clearStep()">заново</button>
  </div>
</template>

<script>
import SelectChar from '@/views/components/SelectChar'

export default {
  name: 'Typing',
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
        uncorrectChar: true
    }
  },
  methods: {
      
      handleKeyPress (e) {
          let key = e.key
        this.nowKey = key
        console.info("key = ", key)
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
