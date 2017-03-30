$(document).ready(resizeEnabled);

function resizeEnabled(){
    netheight = parseInt($('.workspace').css('height'));
    netwidth = parseInt($('.workspace').css('width'));
    $('#html').resizable({
        handles: 's',
        resize: function(event, ui){
            minimize();
            var cssheight = parseInt($('#css').css('height'));
            var htmlheight = parseInt($(this).css('height'));
            var remheight = String((netheight - htmlheight)/2 - 15); 
            $('#css').css('height', remheight);
            $('#javascript').css('height', remheight);
        }
    });
    $('#css').resizable({
        handles: 's',
        resize: function(event, ui){
            minimize();
            var cssheight = parseInt($(this).css('height'));
            var htmlheight = parseInt($("#html").css('height'));
            var remheight = String((netheight - cssheight - htmlheight) - 30);
            $('#javascript').css('height', remheight);
        }
    });
  $(".previewspace").resizable({
        handles:"w",
        resize: function(event, ui) {
            $(this).css('left','0px');
            var remWidth = String(netwidth- parseInt($(this).css('width')));
            $('.editor').css('width',remWidth);
        },
       stop: $(this).css('left','0px')
    }); 
}
function minimize(){
    $(this).css('width', '');
    $(this).addClass('minimized');
    $('#html').css('min-height', '8%');
    $('#css').css('min-height', '8%');
    $('#javascript').css('min-height', '8%');
    $('#html').css('max-height', '78%');
    $('#css').css('max-height', '78%');
    $('#javascript').css('max-height', '78%');
}