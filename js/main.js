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
	.to(aboutElements[0], { opacity: 0, height: 0 }, '+=1')
	.to(aboutElements[1], { opacity: 0, height: 0 });

//section loading
const projectsAnimate = gsap.timeline({
	duration: 1,
	ease: 'power1.out',
	delay: 2.5,
});

projectsAnimate
	.from(headings, { opacity: 0, x: -10 })
	.from(content, { opacity: 0, y: 20, stagger: 0.2 });

//execution
start.play();
projectsAnimate.play();

//intersection observer
// let options = {
// 	rootMargin: '0px',
// 	threshold: 1.0,
// };

// let observer = new IntersectionObserver((entries, observer) => {
// 	entries.forEach((entry) => {
// 		console.log(entry);
// 	});
// }, options);

// observer.observe(projects);
// observer.observe(experience);

window.addEventListener('scroll', () => {
	document.querySelector('body>.scroll').style.height =
		window.pageYOffset + 250 + 'px';
});
