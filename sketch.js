var keys = {};
var player = {};
var bgColor = 0;
var obs; 
function setup(){
  createCanvas(400,400);
  player = new Player(width/2,height/2);
  obs = [new Obstical(0,0,40,40)];
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
  for(var i = 0;i<obs.length;i++)obs[i].show();
}
