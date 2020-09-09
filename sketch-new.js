p5.disableFriendlyErrors = true; // disables FES
let stag;
let saveB;
var bs = 10;
var offset = 70;
var sliderx, slidery, thickslider, rslider, rsli, gsli, bsli, brsli, bgsli, bbsli;
let arr = [];
function setup() {
	canvas = createCanvas(900, 600, P2D);
	canvas.parent('sketch-holder');
	for (var j = 0; j < 20; j++) {
		var inArr = [];
		for (var i = 0 + offset; i < 20 + offset; i++) {
			var rect = new Rect(i, j);
			inArr.push(rect);
		}
		
		arr.push(inArr)
	}
	
	
	labelC = createElement('p', 'Pattern Variables');
	labelC.addClass('labelC');
	labelC.style('margin', '0px');
	labelC.style('margin-top', '10px');
	labelC.style('margin-bottom', '3px');
	labelC.parent('sketch-holder');
	labelX = createElement('label', 'X-Slider');
	labelX.parent('sketch-holder');
	sliderx = createSlider(35, 150, 60);
	sliderx.parent('sketch-holder');
//	brake = createElement('br');
//	brake.parent('sketch-holder');
	labelX = createElement('label', 'Y-Slider');
	labelX.parent('sketch-holder');
	slidery = createSlider(35, 150, 60);
	slidery.parent('sketch-holder');
	brake = createElement('br');
	brake.parent('sketch-holder');
	labelX = createElement('label', 'Thickness');
	labelX.parent('sketch-holder');

	thickslider = createSlider(1, 10, 1);
	thickslider.parent('sketch-holder');
	labelX = createElement('label', 'Dithering');
	labelX.parent('sketch-holder');

	rslider = createSlider(0, 10, 1);
	rslider.parent('sketch-holder');
	brake = createElement('br');
	brake.parent('sketch-holder');
	
	//Pattern Colour
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
	brake = createElement('br');
	brake.parent('sketch-holder');
    
    //Background Colour
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
	
	//Save Button
	saveB = createButton('Save Image');
	saveB.parent('sketch-holder');
	saveB.mousePressed(saveImage);
}

function orico(spacingx, spacingy, thick, r, pr, pg, pb) {
	stroke(pr, pg, pb);
	strokeWeight(thick);
	for (var x =  -100; x < width - 300; x += spacingx) {
		for (var y = 0; y < height; y += spacingy) {
			if (y % 2 == 0) {
				stag = spacingx / 2;
                //				console.log('50');
			} else {
				stag = 0;
                //				console.log('0');
			}
			
			push();
			translate(x + stag, y);
			for (var i = 0; i < arr.length; i++) {
				for (var j = 0; j < arr[i].length; j++) {
					if (arr[i][j].fill == 'black') {
						point(arr[i][j].i, arr[i][j].j + random(r));
					}
				}
			}
			
			pop();
		}
	}
}

function draw() {
	background(255);
	noStroke();
	fill(252, 239, 224);
	rect(0, 0, width - 200, height);
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			arr[i][j].show()
		}
	}
	//	console.log(mouseX, mouseY);
	orico(sliderx.value(), slidery.value(), thickslider.value(), rslider.value(), rsli.value(), gsli.value(), bsli.value());
	for (n = 0; n < width - 200; n += 1.5) {
		strokeWeight(0.09);
		stroke(brsli.value(), bgsli.value(), bbsli.value(), 100)
        line(width - 200, 0 + n, 0, 0 + n)
	}
	
	if (mouseIsPressed) {
		arr.forEach(function(e, index) {
			e.forEach(function(d, index2) {
				arr[index][index2].clicked()
			});
		});
		//		console.log(arr);
	}
}

function Rect(i, j) {
	this.fill = 'white'
	  this.i = i;
	this.j = j;
	this.x = i * bs;
	this.y = j * bs;
	this.clicked = function () {
		let x1 = this.x,
			x2 = x1 + 20,
			y1 = this.y,
			y2 = y1 + 20;
		if ((mouseX >x1 &&mouseX < x2) && (mouseY >y1 &&mouseY < y2)) {
			this.fill = 'black'
		}
	}
	
	this.show = function () {
		stroke(0);
		fill(this.fill);
		strokeWeight(0.2);
		rect(this.x, this.y, bs, bs);
	}
}

function saveImage() {
	save('ikat-generator.png');
}
