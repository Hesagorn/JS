let punti1x = [];
let punti1y = [];
let punti2x = [];
let punti2y = [];
let speed = 0, speed2 = 0, speed3 = 0;
let x1 = 1000, x2 = 1000, x3 = 1000;
let y1 = 1050, y2 = 1050, y3 = 1050;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  poligono1 = new poligono(90, 6);
  poligono2 = new poligono(2000, 6);


/*  muro1.vertici1();
  muro1.vertici2();
  let i = 0;
  while(i < 8){
    console.log(i, " punto 1x: ", punti1x[i]);
    console.log(i, " punto 1y: ", punti1y[i]);
    i++;
  }
  i=0;
  while(i < 8){
    console.log(i, " punto 2x: ", punti2x[i]);
    console.log(i, " punto 2y: ", punti2y[i]);
    i++;
  }*/
}

function draw() {
  poligono2.forma();
  background(130);
  poligono2.forma2();
  let speed = 0, speed2 = 0, speed3 = 0;
  muro1 = new muro(x1 - speed, y1 - speed, 6);
  muro2 = new muro(x2 - speed2, y2 - speed2, 6);
  muro3 = new muro(x3 - speed3, y3 - speed3, 6);
  hexagon1();

  poligono1.forma();
}

function hexagon1() {
  speed = speed + 6;
  muro1.vertici1();
  muro1.vertici2();
  trapezi(1);
  trapezi(3);
  trapezi(4);
  if(speed>=300) {
    hexagon1_2();
  }
  if(speed>=1000) {
    speed = speed - 6;
  }
}
function hexagon1_2() {
  speed2 = speed2 + 6;
  muro2.vertici1();
  muro2.vertici2();
  trapezi(3);
  trapezi(5);
  trapezi(6);
  if(speed2>=300) {
    hexagon1_3();
  }
  if(speed2>=1000) {
    speed2 = speed2 - 6;
  }
}

function hexagon1_3() {
  speed3 = speed3 + 6;
  muro3.vertici1();
  muro3.vertici2();
  trapezi(1);
  trapezi(3);
  trapezi(5);
  if(speed3>=1000) {
    speed3 = speed3 - 6;
  }
}




function trapezi(m) {

  fill(240);
  if (m==6){
    beginShape();
    vertex(punti1x[m], punti1y[m]);
    vertex(punti1x[1], punti1y[1]);
    vertex(punti2x[1], punti2y[1]);
    vertex(punti2x[m], punti2y[m]);
    endShape(CLOSE);
  }
  beginShape();
  vertex(punti1x[m], punti1y[m]);
  vertex(punti1x[m+1], punti1y[m+1]);
  vertex(punti2x[m+1], punti2y[m+1]);
  vertex(punti2x[m], punti2y[m]);
  endShape(CLOSE);
}

class poligono {
  constructor(r, l, sx, sy, sx2, sy2) {
    this.r = r;
    this.l = l;
    this.sx = sx;
    this.sy = sy;
    this.sx2 = sx2;
    this.sy2 = sy2;
  }
  forma() {
    let angle = TWO_PI / this.l;
    let x=width/2, y=height/2;
    push();
    //translate(width/2, height/2);
    fill(100);
    stroke(220);
    strokeWeight(7);
    beginShape();
    for(let a=0; a<TWO_PI; a += angle) {
      this.sx2 = this.sx;
      this.sy2 = this.sy;
      this.sx = x + cos(a) * this.r;
      this.sy = y + sin(a) * this.r;
      vertex(this.sx, this. sy);
    }
    endShape(CLOSE);
    pop();
  }
  forma2() {
    let angle = TWO_PI / this.l;
    let x=width/2, y=height/2;
    let i=0;
      for(let a=0; a<TWO_PI; a += angle) {
        this.sx2 = this.sx;
        this.sy2 = this.sy;
        this.sx = x + cos(a) * this.r;
        this.sy = y + sin(a) * this.r;
        if(i%2==0) {
            noStroke();
            fill(100);
            strokeWeight(2);
            triangle(this.sx2, this.sy2, width/2, height/2, this.sx, this.sy);
        }
        i++;
      }
    }
  }


class muro {
  constructor(r, r2, l, sx, sy, sx2, sy2) {
    this.r = r;
    this.r2 = r2;
    this.l = l;
    this.sx = sx;
    this.sy = sy;
    this.sx2 = sx2;
    this.sy2 = sy2;
  }
  vertici1() {
    let angle = TWO_PI / this.l;
    let x=width/2, y=height/2;
    let n = 0;
    for(let a=0; a<TWO_PI; a += angle) {
      this.sx2 = this.sx;
      this.sy2 = this.sy;
      punti1x[n] = this.sx2;
      punti1y[n] = this.sy2;
      //print(punti1x[n]);
      //print(punti1y[n]);
      this.sx = x + cos(a) * this.r;
      this.sy = y + sin(a) * this.r;
      n++;
    }
  }
  vertici2() {
    let angle = TWO_PI / this.l;
    let x=width/2, y=height/2;
    let n = 0;
      for(let a=0; a<TWO_PI; a += angle) {
        this.sx2 = this.sx;
        this.sy2 = this.sy;
        punti2x[n] = this.sx2;
        punti2y[n] = this.sy2;
        //print(punti1x[n]);
        //print(punti1y[n]);
        this.sx = x + cos(a) * this.r2;
        this.sy = y + sin(a) * this.r2;
        n++;
        }
  }
}
