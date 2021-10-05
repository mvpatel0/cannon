const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var canon;
var angle=-PI/4
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
canon = loadImage("assets/cannon_base.png")
}
function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  tower = new Tower(150, 350, 160, 310);
canon = new Cannon(180,110,130,100)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  image(backgroundImg,0,0,width,height)
  Engine.update(engine);
    tower.display();
canon.display()
 
}

