class Sand{

    constructor(x, y, width, height,angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        Matter.Body.setAngle(this.body,angle)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
      
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER)
        fill("red")
        rect(0,0,this.width,this.height)
        pop();
      }
    
    
    }
    