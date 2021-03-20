class Dustbin{
	constructor(x,y,width,length){
	var options = {isStatic : true}
     this.body = Bodies.rectangle(x,y,width,length,options)
     World.add(world,this.body)
     this.w = width
     this.l = length
	}

	display(){
     rectMode(CENTER);
     rect(this.body.position.x,this.body.position.y,this.w,this.l)
	}
}