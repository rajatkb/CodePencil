//This is the javascript file to bes used for main page functionality 

$(document).ready(function(){
    $("#btn").click(function(){
    
        $('#box, #overlay-back').fadeIn(500);
        $("#box").toggleClass("scrollbox");
    
        
    });
});
