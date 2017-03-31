var resizeEnabled = function(){
    netheight = parseInt($('.workspace').css('height'));
    netwidth = parseInt($('.workspace').css('width'));
    $('#html').resizable({
        handles: 's',
        resize: function(event, ui){
            $(this).css('width','');
            /* the line fixes the Jqueery Ui tendency of fixing the width at inline style at each change hence reducing the over all size*/
            
            var cssheight = parseInt($('#css').css('height'));
            var htmlheight = parseInt($(this).css('height'));
            var remheight = String((netheight - htmlheight)/2 - 15); 
            $('#css').css('height', remheight);
            $('#javascript').css('height', remheight);
        },
        stop: function(){$(this).css('width','')}
    });
    $('#css').resizable({
        handles: 's',
        resize: function(event, ui){
            $(this).css('width','');
            /* the line fixes the Jqueery Ui tendency of fixing the width at inline style at each change hence reducing the over all size*/
            var cssheight = parseInt($(this).css('height'));
            var htmlheight = parseInt($("#html").css('height'));
            var remheight = String((netheight - cssheight - htmlheight) - 30);
            $('#javascript').css('height', remheight);
        },
        stop: function(){$(this).css('width','')}
    });
  $(".previewspace").resizable({
        handles:"w",
        resize: function(event, ui) {
            $('#css').css('width','');
            $('#html').css('width','');
            $('#javascript').css('width','');
            /* the line fixes the Jqueery Ui tendency of fixing the width at inline style at each change hence reducing the over all size*/
            $(this).css('left','0px');
            var remWidth = String(netwidth- parseInt($(this).css('width')));
            $('.editor').css('width',remWidth);
        },
       stop: $(this).css('left','0px')
    }); 
};


