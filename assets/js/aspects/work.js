Site.portfolio = {
    init: function() {
        App.vues.push('portfolio');

        var listing;

        App.data.portfolio = {
            category: [
{ name: 'agency',  text: 'Digital Agency' },
{ name: 'espace', text: 'Web Sites' },
{ name: 'person', text: 'Personal Sites' },
            ],
            projects: [
//{ label: 'person',    title: "Karim LACH'HAB", cover: '/images/logos/lachhab.jpg', cycle: "2010", links: { web: "" } },
            ],
        };

        listing = [{
/*
            cycle: "2012", alias: 'connectik',  title: "Connectik Services"
        },{
//*/
            cycle: "2014", alias: 'maher-ops', title: "Maher Ops"
        },{
            cycle: "2015", alias: 'hack2use',  title: "Hack 2 Use"
        },{
            cycle: "2016", alias: 'enochian',  title: "Enochian Designs"
        },{
            cycle: "2017", alias: 'inbijas',  title: "Initiative INBIJAS"
        }];

        for (var i=0 ; i<listing.length ; i++) {
            App.data.portfolio.projects.append({
                label: 'agency',
                title: listing[i].title,
                cover: '/images/logos/'+listing[i].alias+'.jpg',
                links: {
    web: "http://"+listing[i].alias+".portfolio.tayaa.me"
                },
                cycle: listing[i].cycle,
            });
        }

        listing = [{
            cycle: "2014", alias: 'decotaz',  title: "Ateliers DECOTAZ"
        },{
            cycle: "2015", alias: 'cafe-factory',  title: "Café Factory"
        },{
            cycle: "2016", alias: 'park-adventure',  title: "Park Adventure"
        }];

        for (var i=0 ; i<listing.length ; i++) {
            App.data.portfolio.projects.append({
                label: 'espace',
                title: listing[i].title,
                cover: '/images/logos/'+listing[i].alias+'.jpg',
                links: {
    web: "http://"+listing[i].alias+".portfolio.tayaa.me"
                },
                cycle: listing[i].cycle,
            });
        }
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

