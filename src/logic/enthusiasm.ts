import { ref } from 'vue';

export default function (initEnthusiasm = 0) {
  const enthusiasm = ref(initEnthusiasm);
  const increment = () => enthusiasm.value += 1;
  const decrement = () => {
    if (enthusiasm.value > 0)
      enthusiasm.value -= 1;
  };

  return {
    enthusiasm,
    increment,
    decrement,
  };
}
