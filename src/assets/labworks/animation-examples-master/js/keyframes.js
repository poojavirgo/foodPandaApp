const clickables = document.querySelectorAll('.clickable');

for (const clickable of clickables) {
	clickable.addEventListener('click', ev => {
		clickable.classList.add("clicked");
	});

	clickable.addEventListener('animationend', ev => {
		clickable.classList.remove("clicked");
	})	
}
