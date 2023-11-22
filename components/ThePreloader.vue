<template>
	<div class="preloader">
		<div class="preloader-percent h1">{{ percentage }}%</div>
	</div>
</template>

<script setup>
	const percentage = ref(0);

	onMounted(() => {
		const tl = gsap.timeline();

		tl.to(percentage, {
			progress: 100,
			duration: 1,
			onUpdate() {
				percentage.value = Math.floor(percentage.progress);
			},
			onComplete() {
				general.isPreloaderVisible = false;
				general.scrollLenis.start();
			},
		});

		tl.fromTo(
			'.preloader',
			{
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			},
			{
				clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
				duration: 1,
				ease: 'power4.inOut',
			}
		);
	});
</script>

<style lang="scss" scoped>
	.preloader {
		position: fixed;
		inset: 0;
		background: $color-white;
		z-index: $z-preloader;

		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
