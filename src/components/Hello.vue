<template>
  <div class="hello">
    <h1 v-colorDirective="{color: 'red', backgroundColor: 'blue'}">{{ message }}</h1>
    <button @click="clicked">Click</button> {{sum.acum}}
    <ChildComp :msg="'What a good day!'"/>
    <router-link to="/hello-ts">Hello Ts</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {createDecorator} from 'vue-class-component'
import {Component, Watch, Provide} from 'vue-property-decorator'
import colorDirective from '../color-directive';

import ChildComp from './Child.vue';

const Log = (msg) => {
  return createDecorator((component, key) => {
    console.log("#Component", component);
    console.log("#Key", key); //log
    console.log("#Msg", msg); //App
  })
}

@Component({
  directives: {
    colorDirective
  },
  components: {
    ChildComp
  }
})
export default class Hello extends Vue {
  message: string = 'Welcome to Your Vue.js App'

  @Provide('users')
  users = [
    {
      name: 'test',
      id: 0
    }
  ]

  sum = {
    acum: 0
  }


  @Watch('sum', {deep: true})
  watchCount(newVal, oldVal) {
    console.log("newVal", newVal, "oldVal", oldVal)
  }

  @Log('fullMessage get called')
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
    this.sum.acum++;
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
