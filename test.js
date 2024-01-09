function setup() {

}


function draw() {

}let bird1, bird2;

function setup() {
  createCanvas(800, 600);
  bird1 = new Bird(width / 2, height / 2, 2, 2);
  bird2 = new Bird(width / 2, height / 2, -2, 2);
}

function draw() {
  background(255);

  bird1.update();
  bird1.draw();

  bird2.update();
  bird2.draw();

  if (frameCount % 60 === 0) {
    bird1.size *= 1.1;
    bird2.size *= 1.1;
  }
}

class Bird {
  constructor(x, y, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.speedX = speedX;
    this.speedY = speedY;
    this.wingAngle = 0;
    this.wingGoingUp = true;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > width) this.speedX *= -1;
    if (this.y < 0 || this.y > height) this.speedY *= -1;

    this.wingAngle = (this.wingAngle + 0.1) % (PI / 3);
  }

  draw() {
    push();
    translate(this.x, this.y);
    scale(this.size / 20);

    fill(0);
    ellipse(0, 0, 40, 30);

    rotate(this.wingAngle);
    ellipse(20, -5, 40, 20);
    rotate(-2 * this.wingAngle);
    ellipse(20, 5, 40, 20);

    pop();
  }
}
