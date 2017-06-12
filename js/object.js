function Ball()
{
    this.x = random(0, width);
    this.y = random(0, height / 4);
    this.size = 20;
    this.speed = 0;
    this.gravity = 0.2;
    this.stop = true;
    
    this.show = function()
    {
	ellipse(this.x, this.y, this.size, this.size);
    };

    this.update = function()
    {
	this.speed += this.gravity;
	this.y += this.speed;
	if (this.y + this.size > height && this.stop)
	{
	    this.speed = -this.speed + this.gravity * 10;
	}
	if (this.y > height)
	{
	    this.y = height - this.size / 2;
	    this.stop = false;
	}
    };
};
