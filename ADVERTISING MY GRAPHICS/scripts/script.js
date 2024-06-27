$(document).ready(function() {
    function showNextSlide($container) {
        var $current = $container.find('img:visible');
        var $next = $current.next('img').length ? $current.next('img') : $container.find('img:first');
        $current.fadeOut(1000, function() {
            $next.fadeIn(1000);
        });
    }

    setInterval(function() {
        $('.slideshow').each(function() {
            showNextSlide($(this));
        });
    }, 3000);
});
