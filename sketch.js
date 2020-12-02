
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(500,400);


	engine = Engine.create();
	world = engine.world;
	roofObject=new Ground(250,100,250,30)
	bobObject1=new Bob(150,300,50)
	bobObject2=new Bob2(200,300,50)
	bobObject3=new Bob2(250,300,50)
	bobObject4=new Bob2(300,300,50)
	bobObject5=new Bob(350,300,50)
	
	rope1=new SlingShot(bobObject1.body,{x:150,y:100})
	rope2=new SlingShot(bobObject2.body,{x:200,y:100})
	rope3=new SlingShot(bobObject3.body,{x:250,y:100})
	rope4=new SlingShot(bobObject4.body,{x:300,y:100})
	rope5=new SlingShot(bobObject5.body,{x:350,y:100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display()
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
//function mouseDragged(){
 //Matter.Body.setPosition(bobObject1.body,{x:mouseX,y:mouseY})
//}
function keyPressed(){

    if (keyCode===32) {
	
      Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-60,y:70}); 
      
     }

  }


