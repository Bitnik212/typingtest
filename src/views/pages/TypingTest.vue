<template>
  <div>
    <div class="px-5 pb-2">
        <h1>Оцени свои клавиатурные скилы</h1>
    </div>
    <div class=" m-5">
      <div v-if="step == 0">
        <Setup :step="step" @nextStep="nextStep"/>
      </div>
      <div v-else-if="step == 1">
        <Test  :step="step" @nextStep="nextStep" :string="string" />
      </div>
      <div v-else-if="step == 2">
        fjhfkhgjfk
      </div>
        
    </div>
    
  </div>
</template>

<script>
import Setup from '@/views/components/TypingTest/Setup'
import Test from '@/views/components/TypingTest/Test'

export default {
  name: 'TypingTest',
  components: {
      Setup,
      Test
  },
  data() {
      return {
          step: 0,
          string: "Как принято считать, стремящиеся вытеснить традиционное производство, нанотехнологии, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут функционально разнесены на независимые элементы! Но выбранный нами инновационный путь обеспечивает актуальность укрепления моральных ценностей. Имеется спорная точка зрения, гласящая примерно следующее: диаграммы связей превращены в посмешище, хотя само их существование приносит несомненную пользу обществу",
      }
  },
  methods: {
    nextStep () {
      this.step++
    }
  }
  
    
}

// document.addEventListener('keypress', (e) => {
//     console.log("keypress", e.key);
// });



</script>
<style>
</style>
