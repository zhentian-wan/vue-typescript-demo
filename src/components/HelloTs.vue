<template>
    <div>
        <h3 v-colorDirective.color="'green'">HelloTs</h3>
        <router-link to="/">Hello</router-link>
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
export default class HelloTs extends Vue {
    created() {
        console.log("HelloTs created!")
    }
    beforeRouteEnter(to, from, next) {
        console.log("HelloTs: beforeRouteEnter")
        next()
    }

    beforeRouteLeave(to, from, next) {
        console.log("HelloTs: beforeRouteLeave")
        next()
    }
}
</script>

