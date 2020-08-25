class Ball{
    constructor(x,y,angle){
    
   
    this.image=loadImage("basket.png")
    Matter.Body.setAngle(this.body,angle)
    this.x=x
    this.y=y
    this.angle=angle
    World.add(world,this.body)
    
    
    
    }
    display(){
    var pos = this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ImageMode(CENTER);
    fill("blue");
    image(this.image,0,0);
    pop();
    
    }
    }