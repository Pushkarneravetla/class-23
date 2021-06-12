class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':1.8,
        
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angl = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angl);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height, angl);
    pop();
  }
};
