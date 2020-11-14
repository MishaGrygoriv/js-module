$(document).ready(function() {

    $('ul.tabs li').click(function() {
        const tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

});


const progressBarOptions = {
    startAngle: -1.55,
    size: 70,
    value: 0.78,
    fill: {
        gradient: [
            '#00d4be',
            '#1ae77f'
        ]
    }
}

$('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2));
});

$('.tabs').on('click', function() {
    $('#circle-a').circleProgress({
        value: 0.78,
        fill: {
            gradient: [
                '#00d4be',
                '#1ae77f'
            ]
        }
    });

    $('#circle-b').circleProgress({
        value: 0.55,
        fill: {
            gradient: [
                '#00d4be',
                '#1ae77f'
            ]
        }
    });

    $('#circle-c').circleProgress({
        value: 0.97,
        fill: {
            gradient: [
                '#00d4be',
                '#1ae77f'
            ]
        }
    });
});