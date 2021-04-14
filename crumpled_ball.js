class crumpledBall{

constructor(x,y,r){

var options={

isStatic:false,
restitution:0.7,
friction:0.2,
density:1.2
}
this.x=x
this.y=y
this.r=r

this.body=Bodies.circle(x,y,r,options);
World.add(world,this.body);


}
display(){

push();

var pos = this.body.position

translate(pos.x,pos.y);

ellipseMode(RADIUS);
fill("purple");
ellipse(0,0,this.r,this.r);

pop();
}



}