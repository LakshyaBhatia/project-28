class MANGO{
    constructor(x,y,radius) {
      var options = {
          isStatic : true,
          'restitution' : 0,
          'friction' : 1
      }
      this.radius = radius
      this.x = x
      this.y = y
      this.image = loadImage("sprites/mango.png")
      this.body = Bodies.circle(this.x,this.y,this.radius,options);
       World.add(world, this.body);
      
    }
    display(){
     
      var pos = this.body.position
      
      
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.radius,this.radius);
      
    }
  }
