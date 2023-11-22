export const firstScreenAnimation = ({ parent }) => {
	const parentEl = document.querySelector(parent);
	const header = parentEl.querySelector('.header');
	const title = parentEl.querySelector('.default-title__wrap');

	const tl = gsap.timeline();

	tl.from(title, {
		yPercent: 100,
		delay: 0.8,
		opacity: 0,
		clearProps: 'all',
	});

	tl.from(
		header,
		{
			yPercent: -100,
			clearProps: 'all',
		},
		'<'
	);
	console.log(parentEl, header);
};
