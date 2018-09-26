
<template>
<div>
    <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
    <button v-bind:disabled="enthusiasm <= 0" @click="decrement">-</button>
    <button @click="increment">+</button>
    {{ sayHello }}
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Hello extends Vue {
    @Prop() name!: string;
    @Prop() initialEnthusiasm!: number;
    private enthusiasm: number = this.initialEnthusiasm;

    mounted() {
        this.$store.dispatch('appState/setCount', this.initialEnthusiasm);
    }
    
    increment(): void {
        this.$store.dispatch('appState/setCount', ++this.enthusiasm);
    }
    decrement(): void {
        this.$store.dispatch('appState/setCount', !!this.enthusiasm ? --this.enthusiasm : 0);
    }

    get sayHello(): string {
        return "Count " + this.count;
    }

    get getEnthusiasm(): number {
        return this.enthusiasm;
    }

    get exclamationMarks(): string {
        let returnString = "";
        if(this.enthusiasm) {
            for(let i = 0; i < this.count; i++) {
                returnString += '!';
            }
        }
        return returnString;
    }

    get count(): Number {
        return this.$store.getters['appState/getCount'];
    }
}
</script>

<style lang="scss">

    .greeting {
        font-size: 20px;
    }

</style>
