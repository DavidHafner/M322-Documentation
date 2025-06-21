<template>
	<div class="h-screen w-screen overflow-hidden flex flex-col">
		<NavBar v-model:menu-open="menuOpen" />
		<Menu v-model:menu-open="menuOpen" />
		<div class="pb-16 grow overflow-scroll">
			<slot />
		</div>
		<Dock />
	</div>
</template>

<script lang="ts" setup>
const menuOpen = ref();
</script>

<style></style>
