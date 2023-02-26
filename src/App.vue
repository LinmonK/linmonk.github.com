<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import AllTimer from "./components/AllTimer.vue";
import { ref, reactive } from "vue";
import content1 from "@/js/countDown.js";
const month = ref(1);
const useContent = reactive(content1);
</script>

<template>
	<h1 class="head">各种倒计时</h1>
	<div class="out-wrapper">
		
    <AllTimer :content="useContent" />
	</div>
  
	<!-- <p>
    <router-link to="/hello">Press to test</router-link>
  </p> -->
	<!-- <router-view>	
</router-view> -->
</template>

<style scoped></style>
