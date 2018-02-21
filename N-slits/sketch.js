var d = 0.0;
var l=0.0;
var y;
var theta=0.0;
var int0 = 0.0;
var x = 0.0 ;
var slider;
var N = 0;

function setup() {
createCanvas(2000, 1000);
noFill();

LightWavelength = createElement('z2', 'Wavelength');
LightWavelength.position(20, 30);
slider1 = createSlider(400,700,10);
slider1.value(600);
slider1.position(200, 30);

DistanceBTNSlits = createElement('z2', 'Distance between slits');
DistanceBTNSlits.position(20,55);
slider2 = createSlider(10000,10100,100);
slider2.position(200,55 );
slider2.value(1500);

CentralMaximum = createElement('z2', 'Central Maximum');
CentralMaximum.position(20, 80);
slider4 = createSlider(0,10,5);
slider4.position(200, 80);
slider4.value(3);

NSlits = createElement('z2','N-slits');
NSlits.position(20,105);
slider5 = createSlider(2,10,1);
slider5.position(200,105);
slider5.value(8);

 y = new Array(700);
}

function draw() {

background(255);
noFill();

l = slider1.value();
int0 = slider4.value();
d = slider2.value();
N = slider5.value();
calcPlot();
renderFunction();
}

function calcPlot(){
  for (var x= 0 ; x< y.length; x+=1){
    theta = map(x,0,y.length,-.1,.1)
    y[x] = int0*Math.pow(Math.sin(N*Math.PI*d*Math.sin(theta)/l),2)/(Math.pow(Math.sin(Math.PI*d*Math.sin(theta)/l),2))
    //constrain(y[x],0,200);
}
//constrain(y[x],0,200);
}
function renderFunction() {
push();
noFill();
strokeWeight(4);
hue = round(map(l,350,700,330,0));
c = color('hsb('+hue+', 100%, 100%)');
stroke(c)

beginShape();
for (var j = 0; j< y.length; j++){
  curveVertex(j,height/2-y[j])
}
endShape();
pop();
}
