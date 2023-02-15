<script setup>
    import ViewCalcSto from './ViewCalcSto.vue';
    import ViewResult from './ViewResult.vue';
</script>

<template>
  <div id="calc">
    <ViewCalcSto>
      <template #default>
        1 + 1
      </template>
    </ViewCalcSto>
    <ViewResult>
      <template #default>
        2
      </template>
    </ViewResult>
  </div>
</template>

<style scoped>
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