const main = document.querySelector("main");
const nav = document.querySelector("#nav");
const hamburgerBtn = document.querySelector(".hamburger");
const navMobile = document.querySelector("#navMobile");
const colorImgs = document.querySelectorAll(".color-img");
const colorBtns = document.querySelectorAll(".color-btn");
const linksMobile = document.querySelectorAll(".link-mobile");
const logo = document.querySelector(".logo");
const emptyHearts = document.querySelectorAll(".empty-heart");
const filledHearts = document.querySelectorAll(".filled-heart");
const footerYear = document.querySelector("#year");
const arrowBtn = document.querySelectorAll(".arrow-btn");
let triggerNav;
const currentDate = new Date();
let slider1 = 0;

const checkIfNavShouldBeFixed = () => {
	const mainPos = main.getBoundingClientRect();
	triggerNav = mainPos.top;

	if (triggerNav <= 90) {
		nav.classList.add("show-nav");
		nav.classList.remove("hide-nav");
		nav.classList.remove("absolute");
		nav.classList.add("fixed", "bg-orange-400", "shadow");
	} else if (
		triggerNav > 90 &&
		triggerNav < 200 &&
		nav.classList.contains("show-nav")
	) {
		nav.classList.remove("show-nav");
		nav.classList.add("hide-nav");
	} else if (triggerNav > screen.height * 0.5) {
		nav.classList.remove("hide-nav");
		nav.classList.add("absolute");
		nav.classList.remove("fixed", "bg-orange-400", "shadow");
	}
};

const toggleMobileNav = () => {
	if (!navMobile.classList.contains("active-mobile-nav")) {
		navMobile.classList.add("active-mobile-nav");
		navMobile.classList.remove("hide-mobile-nav");
	} else {
		navMobile.classList.add("hide-mobile-nav");
		navMobile.classList.remove("active-mobile-nav");
	}

	document.body.classList.toggle("hide-body");
	hamburgerBtn.classList.toggle("is-active");
};

const hideMobileNav = () => {
	document.body.classList.remove("hide-body");
	hamburgerBtn.classList.remove("is-active");
	navMobile.classList.remove("hide-mobile-nav");
	navMobile.classList.remove("active-mobile-nav");
};

function fillHeart() {
	this.classList.add("hidden");
	this.nextElementSibling.classList.remove("hidden");
}

function emptyHeart() {
	this.classList.add("hidden");
	this.previousElementSibling.classList.remove("hidden");
}

function changeImageColor() {
	switch (this.id) {
		case "orangeColor":
			colorImgs[0].classList.remove("hidden");
			colorImgs[1].classList.add("hidden");
			break;
		case "blueColor":
			colorImgs[0].classList.add("hidden");
			colorImgs[1].classList.remove("hidden");
			break;
	}
}

const setYearInFooter = () => {
	footerYear.textContent = currentDate.getFullYear();
};
setYearInFooter();

function switchSlide() {
	const slideDiv = this.parentElement.children[1];

	switch (this.id) {
		case "arrow-left":
			slideDiv.classList.remove("from-right-slide");
			slideDiv.classList.remove("to-right-slide");
			slideDiv.classList.remove("from-left-slide");
			slideDiv.classList.add("to-left-slide");

			setTimeout(() => {
				slideDiv.classList.remove("to-left-slide");
				slideDiv.classList.add("from-right-slide");
				slideDiv.children[slider1].classList.add("hidden");
				slider1++;
				if (slider1 === slideDiv.children.length) {
					slider1 = 0;
				}
				slideDiv.children[slider1].classList.remove("hidden");
			}, 300);
			break;
		case "arrow-right":
			slideDiv.classList.remove("from-left-slide");
			slideDiv.classList.remove("to-left-slide");
			slideDiv.classList.remove("from-right-slide");
			slideDiv.classList.add("to-right-slide");

			setTimeout(() => {
				slideDiv.classList.add("from-left-slide");
				slideDiv.classList.remove("to-right-slide");
				slideDiv.children[slider1].classList.add("hidden");
				slider1--;
				if (slider1 < 0) {
					slider1 = slideDiv.children.length - 1;
				}
				slideDiv.children[slider1].classList.remove("hidden");
			}, 300);
			break;
	}
}

window.addEventListener("scroll", checkIfNavShouldBeFixed);
hamburgerBtn.addEventListener("click", toggleMobileNav);
logo.addEventListener("click", hideMobileNav);

colorBtns.forEach((btn) => {
	btn.addEventListener("click", changeImageColor);
});

linksMobile.forEach((link) => {
	link.addEventListener("click", toggleMobileNav);
});

emptyHearts.forEach((heart) => {
	heart.addEventListener("click", fillHeart);
});

filledHearts.forEach((heart) => {
	heart.addEventListener("click", emptyHeart);
});

arrowBtn.forEach((arrow) => {
	arrow.addEventListener("click", switchSlide);
});

