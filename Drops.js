class Drops{

    constructor(x, y){

        var options = {

            'friction' : 0.1

        }

        this.x = x;
        this.y = y;

        this.body = Matter.Bodies.circle(x, y, 2.5, options);

        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;

        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, 5, 5);

        if(this.body.position.y > 600){

            Matter.Body.setPosition(this.body, {x:this.x, y:-1});

        }

    }

}