<template>
	<div class="h-screen w-screen overflow-hidden">
		<NavBar v-model:menu-open="menuOpen" />
		<Menu :menu-open="menuOpen" />
		<slot />
		<Dock />
	</div>
</template>

<script lang="ts" setup>
const menuOpen = ref();
</script>

<style></style>
