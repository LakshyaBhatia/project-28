
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wow,ground;
var boy,boyImage;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6;

function preload()
{
  boyImage = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	wow = new TREE(900,370,400,700);
	ground = new GROUND(600,690,1200,10);
	boy = Bodies.rectangle(200,600,300,300);
	stone = new STONE(100,500,70,70);

	mango1 = new MANGO(900.460,30);
	mango2 = new MANGO(500,20,30);
	mango3 = new MANGO(100,120,30);
	mango4 = new MANGO(100,180,30);
	mango5 = new MANGO(100,280,30);
	mango6 = new MANGO(100,400,30);


	World.add(world,boy);
 
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  wow.display();
  ground.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  image(boyImage,200,600,300,300)
  drawSprites();
 
}



