function setup() {
	createCanvas(600, 600);
	frameRate(5)
//	  noLoop()
}

function draw() {
	background(0);
	One(random(width), random(height))
	Two(random(width), random(height))
	for (n = 0; n < width; n += 1.5) {
		stroke(10, 0, 100)
	    line(width, 0 + n, 0, 0 + n)
	}
}

function One(x, y) {
	for (var a = 0; a < 60; a += 1.3) {
		r = random(0, 40)
	    stroke(255, 0, 0)
	    line(x + a, y + r, x + a, y+ 150 + r)
	}
}

function Two(x, y) {
	for (var a = 0; a < 10; a += 1) {
		r = random(0, 20)
	     stroke(250, 0, 0)
	 	line(10 +a + x, y + r, 10 +a + x, y+ 50 + r)
	}
}

