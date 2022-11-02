"use strict";
(() => {
function addItem(text, done) {
  const item = document.createElement('li');
  const label = document.createElement('label');
  const input = document.createElement('input');
	const button = document.createElement('button');
  label.textContent = text;
  input.type = "checkbox";
  input.checked = done;
  input.id = `todo${todo.querySelectorAll('li').length + 1}`;
  label.htmlFor = input.id;
	button.textContent = "×";
	item.appendChild(input);
  item.appendChild(label);
	item.appendChild(button);
  todo.appendChild(item);

	button.addEventListener('click', ev => {
	  item.remove();
		saveToStorage();
	});

	input.addEventListener('input', ev => {
  	saveToStorage();
	});
}

function clearList() {
  while(todo.firstChild) {
    todo.removeChild(todo.firstChild);
  }
}

function dataFromElement(el) {
	return {
		text: el.querySelector('label').textContent,
		done: el.querySelector('input').checked
	}
}

function saveToStorage() {
	const listItems = todo.querySelectorAll('li');
	const elements = Array.from(listItems);
	const data = elements.map(dataFromElement);
	localStorage.setItem("todo", JSON.stringify(data));
}

function loadFromStorage() {
	const data = JSON.parse(localStorage.getItem("todo"));
	if(data) {
		clearList();
		for (const item of data) {
			addItem(item.text, item.done);
		}
	}
}

clear.addEventListener('click', ev => {
	if(confirm("Are you sure you want to delete the entire list?")) {
    clearList();
    saveToStorage(); // <-- this is a new line
  }
});

add.addEventListener('click', ev => {
  if(text.value) {      // check we have data
    addItem(text.value);
    text.value = null;  // clear the input
    text.focus();       // give it the focus
		saveToStorage();
  }
});

text.addEventListener('keydown', ev => {
  if(ev.key == "Enter") {
    add.click();
  }
});

window.addEventListener('storage', (ev) => {
	loadFromStorage();
});

loadFromStorage();
})()
