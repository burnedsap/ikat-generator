function setup() {
	createCanvas(400, 400);
	frameRate(5)
	  noLoop()
}

function draw() {
	background(0);
	  //r=random(0,20)
	  for (x = 0; x < 60; x += 1.3) {
		r = random(0, 40)
	    stroke(255, 0, 0)
	    line(60 + x, 10 + r, 60 + x, 150 + r)
	}
	
	for (x = 0; x < 60; x += 1.3) {
		r = random(0, 50)
	    line(170 + x, 150 + r, 170 + x, 300 + r)
	}
	
	for (x = 0; x < 60; x += 1.3) {
		r = random(0, 50)
	    line(280 + x, 10 + r, 280 + x, 150 + r)
	    line(380 + x, 150 + r, 380 + x, 300 + r)
	}
	
	for (x = 0; x < 400; x += 2) {
		stroke(100, 10, 100)
	    line(0, x, 400, x)
	}
	
	for (y = 0; y < 400; y += 2) {
		stroke(100, 0, 100)
	    line(0 + y, 400, 0 + y, 0)
	}
	
	for (i = 0; i < 8; i += 1) {
//		ikat(50 * i, 50, 30)
	}
}

function ikat(x, y, diameter) {
	  // r=random(0,20)
	  for (y = 0; y < 10; y += 1.3) {
		r = random(0, 20)
	    stroke(250, 0, 0)
	    // stroke(200,10,80)
	  line(10 +y + x, 20 + r, 10 +y + x, 50 + r)
	    // stroke(150,10,80)
	line(10 +y + x, 0 + r, 10 +y + x, 50 + r)
		line(30 +y + x, 70 + r, 30 +y + x, 100 + r) 
	    // stroke(100,20,80)
	line(30 +y + x, 90 + r, 30 +y + x, 120 + r) 
	     line(10 +y + x, 200 + r, 10 +y + x, 150 + r)
	    line(30 +y + x, 290 + r, 30 +y + x, 240 + r)
	    line(10 +y + x, 380 + r, 10 +y + x, 320 + r)
	}
	
	for (n = 0; n < 400; n += 1.5) {
		stroke(10, 0, 100)
	    line(400, 0 + n, 0, 0 + n)
	    // line(n,0,n,400)
	}
}

//function draw() {
//  background(100,10,100);
//  //r=random(0,20)
//  for(x=0;x<60;x+=1.3){
//      r=random(0,30)
//    stroke(200,10,0)
//    line(50+x,10+r,50+x,150+r)
//  }
//    
//    for(x=0;x<60;x+=1.3){
//      r=random(0,30)
//    line(170+x,150+r,170+x,300+r)
//    }
//   for(x=0;x<60;x+=1.3){
//      r=random(0,30)
//    line(280+x,10+r,280+x,150+r)
//    }
//  
//    for(x=0;x<60;x+=1.3){
//      r=random(0,30)
//    line(380+x,150+r,380+x,300+r)
//    }
//    
//  for(x=0;x<30;x+=1.5){
//    r=random(0,30)
//    line(10+r,90+x,120+r,90+x)
//  }
//  
//}
