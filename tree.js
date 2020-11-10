class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2,
        }
      this.body = Bodies.rectangle(x, y, 350, 550, options);
      this.width = 350;
      this.height = 550;
      this.image=loadImage("tree.png");
      World.add(world,this.body);
    }

    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      pop();
     }
   }
   