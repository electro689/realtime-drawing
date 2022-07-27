noseX=0;
noseY=0;
difference=0;
rightWristX = 0; 
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(500,450);
    canvas.position(650, 100);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}
function modelLoaded() {
    console.log("poseNet is inasalised!");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = "+noseX+", noseY = "+noseY );
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);

    }
}

function draw() {
    background('violet');
    document.getElementById("squar_sides").innerHTML="Size of the square = "+difference+"px"
    fill("yellow");
    stroke("green");
    square(noseX, noseY, difference);
}




