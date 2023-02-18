<template>
  <div id="stories">
    <p>
      <slot />
    </p>
  </div>
</template>

<style lang="scss" scoped>
    #stories {
        width: 248px;
        height: 28px;

        display: flex;
        align-items: center;

        text-align: right;

        color: #6B6B6B;
    }

    p {
        width: 100%;
    }
</style>