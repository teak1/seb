function Obstical(x,y,w,h){
  this.pos = createVector(x,y);
  this.size = createVector(w,h);
}
Obstical.prototype = Object.assign(Obstical.prototype,{
  show(){
    //seby, your turn
  },
  getBoundingBox(){
    //same as above comment.
  }
});
