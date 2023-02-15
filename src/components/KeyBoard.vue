<script setup>
    import KeyButton from './KeyButton.vue';

    import listas from './ListButton.js'
</script>

<template>
  <div id="keyboard">
    <KeyButton
      v-for="lista in listas"
      :key="lista.keyValue"
      :key-value="lista.keyValue"
      :class-button="lista.classButton"    
    >
      <template #default>
        {{ lista.keyValue }}
      </template>
    </KeyButton>
  </div>
</template>

<style scoped>
    #keyboard {
        width: 292px;
        height: 368px;

        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    }
</style>