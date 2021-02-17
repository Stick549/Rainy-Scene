
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var  drops = []
var maxDrops = 100
var um, im, rand;
var thunderCreatedFrame, thunder, thunder1, thunder2, ran1, ran2;
function preload(){
    
}

function setup(){
   createCanvas(700, 800)
   engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  rand = Math.round(random(1,4));
  um = new Umbrella(350, 400, 400, 20)
  im = loadImage("walking_1.png")
  thunder1 = loadImage("2.png")
  thunder2 = loadImage("3.png")
  for(var i = 0; i < maxDrops; i++){
    drops.push(new Drop(random(50, 650), random(0,-300), 10))
  }
    
}

function draw(){
    background(0)
    drawSprites()
    for(var i = 0; i < drops.length; i++){
        drops[i].display()
      }
      image(im, -50, 150)
      if(frameCount%80 === 0){
        ran1 = random(50, 650)
        ran2 = random(-10, 10)
      }

      if(frameCount%80 < 12){
        image(thunder1, ran1, ran2, 450, 450)
      }
    Engine.update(engine);
}   

