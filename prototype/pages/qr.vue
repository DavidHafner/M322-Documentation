<template>
	<div id="videoDiv">
		<video
			ref="videoElement"
			autoplay
			class="w-screen h-screen bg-black"
		></video>
	</div>
</template>
<script setup lang="ts">
const videoElement: Ref<null | HTMLVideoElement> = ref(null);

// const userAgent = window.navigator.userAgent.toLowerCase();
// const isPC = /.*windows.*/.test(userAgent);
const constraints = {
	frameRate: 30,
	width: window.innerWidth,
	height: window.innerHeight,
	resizeMode: ["crop-and-scale"],
	advanced: [{ aspectRatio: window.innerWidth / window.innerHeight, zoom: 1 }],
	// facingMode: !isPC ? { exact: "environment" } : undefined,
};

const success = (localMediaStream: MediaStream) => {
	if (!videoElement.value) {
		alert("no camera detected or permission denied");
		return;
	}
	videoElement.value.srcObject = localMediaStream;
};
onMounted(async () => {
	const cameraInput = await navigator.mediaDevices.getUserMedia({
		video: constraints,
		audio: false,
	});
	success(cameraInput);
});
</script>
