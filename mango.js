class MANGO {
    constructor(x,y,radius) {
      var options = {
          isStatic: true,
          restitution : 0,
          friction : 1
      }
      this.body = Bodies.rectangle(x,y,radius,options);
     this.radius = radius
      World.add(world, this.body);
      this.image = loadImage("sprites/mango.png")
    }
    display(){
     
      var pos = this.body.position
      
      
      imageMode(CENTER);
      image(this.image,900,160,40,40)
      image(this.image,950,220,50,50)
    }
  }
