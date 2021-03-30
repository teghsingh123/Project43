var hr,mn,sc;

function setup(){
  createCanvas(650,650);
  angleMode(DEGREES);
}
function draw(){
  background("black");
translate(200,200);
rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(5);
  stroke("blue");
  noFill();
  let scAngle = map(sc, 0, 60, 0, 360);
  arc(0,0,300,300,0,scAngle);

  stroke("red")
  let mnAngle = map(mn, 0,60,0,360);
  arc(0,0,280,280,0,mnAngle);

  stroke("green")
  let hrAngle = map(hr%12,0,12,0,360); 
  arc(0,0,260,260,0,hrAngle);

  push();
  rotate(scAngle);
  stroke("blue");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(mnAngle);
  stroke("red");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(hrAngle);
  stroke("green");
  line(0,0,50,0);
  pop();
}