var img, son, extimg, path, cadre, counter, path;

document.addEventListener('contextmenu', event => event.preventDefault());

function setup()
{
	
	path = "/bdplayer";
	img = "/img/";
	son = "/sound/";
	extimg = ".jpg";
	extson = ".mp3";
	counter = 0;
	canvaswidth = 700;
	canvasheight = 400;
	
	var canvas = createCanvas(canvaswidth, canvasheight);
	canvas.parent('canvas');
	
	//background(200);
}


function newcase(adress) {
	
	print(adress.toString().length);
	adress = adress.toString();
	zero = 3 - adress.length;
	
	for(var i = 0; i < zero; i++)
	{
		adress = "0" + adress;
	}

	print(adress);
	
	loadImage(path + img + adress + extimg, aff, end);
	
	function aff (cadre)
	{
		cadre.resize(0, canvasheight);
		imageMode(CENTER);
		//	background(200);
		image(cadre, canvaswidth/2, canvasheight/2);
		
	}
	
	function end()
	{
		counter = 0;
	}
	

	loadSound(path + son + adress + extson, ready, error);
	
	function ready(son) {
		son.play();
	}
	
	function error() {}
}


function mousePressed()
{
	if (mouseButton == LEFT)
	{		
		print(counter);
		counter = counter + 1;
	}
	else if (mouseButton == RIGHT && counter > 0)
	{
		print(counter);
		counter = counter - 1;
	}
	
	newcase(counter);
}

function keyPressed()
{
	if (keyCode === RIGHT_ARROW) {
		print(counter);
		counter = counter + 1;
	}
	else if (keyCode === LEFT_ARROW && counter > 0) {
		print(counter);
		counter = counter - 1;
	}

	newcase(counter);
}