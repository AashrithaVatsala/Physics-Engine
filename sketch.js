const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, ball;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;
  
  var oboptions = {
    isStatic:true,
  }

  ground = Bodies.rectangle(200, 350, 400, 50, oboptions);
  World.add(world, ground);
  
  var boptions = {
    restitution : 1
  }

   ball = Bodies.circle(200, 200, 30, boptions)
   World.add(world, ball);
}

function draw() {
  background(0);
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 50);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30, 30)



}