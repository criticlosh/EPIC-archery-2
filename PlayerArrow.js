class playerArrow{
constructor(x, y, width, height) {
var options = {
isStatic : true,
restitution : 0.1,
density : 1.0,
friction : 1.0
}
this.body = Bodies.rectangle(x, y, width, height)
this.width = width
this.height = height
this.image = loadImage("assets/arrow.png")
World.add(world, this.body)
}

shoot(archerAngle){ 
var velocity = p5.Vector.fromAngle(archerAngle)
velocity.mult(20)
Matter.body.setStatic(this.body, false);
Matter.body.setVelocity(this.body, {
x: velcoty.x, y: velocity.y})
}
display() {
    var pos = this.body.position
    var angle = this.body.angle
        push();
    translate(pos.x, pos.y)
    rotate(angle)
    imageMode(CENTER)
    image(this.image, 0, 0, this.width, this.height)
    pop();
    }

}