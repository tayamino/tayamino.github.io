Site.portfolio = {
    post: {

    },
    taxo: {

    },
    init: function() {
        App.vues.push('portfolio');

        App.data.portfolio = {
            category: [
{ name: 'agency',  text: 'Digital Agency' },
{ name: 'espace', text: 'Web Sites' },
{ name: 'person', text: 'Personal Sites' },
            ],
            projects: [
//{ label: 'person',    title: "Karim LACH'HAB", cover: '/images/logos/lachhab.png', cycle: "2010", links: { web: "" } },
            ],
        };

        var listing = {
            agency: [{
/*
                cycle: "2012", alias: 'connectik',  title: "Connectik Services"
            },{
                cycle: "2014", alias: 'maher-ops', title: "Maher Ops"
            },{
                cycle: "2015", alias: 'hack2use',  title: "Hack 2 Use"
            },{
                cycle: "2016", alias: 'enochian',  title: "Enochian Designs"
            },{
                cycle: "2017", alias: 'inbijas',  title: "Initiative INBIJAS"
//*/
                cycle: "2015", alias: 'hack2use',  title: "Hack 2 Use"
            },{
                cycle: "2016", alias: 'enochian',  title: "Enochian Designs"
            }],
            espace: [{
                cycle: "2014", alias: 'decotaz',  title: "Ateliers DECOTAZ"
            },{
                cycle: "2015", alias: 'cafe-factory',  title: "Café Factory"
/*
            },{
                cycle: "2016", alias: 'park-adventure',  title: "Park Adventure"
//*/
            }],
            person: [{
/*
                cycle: "2014", alias: 'tayaa-med-amine',  title: "TAYAA Med Amine"
            },{
                cycle: "2014", alias: 'gali-mahmoud',     title: "GALI Mahmoud"
            },{
                cycle: "2015", alias: 'lachhab-karim',    title: "LACHHAB Karim"
            },{
                cycle: "2015", alias: 'tayaa-med-sghir',  title: "TAYAA Med Sghir"
//*/
            }],
        };

        for (var j=0 ; j<App.data.portfolio.category.length ; j++) {
            var categ = App.data.portfolio.category[j].name;

            for (var i=0 ; i<listing[categ].length ; i++) {
                App.data.portfolio.projects.push({
                    label: 'agency',
                    title: listing[categ][i].title,
                    cover: '/images/logos/'+listing[categ][i].alias+'.png',
                    links: {
        web: "http://"+listing[categ][i].alias+".portfolio.tayaa.me"
                    },
                    cycle: listing[categ][i].cycle,
                });
            }
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
