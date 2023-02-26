<script setup>
    import timer from './timer.vue'
    import { defineProps } from 'vue';
    const props = defineProps({
        content: Object
    })
    const infos = props.content
//    console.log(props.content)
</script>

<template>
    <!-- <timer v-for="info of props.content">{{ props.content }}</timer> -->
    <!-- <div>{{props.content}}</div> -->
    <timer v-for="info in infos" :msg="info"> </timer>
</template>