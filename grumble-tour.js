// Grunble Tour
// 
// To use, call grumbleTour and pass in an array of hashes separated by a comma:
//
// grumbleTour(grumbles = [
//  {
//    selector: '#someID', // Where we place the grumble on the page
//    text: 'Some text for your grumble', // Text we want to display
//    angle: 10, // Angle (where arrow shows), default is 45 degrees
//    distance: 10, // Distance from the selector
//    type: 'first-grumble ' // Class of grumble, doesn't handle adding classes very well so we have to add a space after the class name
//  } 
// ]);
//
// Grumble tour relies on grumble.js (http://jamescryer.github.io/grumble.js/)

$(document).ready(function() {
  
  // Remove extra space after class name
  function typeToSelector1(typeString) {
    return '.' + $.trim(typeString);
  }
  
  // Next div (this contains the text for the grumble)
  function typeToSelector2(typeString) {
    return typeToSelector1(typeString) + ' + div';
  }

  function clickHandler(i) {
    $(document).on("click", typeToSelector2(grumbles[i].type), function() {
      // Hide the current grumble
      $(typeToSelector1(grumbles[i].type)).hide();
      $(typeToSelector2(grumbles[i].type)).hide();
      // Show next grumble, until we reach the last
      if (i < grumbles.length - 1) {
        $(typeToSelector1(grumbles[i+1].type)).fadeIn();
        $(typeToSelector2(grumbles[i+1].type)).fadeIn();
      }
      // Mark tour as completed on click of last grumble
      if (i == grumbles.length - 1) {
        // Your logic here if you want to redirect page on last grumble...
      }
    });
  }
  
  window.grumbleTour = function(grumbles) {
    for (i = 0; i < grumbles.length; i++) {
      // Init grumbles
      $(grumbles[i].selector).grumble({
        text: grumbles[i].text,
        angle: grumbles[i].angle,
        distance: grumbles[i].distance,
        type: grumbles[i].type
       });
      // Hide the freshly created grumbles, except the first one
      if (i != 0) {
        $(typeToSelector1(grumbles[i].type)).hide();
        $(typeToSelector2(grumbles[i].type)).hide();
      }
      // Click handler for the grumbles
      clickHandler(i);
    }
  }
 
});
