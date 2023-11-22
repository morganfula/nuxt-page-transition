<template>
	<div :class="general.pageBg">
		<NuxtLayout
			name="custom"
			title="About"
			:page-name="$route.name">
			<div class="page-content">
				<div
					v-for="(_, index) in 10"
					:key="index"
					class="page-content__block p1">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi animi
					culpa maxime natus, illo incidunt rem. Odit excepturi neque vitae
					autem animi cupiditate dolorum voluptates sunt, minus, harum
					praesentium ab commodi rem nemo debitis ratione fugiat quisquam
					officiis libero illo ut distinctio! Ducimus, beatae. Quibusdam
					repudiandae dignissimos illo amet ea! Lorem ipsum dolor sit, amet
					consectetur adipisicing elit. Eum corporis dolores voluptates ipsum ad
					earum quam sit expedita, laborum explicabo veniam voluptas id aliquid
					maxime eaque dolore iste unde doloremque mollitia obcaecati vel fugit
					voluptatum! Reprehenderit accusamus explicabo ipsam consequuntur non
					repellendus quidem illo nemo tempora rem voluptate, ab error!
				</div>
			</div>
		</NuxtLayout>
	</div>
</template>

<script setup>
	watch(
		() => general.isPreloaderVisible,
		() => {
			contentAnimation({
				type: 'text',
				element: '.page-content__block',
			});
		}
	);
</script>

<style lang="scss" scoped>
	.page-content__block {
		padding-bottom: 32px;
	}
</style>
