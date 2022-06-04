function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	video=createCapture(VIDEO);
	video.size(500,300);
	video.parent('game_console');

	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
	console.log('model is loaded');
}
