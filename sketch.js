const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var upButton,rightButton,leftButton,downButton;
var wall1,wall2,wall3;

let options = {
isStatic:true
}

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);

  right = new Ground(390,200,20,400);

  left = new Ground(10,200,20,400);

  top_wall = new Ground(200,10,400,20);

  ball = Bodies.circle(39,350,20);
  World.add(world,ball);

  upButton = createImg("up.png")
  upButton.position(25,30);
  upButton.size(50,30)
  upButton.mouseClicked(Vforce)

 rightButton = createImg("right.png")
 rightButton.position(300,30);
 rightButton.size(50,50)
 rightButton.mouseClicked(Hforce)

 leftButton = createImg("left.png")
 leftButton.position(250,30);
 leftButton.size(50,50)
 leftButton.mouseClicked(Hforce2)

 downButton = createImg("down.png")
 downButton.position(25,70);
 downButton.size(50,30)
 downButton.mouseClicked(Vforce2)

 WinnerFlag = createImg("Winner Flag.png")
 WinnerFlag.position(85,55);
 WinnerFlag.size(50,70)

wall1 = Bodies.rectangle(135,300,230,20,options)
World.add(world,wall1)

wall2 = Bodies.rectangle(260,220,230,20,options)
World.add(world,wall2)

wall3 = Bodies.rectangle(135,130,230,20,options)
World.add(world,wall3)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);

  ground.show();
  top_wall.show();
  left.show();
  right.show();

ellipse(ball.position.x,ball.position.y,20)
rect(wall1.position.x,wall1.position.y,230,20)
rect(wall2.position.x,wall2.position.y,230,20)
rect(wall3.position.x,wall3.position.y,230,20)

  Engine.update(engine);
}

function Vforce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

function Hforce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function Hforce2(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:0})
  }

  function Vforce2(){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
    }
