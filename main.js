function preload(){
    canvas = createCanvas(600, 550);
    canvas.center;
    video = createCapture(VIDEO)

}

poseNet = poseNet.[0].results;

function modelLoaded(){
    console.log("Model is loaded!")
}