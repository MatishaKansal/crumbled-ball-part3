// var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
// var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
// function preload() {}

var sling;

function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  //packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
  //World.add(world, packageBody);

  box = new Box(900, 577, 200, 200);

  //   Create a Ground
  //     ground = Bodies.rectangle(width / 2, 600, width, 10, { isStatic: true });
  //     World.add(world, ground);
  paper = new Paper(300, 100, 75, 75);
  ground = new Ground(600, height, 1200, 20);
  // sling = new Launcher(paper.body, { x: 200, y: 200 });
  // slingshot = new Launcher(paper.body, { x: 200, y: 50 });
  // Engine.run(engine);
}

function draw() {
  background(220, 220, 220);
  Matter.Engine.update(engine);
  rectMode(CENTER);
  ground.display();
  box.display();
  paper.display();
  slingshot.display();
  //   drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 270,
      y: -270,
    });
  }
}

function mouseDragged() {
  Matter.body.setPosition(paper.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  sling.fly();
}
