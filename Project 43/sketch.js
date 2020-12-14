
var mn,sec,hr;
var minAngle,secAngle,hrAngle;

function setup() {
  createCanvas(500,400);
   
  angleMode(DEGREES);

}

function draw() {
  background(0); 

fill("white");
text("TICK TOCK clock",200,20);

  mn=minute();
  hr=hour();
  sec=second();

  push ();
  translate(250,200);
  strokeWeight(8);
  stroke("green");
 minAngle=map(mn%360,0,60,0,360);
 fill(0);
 arc(0,0,320,320,0,minAngle);

 strokeWeight(8);
 stroke("red");
 secAngle=map(sec%360,0,60,0,360);
 fill(0);
 arc(0,0,300,300,0,secAngle);

strokeWeight(8);
 stroke("blue");
 hrAngle=map(hr%12,0,60,0,360);
 fill(0);
 arc(0,0,280,280,0,hrAngle);
  pop();

  push();
  translate(250,200);
  rotate(secAngle);
  stroke("red");
  strokeWeight(3);
  line(0,0,130,0);
  pop();

  push();
  translate(250,200);
  rotate(minAngle);
  stroke("green");
  strokeWeight(5);
  line(0,0,100,0);
  pop();

  push();
  translate(250,200);
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  fill(255);
  textSize(24);
  textStyle("bold");
  text("Time : " + hr + " : "+mn+" : " + sec ,150 , 400);
  drawSprites();
}