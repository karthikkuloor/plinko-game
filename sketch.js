
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground1;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionheight=300;
function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

 ground1=new Ground(220,780,540,20);
 
 for(var k=0;k<=width;k=k+80){
  divisions.push(new Division(k,height-divisionheight/2,10,divisionheight));
}

for(var j=40;j<=width;j=j+50){
  plinkos.push(new Plinko(j,75));
}
for(var j=15;j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,175));
}
for(var j=5;j<=width;j=j+50){
  plinkos.push(new Plinko(j,275));
}
for(var j=5;j<=width;j=j+50){
  plinkos.push(new Plinko(j,375));
}




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  ground1.display();
  for(var s=0;s<particles.length;s++){
    particles[s].display();
  }
for(var k=0;k<divisions.length;k++){
divisions[k].display();
}
for(var j=0;j<plinkos.length;j++){
  plinkos[j].display();
}

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
 
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
   
    }
  drawSprites();
}

		

			
