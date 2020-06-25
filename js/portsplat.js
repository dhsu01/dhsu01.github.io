let playMode = 'sustain';
let sample;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  soundFormats('mp3', 'ogg');
  sample = loadSound('img/SPLAT_sound.mp3');
  noCursor();
}

function draw() {
  drawSprites();
}
 
function mousePressed() {

	sample.play();

	var newSprite = createSprite(mouseX, mouseY);

	newSprite.addAnimation(
		'normal',
		'img/SPLAT_1.png',
		'img/SPLAT_2.png',
		'img/SPLAT_3.png',);

	newSprite.animation.stop();
	var f = round(random(0, newSprite.animation.getLastFrame()));
		const count = newSprite.animation.getLastFrame();
		console.error('@@ count:', count);
		console.error('@@ f:', f);
	newSprite.animation.changeFrame(f);

	$(".cursor").hide();

}

 function togglePlayMode() {
  	if (playMode ==='sustain') {
  		playMode = 'restart';
  	} else {
  		playMode = 'sustain';
  	}
  	sample.playMode(playMode);
  }

$("body").mousemove(function (e) {
    $(".cursor").show().css({
      "left": e.clientX,
      "top": e.clientY
    });
  }).mouseout(function () {
    $(".cursor").hide();
  });
