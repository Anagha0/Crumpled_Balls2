
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground = new Ground()
     paper = new Paper(200,450,20)
     binPart1 = new Dustbin(902,505,10,120);
     binPart2 = new Dustbin(962,565,130,10);
     binPart3 = new Dustbin(1024,505,10,120);

	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  paper.display()
  binPart1.display()
  binPart2.display()
  binPart3.display() 
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-75})
	}
}



