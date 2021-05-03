class Monster {
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.x=x;
      this.y=y;
      this.width = width;
      this.image= loadImage("monsterImage.png");
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      image(this.image, this.x, this.y, this.width, this.height);

      
      
     
     
    }
}  
    