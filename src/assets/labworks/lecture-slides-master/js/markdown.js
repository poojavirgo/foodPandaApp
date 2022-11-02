const pattern = /^-----$/m;
const options = {
	tables: true
}
const converter = new showdown.Converter(options);

async function getMD(filename) {
	const response = await fetch(filename);
	return response.text();
}

function buildSlide(mdSlide) {
	const section = document.createElement('section');
	section.innerHTML = converter.makeHtml(mdSlide);
	return section;
}

async function loadSlides(filename) {
	const md = await getMD(filename);
	const mdSlides = md.split(pattern);
	mdSlides.forEach(mdSlide => {
		slideDeck.appendChild(buildSlide(mdSlide));
	});
	return slideDeck;
}
