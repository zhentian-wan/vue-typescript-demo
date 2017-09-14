<template>
  <div>
      {{fullMessage}} -- {{users}}
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import {Component, Prop, Inject} from 'vue-property-decorator'

@Component({})
export default class Child extends Vue {
    message: string = "Hello";

    @Inject('users') users;

    @Prop({
        type: String,
        default: 'Default Value'
    }) msg: string;

    get fullMessage() {
        return `${this.message},${this.msg}`;
    }
}
</script>