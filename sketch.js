var sea,ship;
var seaImg,shipImg;

//Carregar imagens 
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png",
                            "ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Plano de fundo móvel
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  //Criar o sprite Ship
  ship = createSprite(130,200,30,30);
  
  // Acrecentar a animacao com o rotolo "aa"
  ship.addAnimation("aa",shipImg1);
  // Modificar o tamanho da animacao ship
  ship.scale =0.25;
  
}

function draw() {
  // Fazer o fundo preto
  background(0);

  //Fazer a mar se movimentar para a esquerda
  sea.velocityX = -3;

  
  //código para redefinir o plano de fundo
  if(sea.x < 0){
   // Reposicionar a animacao sea para aparacer no comeco da tela novamente dividinda sua largura por 8
    sea.x = sea.width/8;
  }
    
  drawSprites();
}
