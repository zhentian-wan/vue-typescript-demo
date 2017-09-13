<template>
    <div>
        <MyCheckbox :label="checkbox.label" :id="checkbox.id" v-model="checkbox.checked"/>
        {{JSON.stringify(checkbox)}}
        <h3 v-colorDirective.color="'green'">HelloTs</h3>
        <router-link to="/">Hello</router-link>
    </div>
</template>
<script lang="ts">

import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import colorDirective from '../color-directive'
import MyCheckbox from './MyCheckBox.vue'

@Component({
    directives: {
        colorDirective
    },
    components: {
        MyCheckbox
    }
})
export default class HelloTs extends Vue {

    checkbox = {
        label: 'Fancy checkbox',
        id: 'checkbox-id',
        checked: true
    }

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

