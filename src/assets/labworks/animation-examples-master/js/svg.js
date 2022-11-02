"use strict";

// some constants
const gravity = 0.002;
const kick = 0.3;

// ball location
let x = 1000;
let y = 600;

// rotation
let rot = 0;

// ball speed
let x_speed = 0.1;
let y_speed = 0;

// The basic 'physics' of the ball are defined here (effect of gravity, bounce and wrap)
function update(elapsed) {

	// rotation
	rot += x_speed*10;

	// gravity
	y_speed += gravity * elapsed;

	// movement
	x += x_speed * elapsed;
	y += y_speed * elapsed;

	// wrap right
	if(x > 2000) {
		x -= 2100;
	}

	// wrap left
	if(x < -100) {
		x += 2100;
	}

	// bounce
	if(y > 900) {
		y_speed *= -0.9;
		y = 900;
	}

	// let the ball slow to a stop when on the ground
	if(Math.abs(y_speed) < 0.1 && Math.abs(y - 900) < 1) {
		y_speed = 0;
		y = 900;
		x_speed *= 0.99;
	}

	// Update the SVG
	ball.setAttribute("x", x);
	ball.setAttribute("y", y);
	ball.setAttribute("transform", `rotate(${rot}, ${x+50}, ${y+50})`);
}

// The key handler 'kicks' the ball
window.addEventListener('keydown', ev => {
	console.log(ev);
	switch(ev.key) {
		case "ArrowLeft":
			if(x_speed > 0) { x_speed = 0; }
			x_speed -= kick;
			break;
		case "ArrowRight":
			if(x_speed < 0) { x_speed = 0; }
			x_speed += kick;
			break;
		case "ArrowUp":
			y_speed = kick*-3;
			break;
	}
});


// The animation is controlled here, we call the step function whenever the browser is ready
let previous;
function step(timestamp) {
	if (previous === undefined) {previous = timestamp};
	const elapsed = timestamp - previous;
	update(elapsed);
	previous = timestamp;
  window.requestAnimationFrame(step);
}

// This starts the process
window.requestAnimationFrame(step);
