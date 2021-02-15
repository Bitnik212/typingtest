<template>
  <div class="container-fluid">
    <div class="pb-4">
      <h2 class="mb-4">Это тренажер</h2>
      <h3>Здесь ты можешь потренироваться в слепой печати</h3>
    </div>

    <div v-if="step == 0">
      <Setup />
    </div>
    <div v-else-if="step == 1">
      <Typing :string="string" />
    </div>

  </div>
</template>

<script>
import Setup from '@/views/components/TypingTest/Setup'
import Typing from '@/views/components/trainer/Typing'

export default {
  name: 'Trainer',
  components: {
      Typing,
      Setup
  },
  data() {
      return {
          step: 0,
          string: "Как принято считать, стремящиеся вытеснить традиционное производство, нанотехнологии, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут функционально разнесены на независимые элементы! Но выбранный нами инновационный путь обеспечивает актуальность укрепления моральных ценностей. Имеется спорная точка зрения, гласящая примерно следующее: диаграммы связей превращены в посмешище, хотя само их существование приносит несомненную пользу обществу",
      }
  }
  
}



</script>

