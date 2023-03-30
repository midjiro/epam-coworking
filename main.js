const navbarBtn = document.querySelector('.navbar__btn');
const navbarMenu = document.querySelector('.navbar__menu');

navbarBtn.addEventListener('click', (e) => {
	navbarMenu.classList.toggle('navbar__menu--active');
	navbarBtn.classList.toggle('navbar__btn--active');
});

window.addEventListener('resize', (e) => {
	const width = window.innerWidth;
	if (width > 768 && navbarMenu.classList.contains('navbar__menu--active')) {
		navbarMenu.classList.remove('navbar__menu--active');
		navbarBtn.classList.remove('navbar__btn--active');
	}
});
