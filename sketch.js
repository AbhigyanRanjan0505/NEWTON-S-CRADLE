const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constrain = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width / 2, 200, 175, 20);
	bob1 = new Bob1(width / 2, 400, 15);
	bob2 = new Bob1(370, 400, 15);
	bob3 = new Bob1(430, 400, 15);
	bob4 = new Bob(340, 400, 15);
	bob5 = new Bob(460, 400, 15);
	rope1 = new Rope(bob1.body, roof.body, 0, 0);
	rope2 = new Rope(bob2.body, roof.body, -30, 0);
	rope3 = new Rope(bob3.body, roof.body, 30, 0);
	rope4 = new Rope(bob4.body, roof.body, -60, 0);
	rope5 = new Rope(bob5.body, roof.body, 60, 0);

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(225);

	Engine.update(engine);

	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob4.body, bob4.body.position, { x: -23, y: 23 });
	}
}