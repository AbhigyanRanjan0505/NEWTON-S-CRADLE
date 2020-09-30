class Bob1 {
    constructor(x, y, radius) {
        var options1 = {
            'restitution': 1.2,
            'friction': 0.5,
            'density': 1.2
        }
        this.body = Bodies.circle(x, y, radius, options1);
        this.radius = radius;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill(0);
        ellipse(0, 0, this.radius);
        pop();
    }
}