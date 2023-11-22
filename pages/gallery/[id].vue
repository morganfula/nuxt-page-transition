<template>
	<div :class="general.pageBg">
		<NuxtLayout
			name="custom"
			:title="`project-${$route.params.id}`"
			:page-name="`project-${$route.params.id}`">
			<div class="page-content">
				<div
					v-for="(_, i) in 3"
					:key="i"
					class="page-content__block">
					<div class="page-content__block-photo">
						<img
							src="/1.jpg"
							alt="" />
					</div>

					<div class="page-content__block-text p1">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
						rerum nostrum reiciendis architecto id sapiente, hic voluptatem
						fugit minus suscipit commodi vel amet rem.
					</div>

					<div class="page-next__project">
						<nuxt-link
							class="page-next__project-link hover-fadein h2"
							:to="`/gallery/${+$route.params.id + 1}`">
							Next Project - {{ +$route.params.id + 1 }}
						</nuxt-link>
					</div>
				</div>
			</div>
		</NuxtLayout>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
	.page-content__block {
		padding: 32px 0;
	}

	.page-content__block-text {
		margin-top: 16px;
	}

	.page-next__project {
		padding-bottom: 32px;
		margin-top: 32px;
	}
</style>
