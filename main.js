function preload(){}
function setup(){
canvas=createCanvas(450,400)
canvas.center()
video=createCapture(VIDEO)
video.size(450,400)
video.hide()

}
function draw(){
image(video,0,0,450,400)
}
