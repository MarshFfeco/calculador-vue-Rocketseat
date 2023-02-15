<script setup>
  import ViewCalc from './components/ViewCalc.vue'
  import KeyBoard from './components/keyboard.vue';
</script>

<template>
  <main id="container">
    <div id="calculator">
      <ViewCalc />
      <KeyBoard />
    </div>
  </main>
</template>

<style scoped>
  #calculator {
    width: 356px;
    height: 566px;

    padding-top: 54px;
    padding-inline: 32px;
    padding-bottom: 32px;

    border-radius: 48px;

    background-color: #2D2A37;

    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25), 0 188px 52px rgba(0, 0, 0, 0.01), 0 120px 48px rgba(0, 0, 0, 0.4), 
        0 68px 41px rgba(0, 0, 0, 0.15), 0 30px 30px rgba(0, 0, 0, 0.26), 0 8px 17px rgba(0, 0, 0, 0.29), 
        inset 0 6px 8px rgba(255, 255, 255, 0.1), inset 0 -4px 5px rgba(0, 0, 0, 0.22);
  }
</style>
