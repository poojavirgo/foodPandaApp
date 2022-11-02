"use strict";

let queryParams = new URLSearchParams(window.location.search);
let currentSlide = queryParams.has('slide') ? queryParams.get('slide') : 0;
let filename = queryParams.has('file') ? queryParams.get('file') : 'index.md';
let slides;
let touchX;


function setSlide(slide_number) {
	currentSlide = slide_number;
	let previous = document.querySelector('#slideDeck section.current');
	let candidate = slides.item(slide_number);
	previous.classList.remove('current');
	candidate.classList.add('current');
	current.textContent = `${slide_number + 1} of ${slides.length}`;
	queryParams.set('slide', slide_number);
	window.history.replaceState({}, "", `${window.location.origin}${window.location.pathname}?${queryParams.toString()}`);
	if(slideDeck.classList.contains('map')) {
		slideDeck.focus();
		candidate.scrollIntoView(false);
	}
	progress.style.transform = `translateX(${(currentSlide+1) / slides.length * 100}%)`;
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

function prevSlide() {
	slideDeck.classList.add('backwards');
	currentSlide--;
	if(currentSlide < 0) { currentSlide = slides.length - 1; }
	setSlide(currentSlide);
}
function nextSlide() {
	slideDeck.classList.remove('backwards');
	currentSlide++;
	if(currentSlide >= slides.length) { currentSlide = 0; }
	setSlide(currentSlide);
}

function toggleMap() {
	slideDeck.classList.toggle('map');
	if(slideDeck.classList.contains('map')) {
		document.querySelector('#slideDeck section.current').scrollIntoView(false);
	}
}

function setMap(value) {
	if(value) {
		slideDeck.classList.add('map');
		document.querySelector('#slideDeck section.current').scrollIntoView(false);
	} else {
		slideDeck.classList.remove('map');
	}
}

function toggleFull() {
	document.body.classList.toggle('clean');
}
function setFull(value) {
	if(value) {
		document.body.classList.add('clean');
	} else {
		document.body.classList.remove('clean');
	}
}
function toggleConfig() {
	config.classList.toggle('active');
}

document.addEventListener('keydown', ev => {
	switch (ev.key) {
		case "ArrowRight":
			nextSlide();
			break;
		case "ArrowLeft":
			prevSlide();
			break;
		case "f":
			toggleFull();
			break;
		case "m":
			toggleMap();
			break;
		case "i":
			toggleConfig();
			break;
		case "Enter":
			if(slideDeck.classList.contains('map')) {
				slideDeck.classList.remove('map');
			}
			break;
	}
});

document.addEventListener('touchstart', ev => {
	touchX = ev.touches[0].clientX;
});
document.addEventListener('touchmove', ev => {
	if(touchX) {
		let moveX = touchX - ev.touches[0].clientX;
		if (moveX < -50) {
			prevSlide();
			touchX = null;
		}	else if (moveX > 50) {
			nextSlide();
			touchX = null;
		}
	}
});
