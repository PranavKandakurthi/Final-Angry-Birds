class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.slingImage1 = loadImage("sprites/sling1.png");
        this.slingImage2 = loadImage("sprites/sling2.png");
        this.slingImage3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8);
            strokeWeight(10);

            if (pointA.x <220){
                line(pointA.x-20, pointA.y+10, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y+10, pointB.x+20, pointB.y);
                image(this.slingImage3,pointA.x-20, pointA.y+5);

            }
            else{

            line(pointA.x+20, pointA.y+7, pointB.x-10, pointB.y);
            line(pointA.x+20, pointA.y+7, pointB.x+20, pointB.y);
            image(this.slingImage3,pointA.x+20, pointA.y+5);
            }
            
        }
        image(this.slingImage1,200,20);
        image(this.slingImage2,170,20);
        
    }
    
}