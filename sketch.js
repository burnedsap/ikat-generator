var slider1, slider2, hslider, bslider, rsli, gsli, bsli;
var w = 50;
var y1 = 280;
var hs, bs = 20;
var rsl, gsl, bsl;
//var w = slider.value;
//	slider.oninput = function() {
//	w = this.value;
//	}
//	
function setup() {
	createCanvas(800, 600);
	frameRate(5)
	//	  noLoop()
		  slider1 = createSlider(10, 70, 50);
	slider2 = createSlider(100, 300, 280);
	hslider = createSlider(1, 100, 20);
	bslider = createSlider(10, 100, 20);
	bsli = createSlider(0, 255, 20);
	gsli = createSlider(0, 255, 20);
	rsli = createSlider(0, 255, 20);
}

function updateSize() {
	w = slider1.value()
	y1 = slider2.value()
	hs = hslider.value()
	bs = bslider.value()
	rsl = rsli.value()
	bsl = bsli.value()
	gsl = gsli.value()
}

function draw() {
	background(0);
	slider1.input(updateSize);
	slider2.input(updateSize);
	hslider.input(updateSize);
	bslider.input(updateSize);
	bsli.input(updateSize);
	gsli.input(updateSize);
	rsli.input(updateSize);
	for (var x =  -200; x <width + 200; x += w) {
		for (var y =  -200; y <height + 200; y += y1) {
			One(x, y, color(rsl, gsl, bsl), hs, bs)
		}
	}
	
	for (n = 0; n < width; n += 1.5) {
		stroke(10, 0, 100)
	    line(width, 0 + n, 0, 0 + n)
	}
}

function One(x, y, c, h, b) {
	for (var a = 0; a < b; a += 1.3) {
		r = random(0, h/2)
	    stroke(c)
	    line(x + a, y+r, x + a, y +h + r)
	}
}

function Two(x, y) {
	for (var a = 0; a < 10; a += 1) {
		r = random(0, 20)
	     stroke(250, 0, 0)
	 	line(10 +a + x, y + r, 10 +a + x, y + 50 + r)
	}
}

function Three(x, y) {
	for (var a = 0; a < 30; a += 1.3) {
		r = random(0, 30)
	    stroke(200, 10, 0)
	    line(x + a, y + r, x + a, y + 150 + r)
	}
	
	for (var a = 0; a < 30; a += 1.3) {
		r = random(0, 30)
	    line(x - 60 + r, y + 75 + a, x + 60 + r, y + 75 + a)
	}
}

