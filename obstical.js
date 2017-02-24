function Obstical(x,y,w,h){
  this.pos = createVector(x,y);
  this.size = createVector(w,h);
}
Obstical.prototype = Object.assign(Obstical.prototype,{
  show(){
    fill(255,0,0);
    rect(this.pos.x,this.pos.y,this.size.x,this.size.y)
    
  },
  getBoundingBox(){
    //same as above comment.
  }
});
