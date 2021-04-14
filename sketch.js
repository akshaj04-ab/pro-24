
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin_left,dustbin_right,dustbin_base;
var ground;
var paperBall;




function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	paperBall=new crumpledBall(200,200,10);

	ground=new Ground(500,250,1000,10);

	dustbin_base=new Ground(770,235,200,20);

	dustbin_left=new Ground(670,180,20,100);

	dustbin_right=new Ground(870,180,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperBall.display();
  ground.display();
  dustbin_base.display();
  dustbin_left.display();
  dustbin_right.display();
  
  drawSprites();
 
}

function keyPressed(){

if(keyCode===UP_ARROW){
Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:10,y:-8});
}
}



