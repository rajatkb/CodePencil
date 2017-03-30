//This is the javascript file to bes used for main page functionality 

$(document).ready(function(){
    $("#btn").click(function(){
    
        $('#box, #overlay-back').css("display")=="none"? $("#overlay-back").fadeIn(500):$("#overlay-back").fadeOut(500);
        $("#box").toggleClass("scrollbox");
    
        
    });
});
