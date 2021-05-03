const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var  Alex_left, Alex_right, alex_jump, alex_down;
var monster, monster_left, monster_right, monster_sleep;
var carsGroup;
var Canvas, backgroundImage;
var score;
var gameState=0;
var rainGroup;
var hitsound, checkpointsound, backgroundsound, diesound;
var carImage, alexImage, monsterImage, houseImage;
var ground;

var engine, world;

function preload(){
 backgroundImage=loadImage("background image2.jpg");
 monsterImage=loadImage("monsterImage.png");
 alexImage=loadImage("alexImage.png");
 alex_jump=loadImage("alex jump.png");
 alex_down=loadImage("alex_down.png");
}

function setup(){
  createCanvas(1200, 700);
  engine=Engine.create();
  world=engine.world;
  
  alex= new Alex(3, 350, 300, 300);
  monster= new Monster(900, 350, 300, 300);

  
  
  //carsGroup= createGroup();
  //rainGroup= createGroup();

  score=0;


  
}

function draw(){
    background(backgroundImage);
    Engine.update(engine);

    //Text("score:"+ score,500,50);

       alex.display();
       monster.display();
       alex.keys();
}