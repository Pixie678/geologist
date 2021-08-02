
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,stone,rubber,ground,iron;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;

function preload()
{
	
}

function setup() {
	createCanvas(900, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(450,590,900,10);

	hammer = new Hammer(100,100,70,30);

	stone = new Stone(400,550,20,20);

	iron = new Iron(520,550,100,20);

	rubber = new Rubber(300,550,30,30);

	sand1 = new Sand(125,550,10);
	sand2 = new Sand(130,550,10);
	sand3 = new Sand(135,550,10);
	sand4 = new Sand(140,550,10);
	sand5 = new Sand(145,550,10);
	sand6 = new Sand(150,550,10);
	sand7 = new Sand(155,550,10);
	sand8 = new Sand(160,550,10);
	sand9 = new Sand(165,550,10);
	sand10 = new Sand(170,550,10);
	






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
 
}



