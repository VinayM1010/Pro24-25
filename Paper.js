class Paper {
    constructor(x, y, r) {
      var options = {
          'restitution':0.1,
          'friction':1.3,
          'density':2.0
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill(255);
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
  