function Player(x,y,speed){
  this.pos = createVector(x,y);
  this.speed = speed || 1;
}
Player.prototype = Object.assign(
Player.prototype,
{
  move(){
    if(keys.W||keys.ARROWUP){
      this.pos.y-=this.speed;
    }
    if(keys.S||keys.ARROWDOWN){
      this.pos.y+=this.speed;
    }
    if(keys.A||keys.ARROWLEFT){
      this.pos.x-=this.speed;
    }
    if(keys.D||keys.ARROWRIGHT){
      this.pos.x+=this.speed;
    }
  },
  show(){
    fill(255);
    rect(this.pos.x-5,this.pos.y-5,10,10);
  }
}
);
