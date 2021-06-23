var starImg,bgImg;
var star, starBody;
//crea la variable para el sprite del hada y fairyImg
var fairy,hadaImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//carga aquí la animación del hada
	hadaImg=loadImage("iamges/fairyImage1.png","iamges/fairyImage2.png");
}

function setup() {
	createCanvas(800, 750);

	//escribe el código para reproducir el sonido fairyVoice
    sound=loadSound("JoyMusic.mp3");
	//crea el sprite del hada, y agrega la animación para el hada
	hada=createSprite(200,200,10,10);
	hada.addImage(hadaImg)

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //escribe aquí el código para detener la estrella en la mano del hada
  if(star.y > 470 && starBody.position.y > 470 ){
	  Matter.Body.setStatic(starBody,true);
  }
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//escribe el código para mover al hada a la izquierda y derecha
	if(keyDown("LEFT_ARROW")){
	 hada.addImage("hada",hadaImg);
	 hada.velocityX=0;

	}
	if(keyDown("RIGHT_ARROW")){
	 hada.addImage("hada",hadaImg);
	 hada.velocityX=0;
	}
}
