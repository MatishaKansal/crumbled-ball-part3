const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var dustbin, paper, ground, launcher;
var launchingForce = 100;
var lastMouseX = null;
var lastMouseY = null;

function setup() {
  createCanvas(900, 700);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  paper = new Paper(200, 450, 60);
  ground = new Ground(width / 2, 670, width, 20);
  dustbin = new Box(700, 650);
  //powerdisp=new powerdisplay(200,200,100);
  launcher = new Launcher(paper.body, { x: 300, y: 100 });
  //Create a Ground

  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 100,
      height: 100,
      wireframes: false,
    },
  });

  Engine.run(engine);
  //Render.run(render);
}

function draw() {
  //rectMode(CENTER);
  background(230);

  Engine.update(engine);

  ground.display();
  dustbin.display();
  paper.display();
  //powerdisp.display(launchingForce);
  launcher.display();
}

function mouseDragged() {
  Matter.Body.setPosition(paper.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  launcher.fly();
}
