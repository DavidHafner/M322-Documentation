<template>
	<div
		class="transition-all origin-top bg-primary/50 z-40 w-screen h-screen absolute top-0 left-0 duration-500 flex justify-center items-center"
		:class="{ 'scale-y-0': props.menuOpen }"
	>
		<ul class="menu justify-center items-center">
			<li v-for="page of pageStore.pages">
				<NuxtLink
					:to="page.path"
					class="link link-hover font-bold text-2xl"
					@click="clearPath(page)"
					>{{ page.name }}</NuxtLink
				>
			</li>
			<!-- <li>
				<span class="menu-dropdown-toggle">Parent</span>
				<ul class="menu-dropdown">
					<li><a>Submenu 1</a></li>
					<li><a>Submenu 2</a></li>
				</ul>
			</li> -->
		</ul>
	</div>
</template>

<script lang="ts" setup>
const pageStore = usePageStore();
const props = defineProps<{ menuOpen: boolean }>();
const route = useRoute();
const clearPath = (page: { name: string; path: string }) => {
	if (route.path !== page.path) {
		pageStore.path = [];
	}
};
</script>

<style></style>
