// Generate navbar
document.getElementById("footerSection").innerHTML =
    '<div id="contact">' +
        '<div class="container">' +
            '<p class="float-right dnone"><a href="#top">Back to top</a></p>' +
            '<div class="section-title col-md-6 col-md-offset-3">' +
                '<strong>CONTACT US</strong>' +
                '<hr />' +
            '</div>' +
            '<div class="col-md-6 col-md-offset-3">' +
                '<p><strong>To learn more about our company, ask questions, or invest, send us an email at the address below and we would be happy to chat with you. In the meantime, follow us on social media for more up-to-date news.' +
                '<br /><span class="fa fa-envelope" href="mailto:info@coinglomerate.co" target="blank"></span><a href="mailto:info@coinglomerate.co" target="blank">info@coinglomerate.co</a>' +
                '</strong></p>' +
            '</div>' +
            '<p style="clear:both;">' +
                '<a href="https://www.facebook.com/coinglomeratellc/" target="blank" class="fa fa-facebook"></a>' +
                '<a href="https://www.linkedin.com/company/coinglomerate/" target="blank" class="fa fa-linkedin"></a>' +
            '</p>' +
            '</div>' +
        '</div>' +
        '<div class="container">' +
            '<div class="row equalize">' +
                '<p class="no-margin-bottom" id="wrapper">' +
                    '<b>Copyright © 2017 -&nbsp;<a href="privacy-policy.php" target="_blank" style="color:grey;">' +
                    'Privacy Policy</a>&nbsp;-&nbsp;<a href="terms&amp;conditions.php" target="_blank" style="color:grey;">' +
                    'Terms and Conditions</a>&nbsp;- All Rights reserved by : <a href="#myCarousel">Coinglomerate</a></b>' +
                '</p>' +
            '</div>' +
        '</div>';

// SmoothScroll top
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});