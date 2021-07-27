//selectors
const aboutElements = document.querySelectorAll('.about>*');

//timelines
//opening
const start = gsap.timeline({
	duration: 1,
	ease: 'power1.out',
});

start
	.from(aboutElements[0], { opacity: 0, x: -10 })
	.from(aboutElements[1], { opacity: 0, x: -10 }, '+=0.5')
	.from(aboutElements[2], { opacity: 0, x: -10 })
	.from(aboutElements[3], { opacity: 0, scale: 1.05 });

//execution
start.play();
