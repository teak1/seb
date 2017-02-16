var bgColor = 0;
function setup(){
  createCanvas(400,400);
}

function draw(){
  bgColor++;
  var r=255,g=255,b=255;
  if(bgColor>255)r=bgColor;
  if(bgColor>255 && bgColor<510)b=bgColor-255;
  if(bgColor>510 && bgColor<765)g=bgColor-510;
  if(bgColor>765)bgColor=0;
  background(r,g,b);
}
