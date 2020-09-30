class Rope {
    constructor(body1, body2, offsetX, OffsetY) {
        this.offsetX = offsetX;
        this.offsetY = OffsetY;

        var options = {
            isStatic:true,
            bodyA: body1,
            bodyB: body2,
            pointB: { x: this.offsetX, y: this.offsetY },
        }
        this.rope = Constrain.create(options);
        World.add(world, this.rope);
    }
    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(5);

        var posAX = pointA.x
        var posAY = pointA.y

        var posBX = pointB.x + this.offsetX
        var posBY = pointB.y + this.offsetY

        line(posAX, posAY, posBX, posBY);
    }
}