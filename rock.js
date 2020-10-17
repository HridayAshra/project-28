class Rock{
    constructor(x,y){
     
var optionM={
    restitution:0.75,
    isStatic:false,
    mass:1,
}

this.body=Bodies.circle(x,y,20, optionM);

World.add(world, this.body);

this.image=loadImage("images/rock.png");

    }

display(){
push();

translate(this.body.position.x, this.body.position.y);
rotate(this.body.angle);

imageMode(CENTER);
image(this.image,0,0, 50, 50);
pop();
    }
}