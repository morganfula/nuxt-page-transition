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

<script setup>
	definePageMeta(transition);

  watch(
		() => [general.isTransitionFinish, general.isPreloaderVisible],
		([transitionFinish, preloaderVisible]) => {

      if(transitionFinish && !preloaderVisible) {

        contentAnimation({
				type: 'image',
				element: '.page-content__photo',
			});
        
      }
		}
	);
</script>

<style lang="scss" scoped>
	.page-content {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 16px;
		align-items: flex-start;
	}
</style>
