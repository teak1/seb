var keys = {};
var player = {};
var bgColor = 0;
function setup(){
  createCanvas(400,400);
  player = {
    pos:createVector(200,200)
  }
}
function onkeyup(e){
  keys[e.key.toUpperCase()]=true;
}
function onkeydown(e){
  keys[e.key.toUpperCase()]=false;
}
function draw(){
  background(51);
  if(keys.W){
    player.pos.x--;
  }
  if(keys.S){
    player.pos.x++;
  }
  if(keys.A){
    player.pos.x--;
  }
  if(keys.D){
    player.pos.x++;
  }
}
