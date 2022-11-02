face.addEventListener('animationend', ev => {
	message.classList.remove('hidden');
})
face.addEventListener('click', ev => {
	face.classList.toggle("tired");
});
