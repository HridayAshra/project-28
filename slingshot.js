class SlingShot{
    constructor(bodyA, pointB){
        var optionConstraint = {
            bodyA:bodyA, 
            pointB:pointB,
            stiffness:0.05,
            length:30,
        } 
        

        this.bodyA=bodyA;
        this.pointB=pointB;
       this.constraintV = Constraint.create(optionConstraint);
       World.add(world, this.constraintV);
    }
    fly(){
        this.constraintV.bodyA=null;
    // console.log(rock);
    }
    attach(bodyA){
this.constraintV.bodyA;
    }
    display(){


if(this.constraintV.bodyA){

strokeWeight(4);
stroke(48,22,8);

    line(this.constraintV.bodyA.position.x, this.constraintV.bodyA.position.y, this.pointB.x, this.pointB.y);
//line(this.constraintV.bodyA.position.x-20, this.constraintV.bodyA.position.y-10, this.pointB.x-30, this.pointB.y-12);
//  image(this.sling3, this.constraintV.bodyA.position.x-20, this.constraintV.bodyA.position.y-10);
};
    }

     


}