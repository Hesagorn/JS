let punti1x = [];
let punti1y = [];
let punti2x = [];
let punti2y = [];
let x = 0, y = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  poligono1 = new poligono(70, 6);
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
  background(150);
  poligono2.forma2();

  x = x + 2;
  y = y + 2;
  muro1 = new muro(500 - x, 530 - y, 6, 0);
  trapezio1();
  trapezio2();
  trapezio3();
  trapezio4();
  trapezio5();
  trapezio6();
  poligono1.forma();
}

function trapezio3() {
    muro1.vertici1();
    muro1.vertici2();
    fill(255, 0, 255);
    beginShape();
    vertex(punti1x[1], punti1y[1]);
    vertex(punti1x[2], punti1y[2]);
    vertex(punti2x[2], punti2y[2]);
    vertex(punti2x[1], punti2y[1]);
    endShape(CLOSE);
}

function trapezio4() {
    muro1.vertici1();
    muro1.vertici2();
    fill(255, 0, 255);
    beginShape();
    vertex(punti1x[2], punti1y[2]);
    vertex(punti1x[3], punti1y[3]);
    vertex(punti2x[3], punti2y[3]);
    vertex(punti2x[2], punti2y[2]);
    endShape(CLOSE);
}

function trapezio5() {
    muro1.vertici1();
    muro1.vertici2();
    fill(255, 0, 255);
    beginShape();
    vertex(punti1x[3], punti1y[3]);
    vertex(punti1x[4], punti1y[4]);
    vertex(punti2x[4], punti2y[4]);
    vertex(punti2x[3], punti2y[3]);
    endShape(CLOSE);
}

function trapezio6() {
    muro1.vertici1();
    muro1.vertici2();
    fill(255, 0, 255);
    beginShape();
    vertex(punti1x[4], punti1y[4]);
    vertex(punti1x[5], punti1y[5]);
    vertex(punti2x[5], punti2y[5]);
    vertex(punti2x[4], punti2y[4]);
    endShape(CLOSE);
}

function trapezio1() {
    muro1.vertici1();
    muro1.vertici2();
    fill(255, 0, 255);
    beginShape();
    vertex(punti1x[5], punti1y[5]);
    vertex(punti1x[6], punti1y[6]);
    vertex(punti2x[6], punti2y[6]);
    vertex(punti2x[5], punti2y[5]);
    endShape(CLOSE);
}

function trapezio2() {
    muro1.vertici1();
    muro1.vertici2();
    fill(255, 0, 255);
    beginShape();
    vertex(punti1x[6], punti1y[6]);
    vertex(punti1x[1], punti1y[1]);
    vertex(punti2x[1], punti2y[1]);
    vertex(punti2x[6], punti2y[6]);
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
    strokeWeight(5);
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
  constructor(r, r2, l, v, sx, sy, sx2, sy2) {
    this.r = r;
    this.r2 = r2;
    this.l = l;
    this.v = v;
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
