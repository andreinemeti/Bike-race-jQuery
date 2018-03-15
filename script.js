
$('#race').click(function() {
    $('.RaceInfo span').text("");
    $('.cyclist').css('left', '0');
    $('#addsteroids, #removesteroids').hide();
    $('#counter').css({
        'animation-name': 'ready',
        'z-index': '8'
    });

    function CheckIfComplete() {
        $('#addsteroids, #removesteroids').show();
        $('#counter').css({
            'animation-name': '',
            'z-index': '7'
        });
        if (isComplete == false) {
            isComplete = true;
            place = 'first';
        } else {
            place = 'second';
        }
    }

    var CarWidth = $('#cyclist1').width();
    var RaceTrackWidth = $(window).width() - CarWidth;
    var RaceTime1 = Math.floor((Math.random() * 5000) + 2500);
    var RaceTime2 = Math.floor((Math.random() * 5000) + 2500);
    var isComplete = false;
    var place = '';

    if ($("#addsteroids").data('clicked')) {
        var RaceTime1 = Math.floor((Math.random() * 1000) + 500);
        var RaceTime2 = Math.floor((Math.random() * 1000) + 500);
    } else if ($("#removesteroids").data('clicked')) {
        var RaceTime1 = Math.floor((Math.random() * 5000) + 2500);
        var RaceTime2 = Math.floor((Math.random() * 5000) + 2500);
    }

    $('#cyclist1').delay(3800).queue(function(next) {
        $(this).attr('src', 'img/bike1go.gif');
        next();
    }).animate({

        left: RaceTrackWidth
    }, RaceTime1, function() {
        CheckIfComplete();
        $('#RaceInfo1 span').text('Finished in ' + place + ' place with a time of ' + RaceTime1 / 1000 + ' seconds');
        $('#cyclist1').attr('src', 'img/bike1wait.png')

    });

    $('#cyclist2').delay(3800).queue(function(next) {
        $(this).attr('src', 'img/bike2go.gif');
        next();
    }).animate({
        left: RaceTrackWidth
    }, RaceTime2, function() {
        CheckIfComplete();
        $('#RaceInfo2 span').text('Finished in ' + place + ' place with a time of ' + RaceTime2 / 1000 + ' seconds');
        $('#cyclist2').attr('src', 'img/bike2wait.png')
    });
});

$('#Reset').click(function() {
    $('#addsteroids, #removesteroids').show();
    $('#counter').css({
        'animation-name': '',
        'z-index': '7'
    });
    $('.cyclist').css('left', '0');
    $('.RaceInfo span').text("");
});

$('#addsteroids').click(function() {
    $(this).data('clicked', true);
    $("#msg-removed-steroids").hide();
    $("#msg-added-steroids").fadeIn(1000).delay(3000).fadeOut();

});

$('#removesteroids').click(function() {
    $(this).data('clicked', true);
    $("#addsteroids").data('clicked', false);
    $("#msg-added-steroids").hide();
    $("#msg-removed-steroids").fadeIn(1000).delay(3000).fadeOut();
});