for (const img of document.querySelectorAll("img")) {
	img.addEventListener('click', ev => {
		img.classList.toggle("active");
	})
}
