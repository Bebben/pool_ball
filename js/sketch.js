var balls = [];

function setup()
{
    //    createCanvas(window.innerWidth, window.innerHeight);
    createCanvas(1080, 720);
    for (var z = 0; z <= 50; z++)
    {
	balls.push(new Ball());
    }
}

function draw()
{
    background(100, 120, 160);
    for (var i = 0; i < balls.length; i++)
    {
	balls[i].show();
	balls[i].update();
    }
}
