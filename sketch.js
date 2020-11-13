
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, paper, bin1, bin2, bin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(50, 350, 20);
ground = new Ground(400, 500, 800, 20);
bin1 = new Box(600, 480, 100, 20);
bin2 = new Box(550, 440, 20, 100);
bin3 = new Box(650, 440, 20, 100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
ground.display();
bin1.display();
bin2.display();
bin3.display();
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position, {x:10, y:-6})
}
}


