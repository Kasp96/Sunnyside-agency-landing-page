const burgerBox = document.querySelector('.burger-box');
const burgerBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.nav-menu');
const handleBtn = () => {
	menu.classList.toggle('show');
	burgerBox.classList.toggle('active');
};
burgerBtn.addEventListener('click', handleBtn);


// const carouselBox = document.querySelector('.carousel-box');
// const carouselImages = document.querySelectorAll('.car-img');
// const leftBtn = document.querySelector('.btn-left');
// const rightBtn = document.querySelector('.btn-right');

// const itemWidthPercent = 25;
// const carouselSpeed = 3000;

// let index = 0;

// const handleCarousel = () => {
// 	index++;
// 	if (index >= carouselImages.length) {
// 		index = 0;
// 	}
// 	changeImg();
// };

// let startCarousel = setInterval(handleCarousel, carouselSpeed);

// const changeImg = () => {
// 	if (index > carouselImages.length - 1) {
// 		index = 0;
// 	} else if (index < 0) {
// 		index = carouselImages.length - 1;
// 	}
// 	carouselBox.style.transform = `translateX(${-index * itemWidthPercent}%)`;
// };

// const handleLeftBtn = () => {
// 	index--;
// 	if (index < 0) {
// 		index = carouselImages.length - 1;
// 	}
// 	resetInterval();
// };
// const handleRightBtn = () => {
// 	index++;
// 	if (index >= carouselImages.length) {
// 		index = 0;
// 	}
// 	resetInterval();
// };

// const resetInterval = () => {
// 	changeImg();
// 	clearInterval(startCarousel);
// };

// leftBtn.addEventListener('click', handleLeftBtn);
// rightBtn.addEventListener('click', handleRightBtn);
