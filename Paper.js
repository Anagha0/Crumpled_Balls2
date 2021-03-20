class Paper{
	constructor(x,y,radius){
       var options = {isStatic : false , restitution : 0.3, friction : 0.5, density : 1.2}
       this.body = Bodies.circle(x,y,radius,options)
       World.add(world,this.body);
       this.r = radius
	}

	display(){
		//push()
		//translate(this.body.position.x,this.body.position.y)
		ellipseMode(RADIUS)
		ellipse(this.body.position.x,this.body.position.y,this.r , this.r)
		//pop()
	}
}