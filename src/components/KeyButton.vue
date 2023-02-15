<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        keyValue: {
            type: String,
            required: true
        },
        classButton: {
            type: String,
            required: false,
            default: ''
        },
        isImg: {
            type: Boolean,
            required: false,
            default: false
        }
    })

    const valueClass = computed({
        get() {
            return [
                'button',
                props.classButton
            ]
        }
    })

    const image = computed({
        get() {
            return `/src/assets/${props.keyValue}`
        }
    })
</script>

<template>
  <button :class="[valueClass]">
    <p v-if="isImg === false">
      <slot />
    </p>
    <img
      v-else-if="isImg === true"
      :src="image"
      alt="Button Image"
    >
  </button>
</template>

<style scoped>
    .button {
        width: 64px;
        height: 64px;

        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        color: white;

        background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #2D2A37;

        box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 
        0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), 
        inset 0px 2px 3px rgba(255, 255, 255, 0.06);

        cursor: pointer;
    }

    .button:active {
        box-shadow: none;
    }

    .button p {
        font-size: 24px;
    }

    .button-special {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0.01%, rgba(255, 255, 255, 0.05) 100%), #462878;

        box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 
        0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), 
        inset 0px 2px 3px rgba(255, 255, 255, 0.1);
    }

    .button-equal {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%), #7F45E2;
        box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 
        0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), 
        inset 0px 2px 3px rgba(255, 255, 255, 0.1);
    }

    .button-delete-all { 
        color: #975DFA; 
        
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #2D2A37;

        box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 
        0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), 
        inset 0px 2px 3px rgba(255, 255, 255, 0.06);
        }
</style>