var xspacing = 5;    // Distance between each horizontal location
var w;                // Width of entire wave
var amplitude_ = 50.0; // Height of wave
var wavelength =  300;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave
//var k = 1;
var k = 2*Math.PI/wavelength;
var omega_ = 20;
var speed;
var offset_ = 100;


function setup() {
frameRate(30);
canvas = createCanvas(500, 400);
canvas.parent('sketch-holder');
w = width +12;
x = 0;
//dx = 1;
dx = (TWO_PI / wavelength) * xspacing;
yvalues_ = new Array(floor(w/xspacing));
}
function draw() {
  background(255);
  t = millis()/1000;
  calcPulse(yvalues_,100,5,70);
  renderWave(yvalues_,color(0,0,250),1);
  strokeWeight(1);
  stroke(0);
  fill(100, 100, 240);
  rect(490, 150, 10, 100);
}
function calcPulse(yvalues_,offset_,omega_,amplitude_) {
var x = 0;
for( var i = 0; i < yvalues_.length ; i++ ){
  if ( x > width){
offset_ = 0 ;
  yvalues_[i] = - amplitude_*Math.pow(Math.E, -Math.pow((k * ((30*x)+offset_) - omega_ * t),2));
  x = x + dx;
}
 else if ( x <= width ){
   offset_ = 10;
     yvalues_[i] = amplitude_*Math.pow(Math.E, -Math.pow((k * ((30*x)+offset_) - omega_ * t),2));
     x+=dx;
     //print('this is x' +x);
   }
 }
}

function renderWave(yvalues_,color_,weight_) {

  noFill();
  stroke(color_);
  strokeWeight(weight_)
  beginShape();
  for (var y = 0; y < yvalues_.length; y++) {
    curveVertex(y*xspacing, height/2-yvalues_[y]);

}
  endShape();
}
