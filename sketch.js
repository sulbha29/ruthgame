var runner
 var runImg
 var idle
 var ground
 var invGround
 var groundImg
 var goldImg
 var silverImg
var bronzeImg
var coinsGroup
var stoneImg;

function preload(){
runImg = loadAnimation("images1/run1.png","images1/run3.png","images1/run4.png");
idle = loadImage("images1/idle.png")
groundImg = loadImage("images1/ground2.png")
goldImg = loadAnimation("images1/Gold_a.png","images1/Gold_b.png","images1/Gold_c.png")
silverImg = loadAnimation("images1/Silver_a.png","images1/Silver_b.png","images1/Silver_c.png")
bronzeImg = loadAnimation("images1/Bronze_a.png","images1/Bronze_b.png","images1/Bronze_c.png")
stoneImg = loadImage("images1/stone_burned.png")
 }
 function setup(){
createCanvas(1200,800)
  runner = createSprite(150,580,100,100)
  runner.scale = 2.0;
  runner.addImage(idle);
  runner.addAnimation("running",runImg)
  ground = createSprite(600,685,1200,20)
  invGround = createSprite(600,710,1200,10)
  invGround.visible = false;
  ground.addImage(groundImg);
  coinsGroup = new Group();
 }
 function draw(){
   background("white")
   runner.collide(invGround);
   if(keyDown("space")){
    ground.velocityX = -6
    runner.changeAnimation("running",runImg)
   }
   if(ground.x<0){
ground.x = ground.width/2;
   }  

   Coins();
   obstacles();
    drawSprites();
 }
 function Coins(){
    if(World.frameCount%100 === 0){
       var Gcoin = createSprite(800,600,10,10);
       Gcoin.velocityX = -5
       var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: Gcoin.addAnimation("gold",goldImg);
              break;
      case 2: Gcoin.addAnimation("silver",silverImg);
              break;
      case 3: Gcoin.addAnimation("bronze",bronzeImg);
              break;
      default: break;
    }
    coinsGroup.add(Gcoin);
    Gcoin.scale = 0.09
    }
    
 }
 function obstacles(){
    if(World.frameCount%70 === 0){
       var stone = createSprite(800,660,10,10)
       stone.addImage(stoneImg)
       stone.velocityX = -3
       stone.scale=0.1
    }
 }