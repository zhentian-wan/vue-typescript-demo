<template>
  <div>
      {{fullMessage}}
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator'

@Component({})
export default class Child extends Vue {
    message: string = "Hello";
    @Prop({
        type: String,
        default: 'Default Value'
    }) msg: string;

    get fullMessage() {
        return `${this.message},${this.msg}`;
    }
}
</script>