var renderScript= function( html , css , js , iframe){
     

    this.htmlInside ="";
    this.cssInside = "";
    this.jsInside ="";

    var avoidKeys = {

        16 : true,
        17 : true,
        20 : true,
        32 : true,
        37 : true,
        38 : true,
        39 : true,
        40 : true,
        144 : true
    };
    
    
    var doc = $(iframe)[0].contentWindow.document;
    
    
    this.exportToframe = function(){
        
        var renderedCss = "<style>"+ cssInside + "</style>";
        var renderedJs =   "<script>" + jsInside + "<\/script>"; // jugadd
        var renderedHtml = renderedCss + renderedJs + htmlInside;
        console.log(renderedHtml);
        doc.open();
        doc.write(renderedHtml);
        doc.close(); 
    }
    
    $(html).keyup(function(event){
        if( !avoidKeys[event.which])
            {
                htmlInside=$(this).val();
                exportToframe();
            }
    });
    
    $(css).keyup(function(event){
        if( !avoidKeys[event.which])
            {
                cssInside=$(this).val();
                exportToframe();
            }        
    });
    
    $(js).keyup(function(event){
        if( !avoidKeys[event.which])
            {
                jsInside=$(this).val();
                exportToframe();
            } 
    });  
};

$(document).ready(function(){
    renderScript('#htmlcontent', '#csscontent' , '#jscontent', '#rendered'); 
});