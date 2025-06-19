<template>
	<button @click="toggleMenu" style="z-index: 99999">
		<svg
			view-box="0 0 100 100"
			height="30"
			width="30"
			xmlns="http://www.w3.org/2000/svg"
			class="mr-3"
		>
			<rect
				x="0"
				y="0"
				width="100%"
				height="5%"
				class="fill-base-content stroke-none transition-all duration-500 origin-center"
				ref="rect1"
			/>
			<rect
				x="0"
				y="47.5%"
				width="100%"
				height="5%"
				class="fill-base-content stroke-none transition-all duration-500 origin-center"
				ref="rect2"
			/>
			<rect
				x="0"
				y="95%"
				width="100%"
				height="5%"
				class="fill-base-content stroke-none transition-all duration-500 origin-center"
				ref="rect3"
			/>
		</svg>
	</button>
</template>

<script lang="ts" setup>
const isOpen = defineModel<boolean | undefined>("menu-open", {
	required: true,
});
const toggleMenu = () => {
	if (isOpen.value === undefined) {
		isOpen.value = true;
	} else {
		isOpen.value = !isOpen.value;
	}
	if (isOpen.value) {
		rect1.value?.classList.remove("close");
		rect2.value?.classList.remove("close");
		rect3.value?.classList.remove("close");
	} else {
		rect1.value?.classList.add("close");
		rect2.value?.classList.add("close");
		rect3.value?.classList.add("close");
	}
};

const rect1 = ref<SVGRectElement>();
const rect2 = ref<SVGRectElement>();
const rect3 = ref<SVGRectElement>();
</script>

<style>
.close:first-of-type {
	y: 47.5%;
	rotate: calc(calc(180deg + 45deg) * -1);
}
.close:nth-child(2) {
	rotate: calc(180deg + 45deg);
}
.close:last-of-type {
	y: 47.5%;
	rotate: calc(calc(180deg + 45deg) * -1);
}
</style>
