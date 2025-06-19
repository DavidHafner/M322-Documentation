<template>
	<div class="dock absolute bottom-0 left-0 right-0">
		<button
			@click="pageStore.goToPage({ path: '/qr', name: 'QR-Code scannen' })"
			class="pb-2"
			:class="{ 'dock-active': route.path === '/qr' }"
		>
			<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
			<svg
				class="size-[1.2em]"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M20 18V20H18M20 14H19L17 16M16 18H14V20M4 4H10V10H4V4ZM14 4H20V10H14V4ZM4 14H10V20H4V14ZM14 14V15H15V14H14Z"
					class="stroke-white stroke-1"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
				/>
				<path
					d="M17 7H17.001"
					class="stroke-white stroke-1"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
				/>
				<path
					d="M7 7H7.001"
					class="stroke-white stroke-1"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
				/>
				<path
					d="M7 17H7.001"
					class="stroke-white stroke-1"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
				/>
			</svg>
			<span class="dock-label">QR-Code scannen</span>
		</button>

		<button
			@click="pageStore.goToPage({ path: '/', name: 'home' })"
			class="pb-2"
			:class="{ 'dock-active': route.path === '/' }"
		>
			<svg
				class="size-[1.2em]"
				viewBox="0 0 24 24"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
			>
				<title>Map-Pin</title>

				<g
					id="Page-1"
					stroke="none"
					stroke-width="1"
					fill="none"
					fill-rule="evenodd"
				>
					<g id="Map-Pin">
						<rect
							id="Rectangle"
							fill-rule="nonzero"
							x="0"
							y="0"
							width="24"
							height="24"
						></rect>

						<path
							d="M19,9.8 C19,13.7585 13.6628,18.581 12.3092,19.7405 C12.1299,19.894 11.8701,19.894 11.6908,19.7405 C10.3372,18.581 5,13.7585 5,9.8 C5,6.04446 8.13401,3 12,3 C15.866,3 19,6.04446 19,9.8 Z"
							id="Path"
							class="stroke-white stroke-1"
							stroke-width="2"
							stroke-linecap="round"
						></path>

						<circle
							id="Oval"
							class="stroke-white stroke-1"
							stroke-width="2"
							stroke-linecap="round"
							cx="12"
							cy="10"
							r="2"
						></circle>
					</g>
				</g>
			</svg>
			<span class="dock-label">Karte</span>
		</button>

		<button
			@click="pageStore.goToPage({ path: '/settings', name: 'Einstellungen' })"
			class="pb-2"
			:class="{ 'dock-active': route.path === '/settings' }"
		>
			<svg
				class="size-[1.2em]"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
			>
				<g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt">
					<circle
						cx="12"
						cy="12"
						r="3"
						fill="none"
						stroke="currentColor"
						stroke-linecap="square"
						stroke-miterlimit="10"
						stroke-width="2"
					></circle>
					<path
						d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z"
						fill="none"
						stroke="currentColor"
						stroke-linecap="square"
						stroke-miterlimit="10"
						stroke-width="2"
					></path>
				</g>
			</svg>
			<span class="dock-label">Einstellungen</span>
		</button>
	</div>
</template>

<script lang="ts" setup>
const pageStore = usePageStore();
const route = useRoute();
</script>

<style></style>
