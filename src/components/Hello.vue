
<template>
<div>
    <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
    <button :disabled="isDecrementDisabled" @click="decrement">-</button>
    <button @click="increment">+</button>
    {{ sayHello }}
</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
    },
    enthusiasm: {
      type: Number,
      required: true,
    },
  },
  setup (props, ctx) {
    const increment = () => ctx.emit('increment');
    const decrement = () => ctx.emit('decrement');
    const sayHello = computed(() => `Count ${props.enthusiasm}`);
    const exclamationMarks = computed(() => {
      let returnString = '';
      if (props.enthusiasm) {
        for(let i = 0; i < props.enthusiasm; i++) {
          returnString += '!';
        }
      }
      return returnString;
    });
    const isDecrementDisabled = computed(() => props.enthusiasm <= 0);
    return {
      increment,
      decrement,
      sayHello,
      exclamationMarks,
      isDecrementDisabled,
    };
  },
});
</script>

<style lang="scss">

    .greeting {
        font-size: 20px;
    }

</style>
