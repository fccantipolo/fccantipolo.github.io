const hamburger = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
});

console.log(hamburger, navList);