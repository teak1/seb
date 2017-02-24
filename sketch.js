var keys = {};
var player = {};
var bgColor = 0;
function setup(){
  createCanvas(400,400);
  player = new Player(width/2,height/2);
}
function keyReleased(e) {
  console.log(e.key.toUpperCase());
  keys[e.key.toUpperCase()]=false;
}
function keyPressed(e){
  console.log(e.key.toUpperCase());
  keys[e.key.toUpperCase()]=true;
}
function draw(){
  background(51);
  if(keys.W){
    player.pos.y--;
  }
  if(keys.S){
    player.pos.y++;
  }
  if(keys.A){
    player.pos.x--;
  }
  if(keys.D){
    player.pos.x++;
  }
  fill(random(255),random(255),random(255));
  rect(player.pos.x,player.pos.y,10,10);
}
