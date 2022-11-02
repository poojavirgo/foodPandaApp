showHello.checked = !JSON.parse(localStorage.getItem('skipHello'));
mapOn.checked = JSON.parse(localStorage.getItem('map'));
fullOn.checked = JSON.parse(localStorage.getItem('full'));

window.addEventListener('storage', ev => {
	console.log(ev);
});

dismiss.addEventListener('click', ev => {
	config.classList.remove('active');
	localStorage['skipHello'] = JSON.stringify(!showHello.checked);
	localStorage['full'] = JSON.stringify(fullOn.checked);
	localStorage['map'] = JSON.stringify(mapOn.checked);
});

configToggler.addEventListener('click', toggleConfig);

fullOn.addEventListener('click', ev => {
	setFull(fullOn.checked);
});
mapOn.addEventListener('click', ev => {
	setMap(mapOn.checked);
});


loadSlides(filename).then(container => {
	hljs.initHighlighting();
	slides = container.querySelectorAll('section');
	slides.item(0).classList.add('current');
	setSlide(parseInt(currentSlide));
	slides.forEach((slide, slide_number) => {
		slide.addEventListener('click', ev => {
			setSlide(slide_number);
		})
	})
	if(showHello.checked) {
		config.classList.add('active');
	}
	if(mapOn.checked) {
		toggleMap();
	}
	if(fullOn.checked) {
		toggleFull();
	}
	let boxToggle = document.getElementById('boxToggle');
	if(boxToggle) {
		boxToggle.addEventListener('click', ev => { box.classList.toggle('viewer') });
	}

	// from input.md examples
	let myInputInput = document.getElementById('myInputInput');
	let myInputOutput = document.getElementById('myInputOutput');
	let myChangeOutput = document.getElementById('myChangeOutput');
	if(myInputInput) {
		myInputInput.addEventListener('input', ev => {
			myInputOutput.textContent = myInputInput.value;
		});
		myInputInput.addEventListener('change', ev => {
			myChangeOutput.textContent = myInputInput.value;
		});
	}

	let clickable = document.getElementById('clickable');
	console.log(clickable);
	if(clickable) {
		clickable.addEventListener('click', ev => clickable.classList.toggle('clicked'));
	}

});
