function HomeIndex() {
    const heightFromTop = 500;
    this.initialiseScrollToTopButton = function () {
        $(window).scroll(function () {
            var verticalHeight = $(this).scrollTop();
            if (verticalHeight > heightFromTop) {
                $("#scrollToTop").fadeIn();
            } else {
                $("#scrollToTop").fadeOut();
            }
        });

        $("#scrollToTop").click(function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
    };

    this.startSlideshow = function () {
        let index = 0;
        const images = $('.slideshow img');
        setInterval(() => {
            images.eq(index).fadeOut(() => {
                index = (index + 1) % images.length;
                images.eq(index).fadeIn();
            });
        }, 3000);
    };

    $(document).ready(function () {
        app.homeIndex = new HomeIndex();
        app.homeIndex.initialiseScrollToTopButton();
        app.homeIndex.startSlideshow();
    });
}
