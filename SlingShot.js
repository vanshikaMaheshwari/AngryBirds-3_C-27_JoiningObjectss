class SlingShot{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 1,
            length: 65
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    display(){
        var pointA = this.sling.bodyA.position
        var pointB = this.sling.bodyB.position
        push();
        strokeWeight(5);
        fill("purple");
        stroke("purple");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}