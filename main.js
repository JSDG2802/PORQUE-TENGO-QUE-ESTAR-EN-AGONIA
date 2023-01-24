var mice_on_venus = 0
function setup()
{
   canvas = createCanvas(400,400);
   video = createCapture(VIDEO);
    //video.size(400,400);
    //video.hide();
    canvas.position(208,170);
}
function draw()
{
  image(video,0,0,400,400);
}
function preload()
{
  mice_on_venus = loadSound("canción Minecraft.mp3")
}
function yalp()
{
  mice_on_venus.play();
}
