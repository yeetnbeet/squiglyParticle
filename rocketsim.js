var canvas = document.querySelector("#myCanvas");
var ctx = canvas.getContext("2d");

var rocket = {
    x:50,
    y:50,
    mass:1000,
    thrust:20,
    acc:function(){
        return this.thrust/this.mass;
    },
    vx:0,
    vy:0,
    xGoRight:function(){
        this.vx+=this.acc();
    },
    xGoleft:function(){
        this.vx-=this.acc();
    },
    yGoDown:function(){
        this.vy+=this.acc();
    },
    yGoUp:function(){
        this.vy-=this.acc();
    },
    update:function(){
        this.x+=this.vx;
        this.y+=this.vy;
    },
    wallbounce:function(){
        this.vx = -this.vx;
        this.vy = -this.vx;
    }

};


function drawRocket(){
    ctx.beginPath();
    ctx.arc(rocket.x,rocket.y,5,0,Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
};

function draw(){
    drawRocket();
    rocket.update();
}


function collision(){};
function keyDown(e){
    if(e.key == "Right" || e.key == "ArrowRight") {
        rocket.xGoRight();
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        rocket.xGoleft();
        console.log("l")
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        rocket.yGoUp();
        console.log("Up");
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        rocket.yGoDown();
        console.log("down");
    }
};


document.addEventListener("keydown",keyDown);

setInterval(draw,100);

