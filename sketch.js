p5.disableFriendlyErrors = true; // disables FES

var slider1, slider2, hslider, bslider, rsli, gsli, bsli, brsli, bgsli, bbsli;
let sel;
let item;
var stag;
let saveB;
function setup() {
	canvas = createCanvas(800, 800);
	canvas.parent('sketch-holder');
    //	frameRate(15)
	labelC = createElement('p', 'Pattern Variables');
	labelC.addClass('labelC');
	labelC.style('margin', '0px');
	labelC.style('margin-top', '10px');
	labelC.style('margin-bottom', '3px');
	labelC.parent('sketch-holder');
	sel = createSelect();
	sel.option('Select a pattern');
	sel.option('Pattern One');
	sel.option('Pattern Two');
	sel.option('Pattern Three');
	sel.option('Pattern Four');
	sel.selected('Select a pattern');
	sel.changed(mySelectEvent);
	sel.parent('sketch-holder');
	brake = createElement('br');
	brake.parent('sketch-holder');
	labelX = createElement('label', 'X-Slider');
	labelX.parent('sketch-holder');
	slider1 = createSlider(10, 150, 50);
	slider1.parent('sketch-holder');
	labelX = createElement('label', 'Y-Slider');
	labelX.parent('sketch-holder');
	slider2 = createSlider(50, 300, 180);
	slider2.parent('sketch-holder');
	brake = createElement('br');
	brake.parent('sketch-holder');
	labelX = createElement('label', 'Height');
	labelX.parent('sketch-holder');
	hslider = createSlider(1, 100, 20);
	hslider.parent('sketch-holder');
	labelX = createElement('label', 'Width');
	labelX.parent('sketch-holder');
	bslider = createSlider(10, 100, 20);
	bslider.parent('sketch-holder');
	labelC = createElement('p', 'Block Colour');
	labelC.addClass('labelC');
	labelC.style('margin', '0px');
	labelC.style('margin-top', '10px');
	labelC.style('margin-bottom', '3px');
	labelC.parent('sketch-holder');
	labelX = createElement('label', 'Red');
	labelX.parent('sketch-holder');
	rsli = createSlider(0, 255, 120);
	rsli.parent('sketch-holder');
	labelX = createElement('label', 'Green');
	labelX.parent('sketch-holder');
	gsli = createSlider(0, 255, 120);
	gsli.parent('sketch-holder');
	labelX = createElement('label', 'Blue');
	labelX.parent('sketch-holder');
	bsli = createSlider(0, 255, 120);
	bsli.parent('sketch-holder');
	labelC = createElement('p', 'Background Colour');
	labelC.addClass('labelC');
	labelC.style('margin', '0px');
	labelC.style('margin-top', '10px');
	labelC.style('margin-bottom', '3px');
	labelC.parent('sketch-holder');
	labelX = createElement('label', 'Red');
	labelX.parent('sketch-holder');
	brsli = createSlider(0, 255, 0);
	brsli.parent('sketch-holder');
	labelX = createElement('label', 'Green');
	labelX.parent('sketch-holder');
	bgsli = createSlider(0, 255, 0);
	bgsli.parent('sketch-holder');
	labelX = createElement('label', 'Blue');
	labelX.parent('sketch-holder');
	bbsli = createSlider(0, 255, 80);
	bbsli.parent('sketch-holder');
	brake = createElement('br');
	brake.parent('sketch-holder');
	saveB = createButton('Save Image');
	saveB.mousePressed(saveImage);
	saveB.parent('sketch-holder');
}

function draw() {
	background(252, 239, 224);
	for (var x =  -200; x < width + 200; x += slider1.value()) {
		for (var y =  -200; y < height + 200; y += slider2.value()) {
			if (y % 2 == 0) {
				stag = slider1.value() / 2;
			} else {
				stag = 0;
			}
			
			if (item == 'Pattern One') {
				One(x + stag, y, color(rsli.value(), gsli.value(), bsli.value()), hslider.value(), bslider.value())
			} else if (item == 'Pattern Two') {
				Two(x + stag, y, color(rsli.value(), gsli.value(), bsli.value()), hslider.value());
			} else if (item == 'Pattern Three') {
				Three(x + stag, y, color(rsli.value(), gsli.value(), bsli.value()), hslider.value());
			} else if (item == 'Pattern Four') {
				push();
				translate(x + stag, y);
				Four(x + stag, y, color(rsli.value(), gsli.value(), bsli.value()), hslider.value());
				pop();
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
        line(x + a, y + r, x + a, y + h + r)
	}
}

function Two(x, y, c, h) {
	for (var a = 0; a < 10; a += 1) {
		r = random(0, h / 2)
        stroke(c)
        line(10 + a + x, y + h + r, 10 + a + x, y + +h + 50 + r)
	}
}

function Three(x, y, c, h) {
	for (var a = 0; a < 30; a += 1.3) {
		r = random(0, h / 2)
        stroke(c)
        line(x + a, y + h + r, x + a, y + h + 150 + r)
	}
	
	for (var a = 0; a < 30; a += 1.3) {
		r = random(0, h / 2)
        line(x - 60 + r + h, y + 75 + a, x + 60 + r + h, y + 75 + a)
	}
}

function Four(x, y, c, h) {
	for (x = 0; x < 10; x += 1) {
		stroke(c)
        r = random(0, h / 5)
        line(x + 10, 20 +y + r, x + 10, y + 54 + r + h) //long line
        line(x + 50, 2 +y + r, x + 50, y + 68 + r + h) //long line
        line(x + 30, 64 +y + r + h, x + 30, y + 17 + r) //long line		
        line(x + 70, 16 +y + r, x + 70, y + 64 + r + h) //long line
        line(x + 90, 20 +y + r, x + 90, y + 54 + r + h) //long line
	}
}

function saveImage() {
	save('ikat-generator.png');
}