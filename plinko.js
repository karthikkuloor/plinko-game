class Plinko{
    constructor(x,y,radius,diameter){
var options={restitution:1.5,friction:100,density:20,isStatic:true}
this.body=Bodies.rectangle(x,y,radius,diameter,options);
this.radius=10;
this.diameter=10;
World.add(world,this.body)
} 
display(){
    var angle=this.body.angle
push();
translate(this.body.position.x,this.body.position.y);
rotate(angle)
fill("white");
ellipseMode(CENTER);
ellipse(0,0,20,20);
pop();
}  
}