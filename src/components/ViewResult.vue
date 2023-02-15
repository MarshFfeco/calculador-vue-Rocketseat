<template>
  <div id="result">
    <img
      src="../assets/Equals.png"
      alt="Equal Button"
    >
    <h3><slot /></h3>
  </div>
</template>

<style scoped>
    #result {
        width: 248px;
        height: 50px;

        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #result h3 {
        width: 100%;
        height: 100%;
        
        text-align: right;

        font-size: 36px;
        color: #EBEBEB;
    }
</style>