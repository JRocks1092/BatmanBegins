const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var man;
var Drop = [];
var t1;
var it1, it2, it3, it4;
var thunderCreatedFrame;

function preload() {

    it1 = loadImage("t1.png");
    it2 = loadImage("t2.png");
    it3 = loadImage("t3.png");
    it4 = loadImage("t4.png");
}

function setup() {

    var canvas = createCanvas(600, 600);
    engine = Engine.create();
    world = engine.world;

    man = new umbrella(300, 425);

    for (var i = 0; i < 250; i++) {

        Drop.push(new Drops(random(0, 600), random(0, 600)));

    }
}

function draw() {

    background(0, 0, 0);
    Engine.update(engine);

    man.display();

    displayDrops();
    thunder();
    drawSprites();
}

function thunder() {

    
    var rand = Math.round(random(1, 4));

    if (frameCount % 80 === 0) {

        thunderCreatedFrame = frameCount;
        t1 = createSprite(random(10, 370), random(10, 30), 10, 10);
        t1.lifetime = 12;

        switch (rand) {
            case 1: t1.addImage(it1);
                //console.log(rand);
                //console.log(1);
                break;


            case 2: t1.addImage(it2);
                //console.log(rand);
                //console.log(2);
                break;

            case 3: t1.addImage(it3);
                //console.log(rand);
                //console.log(3);
                break;

            case 4: t1.addImage(it4);
                //console.log(rand);
                //console.log(4);
                break;

            default:

                break;
        }

        t1.scale = random(0.3, 0.6);
    }
}

function displayDrops(){
    
    for (var i = 0; i < 250; i++) {

        Drop[i].display();

    }
}


