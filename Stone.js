class Stone{

    constructor(x,y,r){
    var op = {
        isStatic:false,
        restitution:0,
        friction:0.5,
        density:1.2
    }

    
        this.body = Bodies.circle(x,y,r)
   // this.width = width;
 // this.height = height;
    this.r = r
    this.image = loadImage("stone.png");
    World.add(world,this.body);
    }

    
    
    display(){
    
        var pos = this.body.position;
        push ();
        translate(pos.x,pos.y)
        ellipseMode(RADIUS);
        ellipse (pos.x,pos.y,pos.r)   
        fill ("white");
     //  rectMode(CENTER);
        imageMode (CENTER);
        image(this.image,0,0,this.r,this.r);
        pop ();
    }
    }