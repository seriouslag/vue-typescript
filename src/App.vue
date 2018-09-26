<template>
<div>
    <Hello initialEnthusiasm="1" name="World" />
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Hello from './components/Hello.vue';
// We declare the props separately
// to make props types inferable.
const AppProps = Vue.extend({
  props: {
    propMessage: String
  }
});

@Component({
  components: {
    Hello: Hello,
  }
})

export default class App extends AppProps {
  // inital data
  msg: number = 123
  // use prop values for initial data
  helloMsg: string = 'Hello, ' + this.propMessage
  // lifecycle hook
  mounted () {
    this.greet()
  };
  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  };
  // method
  greet () {
  };
}
</script>