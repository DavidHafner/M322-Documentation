<template>
	<div
		class="transition-all origin-top bg-base-100/50 backdrop-blur-xs z-40 w-screen h-screen absolute top-0 left-0 duration-500 flex flex-col items-center pt-20"
		:class="{
			'menu-close': menuOpen === false,
			'menu-open': menuOpen === true,
			'menu-start': menuOpen === undefined,
		}"
	>
		<div class="join">
			<div>
				<label class="input join-item border-none">
					<svg
						class="h-[1em] opacity-50"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<g
							stroke-linejoin="round"
							stroke-linecap="round"
							stroke-width="2.5"
							fill="none"
							stroke="currentColor"
						>
							<circle cx="11" cy="11" r="8"></circle>
							<path d="m21 21-4.3-4.3"></path>
						</g>
					</svg>
					<input type="text" placeholder="Suche" required />
				</label>
			</div>
			<button class="btn btn-neutral join-item">Suchen</button>
		</div>
		<div class="flex flex-col justify-center items-center grow">
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
	</div>
</template>

<script lang="ts" setup>
const pageStore = usePageStore();
const menuOpen = defineModel<boolean | undefined>("menuOpen", {
	required: true,
});
const route = useRoute();
const clearPath = (page: { name: string; path: string }) => {
	if (route.path !== page.path) {
		pageStore.path = [];
	}
	menuOpen.value = false;
};
</script>

<style>
.menu-close {
	animation: menu-close 500ms;
	transform: scale(1, 0);
}

.menu-start {
	animation: menu-close 0ms;
	transform: scale(1, 0);
}
.menu-open {
	animation: menu-open 500ms;
}
@keyframes menu-close {
	0% {
		opacity: 1;
		transform: scale(1, 1);
	}
	75% {
		opacity: 1;
		transform: scale(1, 0.08);
	}
	100% {
		transform: scale(1, 0.08);
		opacity: 0;
	}
}

@keyframes menu-open {
	0% {
		transform: scale(1, 0.08);
		opacity: 0;
	}
	25% {
		opacity: 1;
		transform: scale(1, 0.08);
	}
	100% {
		opacity: 1;
		transform: scale(1, 1);
	}
}
</style>
