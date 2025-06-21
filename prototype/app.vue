<template>
	<NuxtLayout :name="layout" class="md:hidden">
		<NuxtPage />
	</NuxtLayout>
	<div class="w-screen h-screen hidden md:flex justify-center items-center">
		<div class="mockup-phone">
			<div class="mockup-phone-display">
				<iframe class="w-full h-full" :src="runtimeConfig.app.baseURL"></iframe>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const layout = ref<"default">("default");
const pageStore = usePageStore();
pageStore.path = [];

onMounted(async () => {
	const pages = await (
		await fetch(runtimeConfig.app.baseURL + "pages.json")
	).json();
	pageStore.pages = pages;
});
</script>
