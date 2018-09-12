
/**
 * determineHeightAndThenDrawPyramid
 *
 * Determines the current value that the user has typed in the 'How high?' text-box,
 * and then draws a pyramid with that height.
 */

function determineHeightAndThenDrawPyramid() {
    // Determine the height of the pyramid typed in...
    var new_height = document.querySelector("#height").value
    heightStr = new_height;

    // Determine symbol to use...
    var symbol = document.querySelector("#symbol").value

    // here we convert the string to an int
    height = parseInt(heightStr);

    // draw the pyramid with the given height
    drawPyramid(height, symbol);
}

/*
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
 function drawPyramid(height, symbol) {
     // before drawing, clear the old content
    var removePyramid = document.getElementById("pyramid");
    removePyramid.innerHTML = '';

    document.getElementById("points").innerHTML = height;

     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
        var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             var spaceCharacter = ".";
             rowStr += spaceCharacter;
         }

         for (var i = 0; i < numBricks; i++) {
             rowStr += symbol;
         }

        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
