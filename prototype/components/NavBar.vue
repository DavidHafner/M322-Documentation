<template>
	<div class="navbar bg-base-100 shadow-sm">
		<div class="flex">
			<a class="btn btn-ghost text-xl">Logo</a>
		</div>
		<div class="flex gap-2 grow w-0">
			<div class="breadcrumbs text-sm">
				<ul>
					<li v-for="pathPart of pageStore.path">
						<NuxtLink v-if="!pathPart.current" :to="pathPart.path">
							{{ pathPart.name }}
						</NuxtLink>
						<span v-else>{{ pathPart.name }}</span>
					</li>
				</ul>
			</div>
		</div>
		<MenuIcon class="z-50" v-model:menu-open="menuOpen" />
	</div>
</template>

<script lang="ts" setup>
const pageStore = usePageStore();
const menuOpen = defineModel<boolean>("menu-open", { required: true });
</script>

<style></style>
