class Particle{
    constructor(x,y,radius,diameter){
var options={restitution:0.5,isStatic:false}
this.body=Bodies.rectangle(x,y,radius,diameter,options);

this.radius=radius;
this.diameter=diameter;
World.add(world,this.body)
} 
display(){
    var angle=this.body.angle
push();
translate(this.body.position.x,this.body.position.y);
rotate(angle)
fill("orange");
ellipseMode(CENTER);
ellipse(240,20,this.radius,this.diameter);
pop();
}  
}