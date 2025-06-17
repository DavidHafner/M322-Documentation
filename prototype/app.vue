<template>
	<NuxtLayout :name="layout">
		<NuxtPage />
	</NuxtLayout>
</template>
<script setup lang="ts">
const layout = ref<"default">("default");
const pageStore = usePageStore();

pageStore.path = [];

onMounted(async () => {
	const pages = await (await fetch("/pages.json")).json();
	pageStore.pages = pages;
});
</script>
