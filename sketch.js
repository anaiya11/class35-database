var ball;
var database, position;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    var locnode = database.ref("ball/position");
    locnode.on("value",readOpperation,showError);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
   database.ref("ball/position").set({
       x : position.x + x,
       y : position.y + y 
   })
}
function readOpperation(data){
    position = data.val();
    ball.x = position.x; 
    ball.y = position.y;
}

function showError(){
    console.log("error");
}
