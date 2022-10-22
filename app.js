const hemburger = document.querySelector(`.hemburger`);
const navBarLing = document.querySelector(`.nav-bar__links`);

const hemburgerHandller = () => {
	navBarLing.classList.toggle(`nav_bar_dis`);
	document.querySelector(`body`).classList.toggle(`newBd`);
};

hemburger.addEventListener(`click`, hemburgerHandller);
