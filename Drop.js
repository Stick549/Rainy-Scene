class Drop {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':0.1,
          'density':0.000001
      }
      
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
      World.add(world, this.body);
    }
    display(){
      if(this.body.position.y>800){
        Matter.Body.setPosition(this.body,{x:random(50, 650), y:random(0,-300)})
      }
        fill("blue")
        stroke("blue")
      ellipseMode(CENTER);
      ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
  };