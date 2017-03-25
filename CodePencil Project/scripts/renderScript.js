    var renderScript= function( html , css , js , iframe){
     

    this.htmlInside ="";        // This is the html that is inside the pre text box
    this.cssInside = "";        // This is the html that is inside the pre text box
    this.jsInside ="";          // This is the html that is inside the pre text box
    // PENDING OF HAVING TAB BEING RECUEVED PROPERLY
    
    
    // avoiding keys for reducing refresh overheads
    var avoidKeys = {           // the keys that needs to be avoided

        9 : true, 13 : true, 16 : true, 17 : true, 19 : true, 20 : true,
        27 : true, 33 : true, 34 : true, 35 : true, 36 : true, 37 : true,
        38 : true, 39 : true, 40 : true, 45 : true, 144 : true, 145 : true
    };
    
    
    var doc = $(iframe)[0].contentWindow.document; // global doc of iframe 
    
    this.exportToframe = function(){ // function that updates the iframe with htmlInside , cssInside , jsInside
        var renderedCss = "<style> "+ cssInside + " </style>";
        var renderedJs =   "<script>" + jsInside + "<\/script>"; // jugadd
        var renderedHtml = renderedCss + renderedJs + "<body>" + htmlInside + "<\/body>";
        doc.open();
        doc.write(renderedHtml);
        doc.close(); 
    }

    // to set the entire workspace with data from the cache    
    $(html)[0].innerHTML = sessionStorage.getItem('html');
    this.htmlInside = $(html).text();
    $(css)[0].innerHTML = sessionStorage.getItem('css');
    this.cssInside = $(css).text();
    $(js)[0].innerHTML = sessionStorage.getItem('js');
    this.jsInside = $(js).text();
    exportToframe();
    // data set on object creation    
        
        
    //// Liteners for keystrokes    
    $(html).keyup(function(event){
        if( !avoidKeys[event.which])
            {   
                htmlInside=$(this).text();
                exportToframe();
            }
    });
    $(css).keyup(function(event){
        if( !avoidKeys[event.which] )
            {
                cssInside=$(this).text();    
                exportToframe();
            }        
    });
    $(js).keyup(function(event){
        if( !avoidKeys[event.which])
            {
                jsInside=$(this).text();
                exportToframe();
            } 
    });  
    // keystroke listeners ended 
        
    //persistance of content for each session
    $(window).on('beforeunload', function(){
        sessionStorage.setItem('html', $(html)[0].innerHTML);
        sessionStorage.setItem('css', $(css)[0].innerHTML);
        sessionStorage.setItem('js', $(js)[0].innerHTML);
    });    
};

$(document).ready(function(){
    renderScript('#htmlcontent', '#csscontent' , '#jscontent', '#rendered'); 
});