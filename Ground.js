class Ground{
	constructor(){
     var options = {isStatic : true}
     this.body = Bodies.rectangle(200,570,2000,20,options)
     World.add(world,this.body)
	}

	display(){
     rectMode(CENTER);
     rect(this.body.position.x,this.body.position.y,2000,20)
	}

}