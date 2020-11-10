var mango1,mango2,mango3,mango4,mango5,mango6;
var mangoes=[];
var boy;
var stone;
var tree;
var ground;
var launcher;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
 
}

function setup() {
	createCanvas(1200, 600);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//boy.addAnimation(boyImage,765,590,1,1);

    ground = new Ground(600,height,1200,20);
    
    boy = new Boy(200, 510, 200, 300);

	stone = new Stone(140,440,50,50);
	tree = new Tree(1000,330,350,550);

    mango1 = new Mango(965,150,60,60);
	mango2 = new Mango(1050,150,60,60);
	mango3 = new Mango(900,240,60,60);
	mango4 = new Mango(1115,240,60,60);
	mango5 = new Mango(955,260,60,60);
    mango6 = new Mango(1015,215,60,60);
    
    mangoes.push(mango6);
    mangoes.push(mango5);
    mangoes.push(mango4);
    mangoes.push(mango3);
    mangoes.push(mango2);
    mangoes.push(mango1);

	launcher = new Launcher(stone.body,{x:200, y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);

  ground.display();
  boy.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  launcher.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}

function detectCollision(stone,mangoes){
mangoesBodyPosition = mangoes.body.position;
stoneBodyPosition = stone.body.position;

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoesBodyPosition.x, mangoesBodyPosition.y);

if(distance<=mangoes+stone){
   Matter.Body.setStatic(mangoes.body,false);
}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:235, y:420});
		launcher.attach(stone.body);
	}
}
