const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.jpg";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill(247, 120, 161);
    textSize(30);
    
    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
    }else if(hour==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : "+ hour%12 + " AM", 50,100);
    }

}

async function getBackgroundImg(){
    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseType = await response.json();
    var datetime = responseType.datetime
    var hour = datetime.slice(11,13);
    console.log(hour);
    console.log(responseType.datetime);
    
    if(hour>=0 && hour<18 ){
        bg = "sunrise.jpg";
    }
    else{
        bg="sunset.jpeg"
    }
    
    backgroundImg = loadImage(bg);
}