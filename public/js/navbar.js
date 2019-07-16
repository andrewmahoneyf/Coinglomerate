// Generate navbar
document.getElementById("navMenu").innerHTML =
    '<div class="container-fluid">' +
        '<a href="#myCarousel"><img src="images/iconWhite.png" alt="Coinglomerate logo" id="logo"></a>' +
        '<a class="navbar-brand" href="#myCarousel">Coinglomerate</a>' +
        '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">' +            
            '<span class="navbar-toggler-icon"></span>' +
        '</button>' +
        '<div class="collapse navbar-collapse" id="navbarCollapse">' +
            '<ul class="navbar-nav mr-auto">' +
                '<li class="nav-item"><a class="nav-link" href="#company">ABOUT</a></li>' +
                '<li class="nav-item"><a class="nav-link" href="#team">TEAM</a></li>' +
                '<li class="nav-item"><a class="nav-link" href="#operations">OPERATIONS</a></li>' +
                '<li class="nav-item"><a class="nav-link" href="#pricing">PRICING</a></li>' +
                '<li class="nav-item"><a class="nav-link" href="#faq">FAQ\'S</a></li>' +
            '</ul>' +
            '<ul class="nav navbar-nav navbar-right">' +
                '<li class="nav-item"><a class="nav-link" href="#contact">CONTACT US</a></li>' +
            '</ul>' +
        '</div>' +
    '</div>';

// Collapse on phones
$('.navbar-collapse a, .navbar-brand').click('li', function () {
    var navbar_toggle = $('.navbar-toggler');
    if (navbar_toggle.is(':visible')) {
        navbar_toggle.trigger('click');
    }
});

// Transparent scrollbar
$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.navbar').removeClass('transparent');
        $('.navbar-brand').addClass('transparentbrand');
        document.getElementById("logo").src="images/icon.png";
    } else {
        $('.navbar').addClass('transparent');
        $('.navbar-brand').removeClass('transparentbrand');
        document.getElementById("logo").src="images/iconWhite.png";
        
    }
});

// Dropdown on hover
$('li.dropdown').hover(function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(10).fadeIn(500);
}, function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

// Smooth Scrolling
$('nav a[href*="#"], #contact a[href*="#"], #myCarousel a[href*="#"] ')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target.length = target.length - 100;

            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: ((target.offset().top) - 50)
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });