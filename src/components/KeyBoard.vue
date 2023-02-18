<script setup>
    import { resultCalc } from '../store/index.js'
    import { computed } from 'vue';

    import KeyButton from './KeyButton.vue';
    import listas from './ListButton.js'

  const expression = resultCalc()

  const expressionOptions = computed({
      get() { return expression.getExpression },
      set(value) { expression.addExpression(value) }
  })

  function verify(data) {
    if(expressionOptions.value.length >= 20) return

    console.log(expressionOptions.value.length)
    expressionOptions.value = data
  }

  const changeExpression = (data) => {
    switch(data) {
      case 'C':
        expression.remExpression()
        break
      case 'CE':
        expression.remove()
        break
      case '=':
        expression.equal()
        break
      default:
        verify(data)
    }
  }
</script>

<template>
  <div id="keyboard">
    <KeyButton
      v-for="lista in listas"
      :key="lista.keyValue"
      :key-value="lista.keyValue"
      :class-button="lista.classButton"   
      :is-img="lista.isImg" 
      :image-url="lista.imageUrl"
      @update="changeExpression"
    >
      <template
        v-if="!lista.isImg"
        #default
      >
        {{ lista.keyValue }}
      </template>
    </KeyButton>
  </div>
</template>

<style lang="scss" scoped>
    #keyboard {
        width: 292px;
        height: 368px;

        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    }
</style>