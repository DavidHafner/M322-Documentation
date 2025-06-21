<template>
	<form class="p-5" @submit.prevent="submit" ref="formElement">
		<fieldset class="fieldset">
			<legend class="fieldset-legend">
				Name <span class="text-error">*</span>
			</legend>
			<input
				type="text"
				class="input validator"
				required
				placeholder="Mustermann"
			/>
		</fieldset>
		<fieldset class="fieldset">
			<legend class="fieldset-legend">
				Vorname <span class="text-error">*</span>
			</legend>
			<input type="text" class="input validator" required placeholder="Max" />
		</fieldset>
		<fieldset class="fieldset">
			<legend class="fieldset-legend">
				Email <span class="text-error">*</span>
			</legend>
			<input
				class="input validator"
				type="email"
				required
				placeholder="max.mustermann@example.com"
			/>
		</fieldset>

		<fieldset class="fieldset">
			<legend class="fieldset-legend">
				Nachricht <span class="text-error">*</span>
			</legend>
			<textarea
				class="textarea validator"
				required
				placeholder="Ihre Nachricht hier"
			/>
		</fieldset>
		<button class="btn btn-outline btn-primary mt-2" :disabled="loading">
			<span class="loading loading-spinner" v-if="loading"></span>
			{{ loading ? "wird gesendet" : "Absenden" }}
		</button>
	</form>
	<div
		role="alert"
		class="alert alert-success mx-5 transition-all duration-500"
		:class="{ 'opacity-0': !success }"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 shrink-0 stroke-current"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
		<span>Formular wurde versendet <br />(Im mockup nicht)</span>
	</div>
	<div class="flex justify-between px-16">
		<img
			src="https://static.xx.fbcdn.net/rsrc.php/v4/yx/r/tBxa1IFcTQH.png"
			alt=""
			class="w-12 h-12"
		/>
		<svg
			viewBox="0 0 1200 1227"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			role="none"
			class="u01b__icon-home fill-base-content w-12 h-12"
		>
			<path
				d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
			></path>
		</svg>
		<svg
			class="_96z7 w-12 h-12 fill-none"
			aria-labelledby="fb-app-logo"
			viewBox="0 0 500 500"
		>
			<title id="fb-app-logo">Facebook app logo</title>
			<g>
				<path
					class="fill-base-content"
					d="m500,250C500,111.93,388.07,0,250,0S0,111.93,0,250c0,117.24,80.72,215.62,189.61,242.64v-166.24h-51.55v-76.4h51.55v-32.92c0-85.09,38.51-124.53,122.05-124.53,15.84,0,43.17,3.11,54.35,6.21v69.25c-5.9-.62-16.15-.93-28.88-.93-40.99,0-56.83,15.53-56.83,55.9v27.02h81.66l-14.03,76.4h-67.63v171.77c123.77-14.95,219.7-120.35,219.7-248.17Z"
				></path>
				<path
					class="fill-none"
					d="m347.92,326.4l14.03-76.4h-81.66v-27.02c0-40.37,15.84-55.9,56.83-55.9,12.73,0,22.98.31,28.88.93v-69.25c-11.18-3.11-38.51-6.21-54.35-6.21-83.54,0-122.05,39.44-122.05,124.53v32.92h-51.55v76.4h51.55v166.24c19.34,4.8,39.57,7.36,60.39,7.36,10.25,0,20.36-.63,30.29-1.83v-171.77h67.64Z"
				></path>
			</g>
		</svg>
	</div>
</template>

<script lang="ts" setup>
const pageStore = usePageStore();

pageStore.addPageToPath("Kontakt", "/contact");
const loading = ref(false);
const success = ref(false);

const formElement = ref<HTMLFormElement>();

const submit = async () => {
	loading.value = true;
	await new Promise<void>((res) => setTimeout(res, 1000));
	loading.value = false;
	success.value = true;
	formElement.value?.reset();
	setTimeout(() => {
		success.value = false;
	}, 5000);
};
</script>

<style></style>
