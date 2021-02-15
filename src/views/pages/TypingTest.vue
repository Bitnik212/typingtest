<template>
  <div>
    <div class="px-5 pb-2">
        <h1>Оцени свои клавиатурные скилы</h1>
    </div>
    <div class=" m-5">
        
        <Test :string="string" />
        
    </div>
    <Setup></Setup>
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
          string: "Как принято считать, стремящиеся вытеснить традиционное производство, нанотехнологии, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут функционально разнесены на независимые элементы! Но выбранный нами инновационный путь обеспечивает актуальность укрепления моральных ценностей. Имеется спорная точка зрения, гласящая примерно следующее: диаграммы связей превращены в посмешище, хотя само их существование приносит несомненную пользу обществу",
      }
  }
  
    
}

// document.addEventListener('keypress', (e) => {
//     console.log("keypress", e.key);
// });



</script>
<style>
</style>
