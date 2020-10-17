
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1, mango2, mango3, mango4, mango5, mango6, tree, rock, manImg, sling;

var MX, MY;

MX=150;
MY=500;

const Constraint=Matter.Constraint;

function preload()
{
	manImg=loadImage("images/boy.png");
	tree=loadImage("images/tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	mango1 = new Mango(500, 300);
	mango2 = new Mango(600, 300);
	mango3 = new Mango(650, 300);
	mango4 = new Mango(550, 300);
	mango5 = new Mango(700, 300);
//	mango6 = new Mango(30, 30);
	rock=new Rock(500,500);
	sling=new SlingShot(rock.body, {x:MX-40,y:MY-25});

	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  sling.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
//mango6.display();
rock.display();
imageMode(CENTER);
image(manImg, MX, MY, 120,120);
image(tree,600,300,280,280);
  //drawSprites();i
 detectCollision(rock, mango1);
 detectCollision(rock, mango2);
 detectCollision(rock, mango3);
 detectCollision(rock, mango4);
 detectCollision(rock, mango5);
 playAgain();
}

function mouseDragged(){
	Matter.Body.setPosition(rock.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	sling.fly();
}

function detectCollision(body1, body2){
body1Position=body1.body.position
body2Position=body2.body.position

var distance=dist(body1Position.x, body1Position.y, body2Position.x, body2Position.y)
if(distance<=body2.r+body1.r){
Matter.Body.setStatic(body2.body, false);
}
}


function playAgain(){
	if(keyCode==32){
		Matter.Body.setPosition(rock.body,  {x:MX-40,y:MY-25});
		sling.attach(rock.body);
	}
}