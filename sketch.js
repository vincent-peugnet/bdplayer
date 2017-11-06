var img, son, extimg, path, cadre, counter, path;

document.addEventListener('contextmenu', event => event.preventDefault());

function setup()
{
	path = "/bdplayer";
	img = "/img/";
	son = "/son/";
	extimg = ".jpg";
	extson = ".mp3";
	counter = 0;

	
	createCanvas(windowWidth, windowHeight);
	background(200);
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
	
	print(counter.toString().length);
	adress = counter.toString();
	zero = 3 - adress.length;

	for(var i = 0; i < zero; i++)
	{
		adress = "0" + adress;
	}

	print(adress);
	
	loadImage(path + img + adress + extimg, aff, end);
	
	function aff (cadre)
	{
		cadre.resize(0, 500);
		imageMode(CENTER);
		background(200);
		image(cadre, windowWidth/2, windowHeight/2);
		
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