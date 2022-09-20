

var box1, box2, box3, ground;
var ball;


function setup() 
{
  createCanvas(600, 400);

  ground = new Box(0,300,600,20, "brown");
  box1 = new Box(200, 100, 70, 70, "red");
  box2 = new Box(300, 100, 70, 70, "blue");
  box3 = new Box(400, 100, 70, 70, "green");
  ball = new Ball(100, 200, 40, "green");
}

function draw() 
{
  background(220);

 
  ground.display();
  
  box1.display();
  box2.display()
  box3.display()
  
  ball.display();
}







