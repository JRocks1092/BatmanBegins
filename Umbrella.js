class umbrella{

    constructor(x,y){

        var options = {

            'isStatic' : true,
            
        }

        this.width = 350;
        this.height = 400;
        this.x = x;
        this.y = y;
        this.image = loadImage("walking_1.png");
        this.body = Matter.Bodies.circle(x+5, y-78, this.width/4.5, options);
        World.add(world, this.body);

    }

    display(){
        
        //ellipseMode(CENTER);
        //ellipse(this.x+5, this.y-78, this.width/2.25, this.width/2.25);

        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
        

    }

}