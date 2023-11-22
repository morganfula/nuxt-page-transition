<template>
	<div :class="`page ${props.pageName}`">
		<TheHeader />
		<div class="page-wrap _container">
			<TheTitle :text="props.title" />
			<slot />
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		title: String,
		pageName: String,
	});
</script>

<style lang="scss"></style>
