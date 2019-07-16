// media query event handler
const mq = window.matchMedia("(min-width: 1000px)");

// Write out bio on screen or open new page
if (mq.matches) {
    $('.andrew').click(function () {
        $('.text1').show('slow');
        $('.text2').hide('slow');
        $('.text3').hide('slow');
        $('.text4').hide('slow');
        $('.text5').hide('slow');
    });
    $('.isaiah').click(function () {
        $('.text2').show('slow');
        $('.text1').hide('slow');
        $('.text3').hide('slow');
        $('.text4').hide('slow');
        $('.text5').hide('slow');
    });
    $('.cody').click(function () {
        $('.text4').show('slow');
        $('.text1').hide('slow');
        $('.text2').hide('slow');
        $('.text3').hide('slow');
        $('.text5').hide('slow');
    });
}
else {
    $('.andrew').click(function () {
        window.open('andrew.html', '_self', false)
    });
    $('.isaiah').click(function () {
        window.open('isaiah.html', '_self', false)
    });
    $('.cody').click(function () {
        window.open('cody.html', '_self', false)
    });
}