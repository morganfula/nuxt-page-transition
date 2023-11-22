<template>
	<div id="viewport">
		<ThePreloader />
		<slot />
	</div>
</template>

<script setup>
	onMounted(() => {
		useSmoothScroll();
	});
</script>

<style lang="scss"></style>
