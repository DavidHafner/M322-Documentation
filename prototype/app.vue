<template>
	<NuxtLayout :name="layout">
		<NuxtPage />
	</NuxtLayout>
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
