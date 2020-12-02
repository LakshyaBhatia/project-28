class TREE {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("sprites/tree.png")
    }
    display(){
      var pos =this.body.position;
      
      
      
      imageMode(CENTER);
      image(this.image,900,370,400,700)
    }
  }