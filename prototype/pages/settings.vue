<template>
	<div class="join join-vertical bg-base-100">
		<div class="collapse collapse-arrow join-item border-base-300 border">
			<input type="radio" name="my-accordion-4" />
			<div class="collapse-title font-semibold">Accessibility</div>
			<div class="collapse-content text-sm">
				<span class="label">Schriftgrösse</span>
				<label class="input mb-4">
					<input
						type="range"
						min="25"
						max="200"
						v-model="fontSize"
						class="range"
					/>
					<span class="label max-w-16 min-w-16">{{ fontSize }}%</span>
				</label>
				<label class="toggle text-base-content">
					<input type="checkbox" />
					<svg
						aria-label="enabled"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="4"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M18 6 6 18" />
						<path d="m6 6 12 12" />
					</svg>
					<svg
						aria-label="disabled"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<g
							stroke-linejoin="round"
							stroke-linecap="round"
							stroke-width="4"
							fill="none"
							stroke="currentColor"
						>
							<path d="M20 6 9 17l-5-5"></path>
						</g>
					</svg>
				</label>
				<span class="label ml-4">Screen Reader</span>
				<br class="mb-4" />
				<label class="toggle text-base-content">
					<input type="checkbox" />
					<svg
						aria-label="enabled"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="4"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M18 6 6 18" />
						<path d="m6 6 12 12" />
					</svg>
					<svg
						aria-label="disabled"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<g
							stroke-linejoin="round"
							stroke-linecap="round"
							stroke-width="4"
							fill="none"
							stroke="currentColor"
						>
							<path d="M20 6 9 17l-5-5"></path>
						</g>
					</svg>
				</label>
				<span class="label ml-4">Farbenblinden Modus</span>
				<!-- Font Size Screen Reader Colorblind Mode -->
			</div>
		</div>
		<div class="collapse collapse-arrow join-item border-base-300 border">
			<input type="radio" name="my-accordion-4" />
			<div class="collapse-title font-semibold">Support</div>
			<div class="collapse-content text-sm">
				<a class="link md:link-hover" href="mailto:info@example.com">
					Email versenden
				</a>
			</div>
		</div>
		<div class="collapse collapse-arrow join-item border-base-300 border">
			<input type="radio" name="my-accordion-4" />
			<div class="collapse-title font-semibold">Datenschutz</div>
			<div class="collapse-content text-sm">
				Es werden keine Daten an den Server gesendet. (Wir haben keinen Server)
			</div>
		</div>
	</div>
	<label class="toggle text-base-content ml-4">
		<input type="checkbox" />
		<svg
			aria-label="enabled"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="4"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		</svg>
		<svg
			aria-label="disabled"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			<g
				stroke-linejoin="round"
				stroke-linecap="round"
				stroke-width="4"
				fill="none"
				stroke="currentColor"
			>
				<path d="M20 6 9 17l-5-5"></path>
			</g>
		</svg>
	</label>
	<span class="label ml-4 mt-4">Offline Modus</span>
</template>

<script lang="ts" setup>
const fontSize = ref(100);
</script>

<style></style>
