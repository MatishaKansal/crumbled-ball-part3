class Paper {
  constructor(x, y, width, height) {
    var options = {
      // isStatic: false,
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
    };

    // this.body = Bodies.circle(x, y, radius, options);
    // World.add(world, this.body);
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("paper.png");
    World.add(world, this.body);
    // this.radius = radius;
    // World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    // ellipseMode(RADIUS);
    // ellipse(0, 0, this.radius);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
