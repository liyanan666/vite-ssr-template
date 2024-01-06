<script setup lang="ts">
import useStore from './store';
const store = useStore();
</script>

<template>
	<h1>Hello to Vue 3</h1>
	<router-view></router-view>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
