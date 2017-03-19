$(function(){
    var Preview = true; // can preview

    // create canvas and context objects
    var canvas = document.getElementById('picker');
    var can = canvas.getContext('2d');

    // drawing active image
    var image = new Image();
    image.src="colorwheel2.png";
    image.onload = function () {
        can.drawImage(image, 0, 0); // draw the image on the canvas
    }

    $('#picker').mousemove(function(event) { // on moving the mouse
        if (Preview) {
            // get coordinates of current position
            var canvasOffset = $(canvas).offset();
            var X = Math.floor(event.pageX - canvasOffset.left);
            var Y = Math.floor(event.pageY - canvasOffset.top);

            // get current mouse data
            var imageData = can.getImageData(X, Y, 1, 1);
            var pixel = imageData.data;

            // update preview color in the preview
            var pixelColor = "rgb("+pixel[0]+", "+pixel[1]+", "+pixel[2]+")";
            $('.preview').css('backgroundColor', pixelColor);

            // update controls 
            $('#rVal').val(pixel[0]);
            $('#gVal').val(pixel[1]);
            $('#bVal').val(pixel[2]);
            $('#rgbVal').val(pixel[0]+','+pixel[1]+','+pixel[2]);

            var dColor = pixel[2] + 256 * pixel[1] + 65536 * pixel[0];
            $('#hexVal').val('#' + ('0000' + dColor.toString(16)).substr(-6));
        }
    });
    
    $('.preview').click(function(e) { // preview click
        $('.colorpicker').fadeToggle("slow", "linear");
        Preview = true;
    });
});
