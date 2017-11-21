var a = 0;

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  background(50);

  if(a > 720){
    a = -10;
  }
  fill(255);
  rect(300, a, 600, 20);
  a = a+10;
}
