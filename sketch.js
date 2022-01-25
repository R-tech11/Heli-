
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var choper, ground;


function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  var cOptions = {
    isStatic: false,
    restitution: 0.8
  }

  var gOptions = {
    isStatic: true
  }

  choper = Bodies.rectangle(100, height/2, 100, 10, cOptions);
  World.add(world, choper);

  ground = Bodies.rectangle(0, height - 10, width, 10, gOptions);
  World.add(world, ground);
  
}


function draw() 
{
  background(0);
  Engine.update(engine);

  rect(choper.position.x, choper.position.x, 100, 10);
  rect(ground.position.x, ground.position.y, width, 10)
  
}

