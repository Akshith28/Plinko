const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(240,790,480,20);

 
}

function draw() {
  background(0);  

  ground.display();
  console.log(ground.x,ground.y);
  
}