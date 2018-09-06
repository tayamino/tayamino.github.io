Site.portfolio = {
    init: function() {

        // MixItUp plugin
        // http://mixitup.io
        $('#portfoliolist').mixitup({
            targetSelector: '.portfolio',
            filterSelector: '.filter',
            effects: ['fade'],
            easing: 'snap',
            // call the hover effect
            onMixEnd: filterList.hoverEffect()
        });

    },
    hoverEffect: function() {

        // Simple parallax effect
        $('#portfoliolist .portfolio').hover(
                function() {
                    $(this).find('.label').stop().animate({bottom: 0}, 200);
                    $(this).find('img').stop().animate({top: -30}, 500);
                },
                function() {
                    $(this).find('.label').stop().animate({bottom: -40}, 200);
                    $(this).find('img').stop().animate({top: 0}, 300);
                }
        );

    }
};

App.load.push(Site.portfolio.init);

