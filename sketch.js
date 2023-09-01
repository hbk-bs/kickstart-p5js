/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

function setup() {
	// setup runs once
	const canvas = createCanvas(100, 100);
	canvas.parent("sketch");
	background(128);
}

function draw() {
	// draw runs all the time
}
