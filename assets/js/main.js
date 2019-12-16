const navList = document.querySelector('.nav-list');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
	navList.classList.toggle('toggle');
});