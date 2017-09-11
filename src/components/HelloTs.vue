<template>
    <div>
        <h3>HelloTs</h3>
        <router-link to="/">Hello</router-link>
    </div>
</template>
<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
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

