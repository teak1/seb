function Player(x,y,speed){
  this.pos = createVector(x,y);
  this.speed = speed || 1;
  this.size = createVector(10,10);
  this.obs;
}
var t;
Player.prototype = Object.assign(
Player.prototype,
{
  move(){
    this.obs = obs;
    if(keys.W||keys.ARROWUP){
      if(checkCollision(this,createVector(0,-this.speed))){
        this.pos.y-=this.speed;
      }
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
  show()
  {
    fill(255);
    rect(this.pos.x-5,this.pos.y-5,this.size.x,this.size.y);
  }
}
);
function checkCollision(pp,offset){
  var p = pp;
    for(var i = 0;i<p.obs.length;i++){
      var current = p.obs[i];
      t = {pos:p.pos.copy().add(offset),size:p.size}
      var cBB = current.getBoundingBox();
      //this.x+this.w>other.x && this.x<other.x+other.w && this.y+this.h>other.y && this.y < other.y+other.h
      //this.x+this.w>other.x && this.x<other.x+other.w && this.y+this.h>other.y && this.y < other.y+other.h
      if(t.pos.x+t.size.x>cBB.pos.x&&
        cBB.pos.x+cBB.size.x>t.pos.x&&
        t.pos.y+t.size.y>cBB.pos.y&&
        cBB.pos.y+cBB.size.y>t.pos.y ){
        return true;
      }
    }
    return false;
}
