<script setup>
    import { computed } from 'vue';
    import { resultCalc } from '../store/index.js'

    import ViewCalcSto from './ViewCalcSto.vue';
    import ViewResult from './ViewResult.vue';

    const expression = resultCalc()

    const getNumber = computed({
      get() { return  expression.getExpression }
    })
    const getHistoc = computed({
      get() { return expression.getHistoric }
    })
</script>

<template>
  <div id="calc">
    <ViewCalcSto>
      <template #default>
        {{ getHistoc }}
      </template>
    </ViewCalcSto>
    <ViewResult>
      <template #default>
        {{ getNumber }}
      </template>
    </ViewResult>
  </div>
</template>

<style lang="scss" scoped>
    #calc {
        width: 288px;
        height: 86px;

        margin-bottom: 26px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
</style>