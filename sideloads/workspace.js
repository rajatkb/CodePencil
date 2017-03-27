$(document).ready(resizeEnabled);

function resizeEnabled(){
    allheight = parseInt($('.workspace').css('height'));
    $('#html').resizable({
        handles: 's',
        stop: function(event, ui){
            minimize();
            htmlheight = parseInt($(this).css('height'));
            remheight = String((allheight - htmlheight)/2 - 20); //the parameter -20 may vary according to the screen resolution and hence needs to be      worked upon a bit
            $('#css').css('height', remheight);
            $('#javascript').css('height', remheight);
        }
    });
    $('#css').resizable({
        handles: 's',
        stop: function(event, ui){
            minimize();
            cssheight = parseInt($(this).css('height'));
            remheight = String((allheight - cssheight)/2 - 20);
            $('#html').css('height', remheight);
            $('#javascript').css('height', remheight);
        }
    });
    $('#javascript').resizable({
        handles: 's',
        stop: function(event, ui){
            minimize();
            jsheight = parseInt($(this).css('height'));
            remheight = String((allheight - jsheight)/2 - 20);
            $('#html').css('height', remheight);
            $('#css').css('height', remheight);
        }
    });
}
function minimize(){
    $(this).css('width', '');
    $(this).addClass('minimized');
    $('#html').css('min-height', '8%');
    $('#css').css('min-height', '8%');
    $('#javascript').css('min-height', '8%');
}