<template>
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87758.3488282039!2d8.34874882228855!3d46.57837236864863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4785716e2eb0c929%3A0x3859969bbe38a35d!2sDampfbahn%20Furka%20Bergstrecke!5e0!3m2!1sen!2sch!4v1750337739207!5m2!1sen!2sch"
		style="border: 0"
		class="w-full h-full"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	></iframe>
</template>

<script lang="ts" setup>
const pageStore = usePageStore();

pageStore.resetPath();
</script>

<style></style>
