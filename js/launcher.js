class Launcher{
    constructor(body, anchor){

    var launcher_options = {
    bodyA: body,
    pointB: anchor,
    stiffness: 0.04,
    length: 12
    }

    this.pointB = anchor;
    this.bodyA = body;
    this.launcher = Constraint.create(launcher_options);
    World.add(world, this.launcher);
    }
    attach(body){
       this.launcher.bodyA = body;
    }

 fly(){
    this.launcher.bodyA = null;
 }
 
 display(){
    if(this.launcher.bodyA){
    var pointA = this.launcher.bodyA.position;
    var pointB = this.pointB; 
    strokeWeight(3);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    }  
 }
}