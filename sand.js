class Sand{
    constructor(x, y,r) {
        var options = {
            'restitution':1.3,
            'friction':5,
            'density':1
        }
        this.body = Bodies.circle(x, y, r/2, options);
        this.r = r;
      
        World.add(world, this.body);
      }
      display(){
        
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        strokeWeight(4)
        stroke("orange")
        fill("brown");
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.r, this.r);
        pop();
      }
}