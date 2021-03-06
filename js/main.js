//selectors
const aboutElements = document.querySelectorAll('.about>*');
const headings = document.querySelectorAll('section>h2');
const content = document.querySelectorAll('section>div');

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
	.from(aboutElements[3], { opacity: 0, scale: 1.05 })
	.to(aboutElements[0], { opacity: 0, height: 0 }, '+=0.8')
	.to(aboutElements[1], { opacity: 0, height: 0 });

//section loading
const projectsAnimate = gsap.timeline({
	duration: 1,
	ease: 'power1.out',
	delay: 4,
});

projectsAnimate
	.from(headings, { opacity: 0, x: -10 })
	.from(content, { opacity: 0, y: 20, stagger: 0.2 });

//execution
start.play();
projectsAnimate.play();
