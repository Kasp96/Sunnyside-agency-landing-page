const burgerBox = document.querySelector('.burger-box');
const burgerBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.nav-menu');

const handleBtn = () => {
	menu.classList.toggle('show');
	burgerBox.classList.toggle('active');
};

burgerBtn.addEventListener('click', handleBtn);
