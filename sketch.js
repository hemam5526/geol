
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rubber,hammer,plane,stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var canvas = createCanvas(1200,400);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(200,100)

	plane = new Plane(500,390,1400,20)

	stone = new Stone(700,320,100,100,(PI/7))

	rubber = new Rubber(800,380,5)

	sand = new Sand(300,400,100,100,(PI/5))

	
	iron = new Iron(300,450)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#ADD8E6");

  hammer.display()
  plane.display()
  stone.display()
  rubber.display()
  sand.display()
  iron.display()
  
  drawSprites();
 
}



