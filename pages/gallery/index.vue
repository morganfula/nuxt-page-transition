<template>
	<div :class="general.pageBg">
		<NuxtLayout
			name="custom"
			title="Gallery"
			:page-name="$route.name">
			<div class="page-content">
				<nuxt-link
					v-for="(_, i) in 10"
					:key="i"
					class="page-content__photo hover-image"
					:to="`/gallery/${i + 1}`">
					<img
						src="/1.jpg"
						alt="" />
				</nuxt-link>
			</div>
		</NuxtLayout>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
	.page-content {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
		align-items: flex-start;
	}
</style>
