var canvas = $('#ball-pit');
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

$(document).ready(function() {



});

function Ball(ctx, xPos, yPos, dx, dy) {

	this.ctx = canvas.getContext('2d');
	this.xPos = canvasWidth / 2;
	this.yPos = canvasHeight / 2;
}

Ball.prototype.draw = function() {

}

// $(document).ready(function() {

// 	$('#begin').click(function() {
// 		$('#landing').hide();
// 		init();
// 	});

// });

// var canvasWidth = window.innerWidth;
// var canvasHeight = window.innerHeight;

// var ctx;
// var framerate = 30;
// var x = canvasWidth / 2;
// var y = canvasHeight / 2;
// var dx = Math.floor((Math.random() * 20) + 1) - 5;
// var dy = Math.floor((Math.random() * 20) + 1) - 5;

// function init() {
	
// 	ctx = $('#ball-pit')[0].getContext('2d');
// 	ctx.canvas.width = canvasWidth;
// 	ctx.canvas.height = canvasHeight;
// 	setInterval(draw, 1000/framerate);
// }

// function draw() {
// 	ctx.clearRect(0,0, canvasWidth,canvasHeight);
// 	ctx.beginPath();
// 	ctx.fillStyle = "rgba(255,255,255,.5)";

// 	// Draws a circle of radius 20 at the coordinates 100,100 on the canvas
// 	ctx.arc(x,y,10,0,Math.PI*2,true);
// 	ctx.closePath();
// 	ctx.fill();

// 	// Boundary Logic
// 	if( x<0 || x>canvasWidth) dx=-dx; 
// 	if( y<0 || y>canvasHeight) dy=-dy; 
// 	x+=dx;
// 	y+=dy;
// }

// $(window).resize(function() {

// 	canvasWidth = window.innerWidth;
// 	canvasHeight = window.innerHeight;
// });