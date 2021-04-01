class Rubber{
	constructor(x,y,r)
	{
		var options={
			restitution:0.3,
			isStatic:false,
			friction:5,
			density:1.0
		}
	// assign options to the rubber ball
		
		this.body=Bodies.circle(x, y, (r-20)/2, options)
		this.x=x;
		this.y=y;
		this.r=r
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			//translate(rubberpos.x, rubberpos.y);
			
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
       //ellipseMode(RADIUS)
	   ellipse(100,100,this.r,this.r)
	  // circle(rubberpos.x, rubberpos.y,this.r)
			pop()
	}

}