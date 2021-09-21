var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;
var cycleBell;
var redCG,pinkCG,yellowCG;
var END =0;
var PLAY =1;
var gameState = PLAY;
var pink,red,yellow;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  cycleBell=loadSound("sound/bell.mp3");
}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  
//groups
  redCG=new Group();
  pinkCG=new Group();
  yellowCG=new Group();
  
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  
  //calc distance
  distance=distance+ Math.round(getFrameRate()/50);
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
    //play cycle bell sound
    if(keyDown("space")){
       cycleBell.play();
       }
    //call cyclists
    rand=Math.round(random(1,3));
    if(frameCount%90===0){
           if(rand==1){
       pinkCyclists();
    }else if(rand==2){
       redCyclists();
    }else if(rand==3){
       yellowCyclists();
    }
       }

    
 }
  
  
}

function pinkCyclists(){
 
  pink=createSprite(70,60,20,20);
  pink.shapeColor="pink";
  pink.velocityX=4;
  pink.lifetime=width/4;
  //pink.addImage("mainRacerImg2",mainRacerImg1);
  pinkCG.add(pink);
  //pink.scale=0.05;
  
  
  
}
function redCyclists(){
   
  red=createSprite(30,60,20,20);
  red.shapeColor="red";
  red.velocityX=4;
  red.lifetime=width/4;
  //red.addImage("mainRacerImg2",mainRacerImg1);
  redCG.add(red);
  //red.scale=0.05;
  
  
}
function yellowCyclists(){
    
  yellow=createSprite(30,60,20,20);
  yellow.shapeColor="yellow";
  yellow.velocityX=4;
  yellow.lifetime=width/4;
  //yellow.addImage("mainRacerImg2",mainRacerImg1);
  yellowCG.add(yellow);
  //yellow.scale=0.05;
  
}