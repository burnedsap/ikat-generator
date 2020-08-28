var slider1, slider2, hslider, bslider, rsli, gsli, bsli, brsli, bgsli, bbsli;
let sel;
let item;
var stag;

function setup() {
    createCanvas(800, 600);
    //	frameRate(15)
    sel = createSelect();
    sel.option('select one');
    sel.option('one');
    sel.option('two');
    sel.option('three');
    sel.option('four');
    sel.selected('select one');
    sel.changed(mySelectEvent);
    slider1 = createSlider(10, 150, 150);
    slider2 = createSlider(50, 300, 280);
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
    for (var x = -200; x < width + 200; x += slider1.value()) {
        for (var y = -200; y < height + 200; y += slider2.value()) {
            if (y % 2 == 0) {
                stag = slider1.value() / 2;
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
            } else if (item == 'four') {
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


        line(x + 10, 20+y + r, x + 10, y+54 + r+h) //long line
//        line(x + 20, 15+y + r, x + 20, y+20 + r)
//        line(x + 30, 12+y + r, x + 30, y+17 + r)
//        line(x + 40, 8+y + r, x + 40, 13+y + r)
        line(x + 50, 2+y + r, x + 50, y+68 + r+h) //long line
//        line(x + 60, 8+y + r, x + 60, 13+y + r)
//        line(x + 70, 11+y + r, x + 70, y+17 + r)
//        line(x + 80, 15+y + r, x + 80, y+20 + r)

//        line(x + 10, 20+y + r, x + 10, y+54 + r)
//        line(x + 20, 59+y + r, x + 20, y+54 + r)
        line(x + 30, 64+y + r+h, x + 30, y+17 + r) //long line
//        line(x + 40, 70+y + r, x + 40, y+64 + r)

//        line(x + 60, 64+y + r, x + 60, 70+y + r)
        line(x + 70, 16+y + r, x + 70, y+64 + r+h) //long line
//        line(x + 80, 54+y + r, x + 80+h, 60+y + r)
        line(x + 90, 20+y + r, x + 90, y+54 + r+h) //long line

       
    }
}
