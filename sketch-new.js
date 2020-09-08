var bs = 10;
var offset = 70;
var slider1, slider2, slider3;
let arr = [];
function setup() {
	canvas = createCanvas(900, 600);
	for (var j = 0; j < 20; j++) {
		var inArr = [];
		for (var i = 0 + offset; i < 20 + offset; i++) {
			var rect = new Rect(i, j);
			inArr.push(rect);
		}
		
		arr.push(inArr)
	}
	
	background(240);
	slider1 = createSlider(25, 150, 60);
	slider2 = createSlider(1, 10, 1);
}

function orico(spacing, thick) {
	strokeWeight(thick);
	for (var x =  -100; x < width - 300; x += spacing) {
		for (var y = 0; y < height; y += spacing) {
			push();
			translate(x, y);
			for (var i = 0; i < arr.length; i++) {
				for (var j = 0; j < arr[i].length; j++) {
					if (arr[i][j].fill == 'black') {
						point(arr[i][j].i, arr[i][j].j);
					}
				}
			}
			
			pop();
		}
	}
}

function draw() {
	background(240);
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			arr[i][j].show()
		}
	}
	
	orico(slider1.value(), slider2.value());
	if (mouseIsPressed) {
		arr.forEach(function(e, index) {
			e.forEach(function(d, index2) {
				arr[index][index2].clicked()
			});
		});
		console.log(arr);
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
			//      console.log(this)
			      this.fill = 'black'
		}
	}
	
	this.show = function () {
		fill(this.fill)
		//		stroke('blue')
			    rect(this.x, this.y, bs, bs);
	}
}

//var res = 10;
//var grid = [];
//function setup() {
//	createCanvas(300, 300);
//	background(245);
//	frameRate(12);
//    //	frameRate(15)
//	for (var x = 0; x < width; x += res) {
//		for (var y = 0; y < width; y += res) {
//			var index = x+y*width;
//			grid[index] = random(255);
//		}
//	}
//	console.log(grid);
//}
//
//function draw() {
//	fill(255);
//	stroke(51);
//	
//	for (var x = 0; x < width; x += res) {
//		for (var y = 0; y < width; y += res) {
//			var index = x+y*width;
//			fill(grid[index]);
//			console.log(grid[index]);
//			rect(x, y, res, res);
//		}
//	}
//	if(mouseIsPressed) {
//		for (var x = 0; x < width; x += res) {
//		for (var y = 0; y < width; y += res) {
//			var index = x+y*width;
//			var check = mouseX+mouseY*width;
//			console.log(grid[index]);
//
//		}
//	}
//		console.log(mouseX, mouseY);
//		var check = mouseX+mouseY*width;
//		console.log(check);
//		console.log(grid[check]);
//		}
//		
//}
//   
//   

