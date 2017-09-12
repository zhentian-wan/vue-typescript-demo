<template>
  <div class="hello">
    <h1 v-colorDirective="{color: 'red', backgroundColor: 'blue'}">{{ message }}</h1>
    <button @click="clicked">Click</button>
    <router-link to="/hello-ts">Hello Ts</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import colorDirective from '../color-directive';

@Component({
  directives: {
    colorDirective
  }
})
export default class Hello extends Vue {
  message: string = 'Welcome to Your Vue.js App'

  get fullMessage() {
    return `${this.message} from Typescript`
  }

  created() {
    console.log('created');
  }

  beforeRouteEnter(to, from, next) {
    console.log("Hello: beforeRouteEnter")
    next()
  }

  beforeRouteLeave(to, from, next) {
    console.log("Hello: beforeRouteLeave")
    next()
  }

  clicked() {
    console.log('clicked');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
