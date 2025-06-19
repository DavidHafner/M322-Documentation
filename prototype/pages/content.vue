<template>
	<img :src="content.image" v-if="content" />
	<div class="p-5" v-if="content?.title">
		<h1 class="text-4xl">{{ content.title }}</h1>
		<ul class="timeline timeline-vertical -ml-60 pt-5">
			<li v-for="(section, id) of content.sections">
				<hr v-if="id !== 0" />
				<div class="timeline-middle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="h-5 w-5"
					>
						<circle r="8" class="fill-base-content" cx="10" cy="10"></circle>
					</svg>
				</div>
				<a
					class="timeline-end timeline-box link md:link-hover"
					:href="`#${encodeURIComponent(section.title)}`"
				>
					{{ section.title }}
				</a>
				<hr v-if="content.sections.length !== id + 1" />
			</li>
		</ul>
		<div v-for="(section, id) of content.sections">
			<h2 class="text-2xl font-bold" :id="section.title">
				{{ section.title }}
			</h2>
			<p
				v-for="(paragraph, id) of section.text"
				:class="{ 'pb-2': section.text.length !== id + 1 }"
			>
				{{ paragraph }}
			</p>
		</div>
	</div>
	<div class="p-5 flex" v-else>
		<span class="loading loading-spinner text-primary mr-5"></span>
		<h1 class="text-2xl">Inhalt wird geladen</h1>
	</div>
</template>

<script lang="ts" setup>
const content = ref<{
	title: string;
	sections: { title: string; text: string[] }[];
	image: string;
}>();

onMounted(async () => {
	content.value = await (await fetch("/content.json")).json();
});

const pageStore = usePageStore();
pageStore.addPageToPath("Inhalt", "/content");
</script>

<style></style>
