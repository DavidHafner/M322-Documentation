<template>
	<div>
		<NavBar v-model:menu-open="menuOpen" />
		<Menu :menu-open="menuOpen" />
		<slot />
		<Dock />
	</div>
</template>

<script lang="ts" setup>
const menuOpen = ref(true);
</script>

<style></style>
