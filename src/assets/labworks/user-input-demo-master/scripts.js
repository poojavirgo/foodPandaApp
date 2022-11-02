for(const input of [red, green, blue, hue]) {
	input.addEventListener('input', ev => {
		document.documentElement.style.setProperty(`--${input.id}`, input.value);
	});
}

for(const input of [sat, lig]) {
	input.addEventListener('input', ev => {
		document.documentElement.style.setProperty(`--${input.id}`, `${input.value}%`);
	});
}
