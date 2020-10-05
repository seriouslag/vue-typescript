<template>
<div>
  <hello
    :enthusiasm="enthusiasm"
    :name="name"
    @increment="increment"
    @decrement="decrement"
  />
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Hello from './components/Hello.vue';
import Enthusiasm from './logic/enthusiasm';

export default defineComponent({
  components: {
    Hello,
  },
  setup (_props, _ctx) {
    const name = ref('World');
    return {
      name,
      ...Enthusiasm(),
    };
  },
});
</script>
