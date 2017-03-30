// JS for the navigation bar 
$(document).ready(function(){
    $("#btn").click(function(){
    
        $('#box, #overlay-back').fadeIn(500);
        $("#box").toggleClass("scrollbox");
        
        
    });
});
