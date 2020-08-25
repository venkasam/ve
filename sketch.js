
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Engine=Matter.Engine;
var link=[]
var par=[]



function setup() {
createCanvas(1200,400);
engine=Engine.create()
world=engine.world;



for(i=0;frameCount%300==0;i=random(100,900)){
  all=new Ball(i,200,PI)

}


}
function draw() {
  background("white");  
  Engine.update(engine)
all.display()

  
  








  drawSprites();
}

function mouseDragged(){
Matter.Body.setPosition(all.body,{x:mouseX,y:mouseY})
}