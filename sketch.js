var bgColor = 0;
function setup(){
  createCanvas(400,400);
}

function draw(){
  bgColor++;
  var r=255,g=255,b=255;
  background(gbColor%123,bgColor%456,bgColor%789);
}
