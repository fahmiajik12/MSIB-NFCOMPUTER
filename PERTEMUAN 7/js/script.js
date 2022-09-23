
$( document ).ready(function() {

    $("#kucing").click(function(){
        $(this).find("img").removeClass("d-none");
        $("<audio></audio>").attr({
            'src': "audio/kcg.mp3",
            'volume': 1,
            'autoplay': "autoplay"
        }).appendTo("body");
    });
    
    $("#paus").click(function(){
        $(this).find("img").removeClass("d-none");
        $("<audio></audio>").attr({
            'src': "audio/paus.mp3",
            'volume': 1,
            'autoplay': "autoplay"
        }).appendTo("body");
    });
    
    $("#Sapi").click(function(){
        $(this).find("img").removeClass("d-none");
        $("<audio></audio>").attr({
            'src': "audio/sapi.mp3",
            'volume': 1,
            'autoplay': "autoplay"
        }).appendTo("body");
    });
    
    $("#Serigala").click(function(){
        $(this).find("img").removeClass("d-none");
        $("<audio></audio>").attr({
            'src': "audio/serigala.mp3",
            'volume': 1,
            'autoplay': "autoplay"
        }).appendTo("body");
    });

});   