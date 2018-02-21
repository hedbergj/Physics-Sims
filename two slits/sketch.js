var d = 0.0;
var a=0.0;
var l=0.0;
var y;
var theta=0.0;
var int0 = 0.0;
var x = 0.0 ;
var slider;

function setup() {
canvas = createCanvas(800, 800);
noFill();

LightWavelength = createElement('z2', 'Wavelength');
LightWavelength.position(20, 30);
slider1 = createSlider(400,700,10);
slider1.value(600);
slider1.position(150, 30);


DistanceBTNSlits = createElement('z2', 'Distance between slits');
DistanceBTNSlits.position(20,55);
slider2 = createSlider(10000,50000,100);
slider2.position(200,55 );
slider2.value(1000);

SlitWidth = createElement('z2', 'Slit Width');
SlitWidth.position(20,80);
slider3 = createSlider(1,3000,10);
slider3.position(150, 80);
slider3.value(50);

CentralMaximum = createElement('z2', 'Central Maximum');
CentralMaximum.position(20, 105);
slider4 = createSlider(0,200,10);
slider4.position(150, 105);
slider4.value(140);
 y = new Array(700);


 diffraction = createCheckbox('include diffraction', false);
 diffraction.position(400,80)
}

function draw() {

background(255);
noFill();

l = slider1.value();
a = slider3.value();
int0 = slider4.value();
d = slider2.value();

calcPlot();
renderFunction();
}

function calcPlot(){
  for (var x= 0 ; x< y.length; x+=1){
      theta = map(x,0,y.length,-.1,.1)
      if(diffraction.checked()==true){
      y[x] = int0 * Math.pow(Math.cos(PI*d*Math.sin(theta)/l),2)*Math.pow(Math.sin(PI*a*Math.sin(theta)/l)/(PI*a*Math.sin(theta)/l),2)
      }
      else if (diffraction.checked()==false){
        y[x] = int0 * Math.pow(Math.cos(PI*d*Math.sin(theta)/l),2)
      }
    }

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
