var xspacing = 5;    // Distance between each horizontal location
var w;                // Width of entire wave
var amplitude_ = 75.0; // Height of wave
var wavelength = 20;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues_;  // Using an array to store height values for the wave
var k = 2*Math.PI/wavelength;
var omega_ = 0;
var yvaluesSum = [];
var offset_ = 0;
var t =0;
var running = false;


function setup() {

  frameRate(30);
  canvas = createCanvas(500, 500);
  canvas.parent('sketch-holder');
  w = width+12;

  dx = (TWO_PI / wavelength) * xspacing;

  yvalues1 = new Array(floor(w/xspacing));
  yvalues2 = new Array(floor(w/xspacing));

  button = createButton('click me');
button.position(19, 19);
button.mousePressed(makeWaves);
onoff = createButton("start");
onoff.mouseClicked(turnonoff);
onoff.position(50,300);
onoff.class("sim-button gray");
  noLoop();
}

function draw() {
  background(255);
  calcPulse(yvalues1,-31,-2,50);
  calcPulse(yvalues2,0,2,50);
  sum = calcSum(yvalues1,yvalues2);
  renderWave(sum,color(0,0,0),2);
  push();
  strokeWeight(1);
  stroke(0);
  pop();
  fill(100, 100, 240);
  rect(490, 150, 10, 200);
  t=t+0.05;
}
function makeWaves() {
t = 0
}
function calcPulse(yvalues_,offset_,omega_,amplitude_) {

  x = 0;
  for (var i = 0; i < yvalues_.length; i++) {
    yvalues_[i] = amplitude_*Math.pow(Math.E, -Math.pow((k * (.1*x+offset_) - omega_ * t),2));
    x+=dx;
  }
}
function calcSum(yvalues1_,yvalues2_) {
  x = 0;
for (var i = 0; i < yvalues1_.length; i++) {
  yvaluesSum[i] = yvalues1_[i]+yvalues2_[i];
  }
return yvaluesSum;
}

function renderWave(yvalues_,color_,weight_) {
  noFill();
  stroke(color_);
  strokeWeight(weight_)
  beginShape();
  for (var x = 0; x < yvalues_.length; x++) {
    curveVertex(x*xspacing, height/2-yvalues_[x]);
  }
  endShape();
}

function turnonoff() {
  if (running) {
    running = false;
    noLoop();
    onoff.html("start");
    return
  }

  if (!running){
    running = true;
    loop();
    onoff.html("stop");
    return
  }
}
