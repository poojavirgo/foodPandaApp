for (const link of document.querySelectorAll("a[href]")) {
	if(link.href == document.location) {
		link.classList.add("current");
	}
}
