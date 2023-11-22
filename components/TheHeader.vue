<template>
	<header class="header">
		<nuxt-link
			class="header-link hover-fadein"
			v-for="(link, index) in links"
			:key="index"
			:to="link.href">
			{{ link.text }}
		</nuxt-link>
	</header>
</template>

<script setup>
	const links = [
		{ href: '/', text: 'main' },
		{ href: '/about', text: 'about' },
		{ href: '/gallery', text: 'gallery' },
	];
</script>

<style lang="scss" scoped>
	.header {
		position: fixed;
		width: 100%;
		left: 0;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;

		z-index: $z-header;
	}

	.header-link {
		margin: 0 20px;
		text-transform: uppercase;
		padding: 15px 0 20px;
		font-size: 24px;
	}

	.page_white .header {
		background: $color-white;
	}

	.page_black .header {
		background: $color-black;
	}
</style>
