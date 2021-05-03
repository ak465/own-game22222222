class Alex {
  constructor(x, y, width, height) {
     
      this.body = Bodies.rectangle(x, y, width, height);
      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;
      this.image = loadImage("alexImage.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      image(this.image, this.x, this.y, this.width, this.height);
      
     
     
    }
    keys(){
      if(keyIsDown(LEFT_ARROW)){
        this.x-=2;
      
      }
      if(keyIsDown(RIGHT_ARROW)){
        this.x+=2;
      }
      if(keyIsDown(UP_ARROW)){
        this.image=loadImage("alex jump.png");
        this.y-=2;
        
      }
      if(keyIsDown(DOWN_ARROW)){
        this.image=loadImage("alex_down.png");
        this.y+=2;
      }
      
    }
} 


    
    