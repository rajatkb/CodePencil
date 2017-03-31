// JS for the navigation bar 


var navbar = function(){
    
     $("#btn").click(function(){    
        $('#overlay-back').fadeToggle(500);
        $("#box").toggleClass("scrollbox");
    });
    
};