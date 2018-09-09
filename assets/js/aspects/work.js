Site.portfolio = {
    init: function() {
        App.data.vues.push('portfolio');

        App.data.portfolio = {
            category: [
{ name: 'catMotion', text: 'Motion creation' },
{ name: 'catWeb',    text: 'Web sites' },
{ name: 'logo',      text: 'Logo design' },
            ],
            projects: [
{ label: 'logo',      title: 'Project #1', cover: 'images/portfolio/1.jpg', cycle: "2008", links: { web: "" } },
{ label: 'catWeb',    title: 'Project #2', cover: 'images/portfolio/2.jpg', cycle: "2010", links: { web: "" } },
{ label: 'catMotion', title: 'Project #3', cover: 'images/portfolio/3.jpg', cycle: "2012", links: { web: "" } },
{ label: 'logo',      title: 'Project #4', cover: 'images/portfolio/4.jpg', cycle: "2014", links: { web: "" } },
{ label: 'catWeb',    title: 'Project #5', cover: 'images/portfolio/5.jpg', cycle: "2016", links: { web: "" } },
{ label: 'catMotion', title: 'Project #6', cover: 'images/portfolio/6.jpg', cycle: "2018", links: { web: "" } },
            ],
        };
    },
    load: function($) {
        // MixItUp plugin
        // http://mixitup.io
        $('#portfoliolist').mixitup({
            targetSelector: '.portfolio',
            filterSelector: '.filter',
            effects: ['fade'],
            easing: 'snap',
            // call the hover effect
            onMixEnd: Site.portfolio.mixs()
        });
    },
    mixs: function() {
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

App.hook('init', Site.portfolio.init);
App.hook('load', Site.portfolio.load);

