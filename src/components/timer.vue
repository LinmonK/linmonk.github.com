<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    msg:Object
})

</script>
<template>
	<div :class="props.msg.mesg.toLowerCase()">
		<div class="content">
			<h2>{{props.msg.mesg}}</h2>
			<p>{{ props.msg.content }}</p>
			<a href="#">Read More</a>
		</div>
	</div>
</template>
