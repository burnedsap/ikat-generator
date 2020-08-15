var slider1, slider2, hslider, bslider, rsli, gsli, bsli, brsli, bgsli, bbsli;
let sel, item;
var stag;
function setup() {
	createCanvas(800, 600);
	//	frameRate(15)
		sel = createSelect();
	sel.option('one');
	sel.option('two');
	sel.option('three');
	sel.selected('one');
	sel.changed(mySelectEvent);
	slider1 = createSlider(10, 150, 50);
	slider2 = createSlider(100, 300, 280);
	hslider = createSlider(1, 100, 20);
	bslider = createSlider(10, 100, 20);
	bsli = createSlider(0, 255, 120);
	gsli = createSlider(0, 255, 120);
	rsli = createSlider(0, 255, 120);
	brsli = createSlider(0, 255, 0);
	bgsli = createSlider(0, 255, 0);
	bbsli = createSlider(0, 255, 80);
}

function draw() {
	background(0);
	for (var x =  -200; x <width + 200; x += slider1.value()) {
		for (var y =  -200; y <height + 200; y += slider2.value()) {
			if (y % 2 == 0) {
				stag = slider1.value()/2;
//				console.log('50');
			} else {
				stag = 0;
//				console.log('0');
			}
			
			if (item == 'one') {
				One(x + stag, y, color(rsli.value(), gsli.value(), bsli.value()), hslider.value(), bslider.value())
			} else if (item == 'two') {
				Two(x + stag, y, color(rsli.value(), gsli.value(), bsli.value()), hslider.value());
			} else if (item == 'three') {
				Three(x + stag, y, color(rsli.value(), gsli.value(), bsli.value()), hslider.value());
			}
		}
	}
	
	for (n = 0; n < width; n += 2.5) {
		stroke(brsli.value(), bgsli.value(), bbsli.value())
	    line(width, 0 + n, 0, 0 + n)
	}
}

function mySelectEvent() {
	item = sel.value();
	//	return item;
}

function One(x, y, c, h, b) {
	for (var a = 0; a < b; a += 1.3) {
		r = random(0, h / 2)
	    stroke(c)
	    line(x + a, y + r, x + a, y +h + r)
	}
}

function Two(x, y, c, h) {
	for (var a = 0; a < 10; a += 1) {
		r = random(0, h / 2)
	    stroke(c)
	 	line(10 + a + x, y +h + r, 10 + a + x, y + +h + 50 + r)
	}
}

function Three(x, y, c, h) {
	for (var a = 0; a < 30; a += 1.3) {
		r = random(0, h / 2)
	    stroke(c)
	    line(x + a, y +h + r, x + a, y + h + 150 + r)
	}
	
	for (var a = 0; a < 30; a += 1.3) {
		r = random(0, h / 2)
	    line(x - 60 + r + h, y + 75 + a, x + 60 + r + h, y + 75 + a)
	}
}

