var a;
var b, g;
var intro1;
var intro2;
var treffer;

function setup() {
  createCanvas(800, 800);
  frameRate(60);
  angleMode(DEGREES);
  intro1 = true;
  intro2 = true;
  treffer = 0;
  a = 0;
  b = new raketeb();
  g = new raketeg();
}

function draw() {
  background(30, 51, 87);

  planeten();

  b.move();
  b.display();

  g.move();
  g.display();

  punkte();

  if (intro1) {
    introa();
  } else if (intro2) {
    introb();
  }
}

function introa() {
  fill("white");
  textAlign(CENTER, TOP);
  textSize(75);
  textStyle(NORMAL);
  text("ACHTUNG", 400, 70);

  textAlign(CENTER, CENTER);
  textSize(65);
  textStyle(NORMAL);
  text("für Kinder zwischen", 400, 340);
  text("7 und 13 Jahren geeignet", 400, 460);

  textAlign(CENTER, CENTER);
  textSize(35);
  textStyle(ITALIC);
  text("klick", 400, 700);
}

function introb() {
  fill("white");
  textAlign(CENTER, TOP);
  textSize(90);
  textStyle(NORMAL);
  text("VARUP", 400, 30);

  textAlign(CENTER, CENTER);
  textSize(65);
  textStyle(NORMAL);
  text("Vorsicht Aliens!", 400, 160);
  text("Rette Unsere Planeten", 400, 220);

  textAlign(CENTER, CENTER);
  textSize(40);
  textStyle(NORMAL);
  text("Die Aliens in den bösen Raketen", 400, 290);
  text("wollen die Planeten einnehmen.", 400, 345);
  text("Klicke auf böse Raketen,", 400, 400);
  text("um Punkte zu bekommen.", 400, 455);
  text("Die guten Raketen beschützen die Planeten,", 400, 510);
  text("klicke also nicht auf gute Raketen,", 400, 565);
  text("sonst verlierst du Punkte.", 400, 630);

  textAlign(CENTER, CENTER);
  textSize(35);
  textStyle(ITALIC);
  text("klick", 400, 700);
}

function mouseClicked() {
  if (intro1 == false) {
    intro2 = false;
  }

  intro1 = false;

  b.hit();
  g.hit();
}

function planeten() {
  push();
  translate(width / 2, height / 2);

  var marsv = 1.4;
  var erdev = -1;
  var jupiterv = -0.45;
  var saturnv = 0.3;

  //Sonne
  push();
  strokeWeight(0);
  fill(157, 136, 58);
  ellipse(0, 0, 110, 110);
  pop();

  //Mars
  push();
  rotate(a * marsv);
  strokeWeight(0);
  fill(142, 86, 59);
  ellipse(0, -100, 23, 23);
  pop();

  //Erde
  push();
  rotate(a * erdev + 180);
  strokeWeight(0);
  fill(50, 72, 117);
  ellipse(0, -150, 27, 27);
  pop();

  //Jupiter
  push();
  rotate(a * jupiterv + 270);
  strokeWeight(0);
  fill(106, 93, 93);
  ellipse(0, -220, 48, 48);
  pop();

  //Saturn
  push();
  rotate(a * saturnv + 90);
  stroke(140, 121, 121);
  strokeWeight(10);
  fill(162, 135, 135);
  ellipse(0, -320, 48, 48);
  pop();

  pop();

  a++;
}

function raketeb() {
  var p = round(random(0, 1));

  if (p == 0) {
    this.pos = createVector(-600, random(-300, 300));

    this.run = createVector(random(10, 12), random(4, -4));
  } else if (p == 1) {
    this.pos = createVector(600, random(-300, 300));

    this.run = createVector(-1 * random(10, 12), random(-4, 4));
  }

  this.display = function() {
    push();
    translate(this.pos.x + 400, this.pos.y + 400);

    strokeWeight(0);
    rotate(this.run.heading());

    fill(8, 108, 27);
    triangle(-65, 0, 50, 0, -20, -50);
    triangle(-65, 0, 50, 0, -20, 50);

    fill(0, 189, 57);
    ellipse(-90, 0, 83.7, 35);
    fill(227, 227, 24);
    ellipse(-70, 0, 60, 20);

    fill(204, 19, 19);
    ellipse(0, 0, 150, 50);

    fill(14, 36, 106);
    triangle(30, -12.5, 54, 0, 30, 12.5);

    //quad(-130, -50, -130, 50, 75, 50, 75, -50);
    pop();
  };

  this.move = function() {
    this.reset();
    this.pos.add(this.run);
  };

  this.reset = function() {
    if (this.pos.x > 700 || this.pos.x < -700) {
      var p = round(random(0, 1));

      if (p == 0) {
        this.pos = createVector(-600, random(-300, 300));

        this.run = createVector(random(10, 12), random(4, -4));
      } else if (p == 1) {
        this.pos = createVector(600, random(-300, 300));

        this.run = createVector(-1 * random(10, 12), random(-4, 4));
      }
    }
  };

  this.hit = function() {
    push();

    var ifX = mouseX > this.pos.x - 130 + 400 && mouseX < this.pos.x + 75 + 400;
    var ifY = mouseY > this.pos.y - 50 + 400 && mouseY < this.pos.x + 50 + 400;

    if (ifX && ifY) {
      treffer++;
    }
    pop();
  };
}

function raketeg() {
  var p = round(random(0, 1));

  if (p == 0) {
    this.pos = createVector(-600, random(-300, 300));

    this.run = createVector(random(10, 12), random(4, -4));
  } else if (p == 1) {
    this.pos = createVector(600, random(-300, 300));

    this.run = createVector(-1 * random(10, 12), random(-4, 4));
  }

  this.display = function() {
    push();
    translate(this.pos.x + 400, this.pos.y + 400);

    rotate(this.run.heading());

    strokeWeight(0);

    fill(116, 116, 116);
    quad(-20, -55, 20, -20, -5, 0, -40, -30);
    quad(-20, 55, 20, 20, -5, 0, -40, 30);

    fill(221, 0, 0);
    ellipse(-75, 0, 80, 40);

    fill(255, 179, 37);
    ellipse(-65, 0, 50, 20);

    fill(116, 116, 116);
    ellipse(0, 0, 130, 50);

    fill(240, 185, 185);
    ellipse(45, 0, 15, 15);

    fill(92, 189, 160);
    ellipse(15, 0, 20, 20);

    pop();
  };

  this.move = function() {
    this.reset();
    this.pos.add(this.run);
  };

  this.reset = function() {
    if (this.pos.x > 700 || this.pos.x < -700) {
      var p = round(random(0, 1));

      if (p == 0) {
        this.pos = createVector(-600, random(-300, 300));

        this.run = createVector(random(10, 12), random(4, -4));
      } else if (p == 1) {
        this.posg = createVector(600, random(-300, 300));

        this.run = createVector(-1 * random(10, 12), random(-4, 4));
      }
    }
  };

  this.hit = function() {
    push();

    var ifX = mouseX > this.pos.x - 130 + 400 && mouseX < this.pos.x + 75 + 400;
    var ifY = mouseY > this.pos.y - 50 + 400 && mouseY < this.pos.x + 50 + 400;

    if (ifX && ifY) {
      treffer--;
    }

    pop();
  };
}

function punkte() {
  fill("white");
  textSize(25);
  textAlign(LEFT);
  text("Punkte: " + treffer, 20, 30);
}
