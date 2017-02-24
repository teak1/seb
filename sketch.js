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
  player.move();
  player.show();
}
