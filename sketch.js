var keys = {};
// var player = {};
// var bgColor = 0;
// function setup(){
//   createCanvas(400,400);
//   player = {
//     pos:createVector(200,200)
//   }
// }
function onkeyup(e){
  console.log(e.key.toUpperCase());
  keys[e.key.toUpperCase()]=false;
}
function onkeydown(e){
  console.log(e.key.toUpperCase());
  keys[e.key.toUpperCase()]=true;
}
// function draw(){
//   background(51);
//   if(keys.W){
//     player.pos.x--;
//   }
//   if(keys.S){
//     player.pos.x++;
//   }
//   if(keys.A){
//     player.pos.x--;
//   }
//   if(keys.D){
//     player.pos.x++;
//   }
//   fill(255,255,255);
//   rect(player.pos.x,player.pos.y,10,10);
// }
