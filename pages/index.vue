<template>
	<div :class="general.pageBg">
		<NuxtLayout
			name="custom"
			title="Home"
			:page-name="$route.name">
		</NuxtLayout>
	</div>
</template>

<script setup>
	definePageMeta(transition);
</script>

<style lang="scss" scoped></style>
