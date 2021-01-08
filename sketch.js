
//namespacing
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World =  Matter.World;

var engine, world, ball, ground;
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world; 

  ground = new Ground(600,390,1200,20);
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig1 = new Pig(810,350);
  log1 = new Log(810,260,300,90);

  box3 =  new Box(700,240,70,70);
  box4 =  new Box(920,240,70,70);
  pig2 = new Pig(810,270);
  log2 = new Log(810,180,300,90);
  box5 = new Box(810,160,70,70);
  log4 = new Log(760,120,150, PI/7);
  log5 = new Log(870,120,150, -PI/7);

}

function draw() {
  background(12,10,22); 
  Engine.update(engine); 
  box1.display();
  box2.display();
  ground.display();
  pig1.display(); 
  log1.display();
  box3.display();
  box4.display();
 
  pig2.display(); 
  log2.display();

  
  
}