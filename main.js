function preload(){
}

function setup(){
canvas = createCanvas(300,310);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 320);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
 console.log('poseNet is installed');   
}

function gotPoses(Results) 
{
    if(Results.length > [0])    
    {
            console.log(Results);
            console.log("nose x =" + Results[0].pose.nose.x);
            console.log("nose y =" + Results[0].pose.nose.y);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
}

function take_snapshot(){
save('Mustache.png');
}
