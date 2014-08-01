Grumble Tour
==========

Really simple interactive tour plugin using [grumble.js](http://jamescryer.github.com/grumble.js/).

'''This is the first plugin/script I've ever written open source, I know for a fact it could be made better.'''

Example
--------

Include relevant js files:
<pre><script src="js/Bubble.js"></script></pre>
<pre><script src="js/jquery.grumble.min.js"></script></pre>
<pre><script src="js/grumble-tour.js"></script></pre>

Include image sprite:
<pre><img src="img/bubble-sprite.png"></pre>

Include css file:
<link href="css/grumble.min.css" media="all" rel="stylesheet"/>

Work the magic:
<pre>
	grumbleTour(grumbles = [
		{
			selector: '#someID', // Where we place the grumble on the page
			text: 'Some text for your grumble', // Text we want to display
			angle: 10, // Angle (where arrow shows), default is 45 degrees
			distance: 10, // Distance from the selector
			type: 'first-grumble ' // Class of grumble, doesn't handle adding classes very well so we have to add a space after the class name
		} 
	]);
</pre>

Contributing
--------

Feel free to modify/completely redo the code as you see fit.