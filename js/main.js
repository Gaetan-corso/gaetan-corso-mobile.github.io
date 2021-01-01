$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#drop").click(function(){
        $("#drop-items").slideToggle(1000,"swing");
    });
});



$(document).ready(function() {
    var body_bg_color = $('body').css("background-color");
    //console.log(body_bg_color);
    $('.no_border').css("border", body_bg_color);
});

$(document).ready(function () {
    var height_a = $('#body-1-a').height();
    var height_b = $('#body-1-b').height();
    var height_c = $('#body-1-c').height();

    if (height_a <= height_b ){
        if ( height_b <= height_c){
            var height_max = height_c ;
        } else {
            var height_max = height_b;
        }
    } else {
        if (height_a <= height_c){
            var height_max = height_c ;
        } else {
            var height_max = height_a ;
        }
    }
    console.log(height_max);

    $('.min-height').css('min-height', height_max);

})
