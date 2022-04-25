Site.working = {
    post: {

    },
    taxo: {

    },
    init: function() {
      App.vues.push('working');

      App.data.working = {
          category: [
{ name: 'agency',  text: 'Digital Agency' },
{ name: 'espace', text: 'Web Sites' },
{ name: 'person', text: 'Personal Sites' }
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
//*/
                cycle: "2015", alias: 'hack2use',  title: "Hack 2 Use"
            },{
                cycle: "2016", alias: 'enochian',  title: "Enochian Designs"
            },{
                cycle: "2017", alias: 'inbijas',  title: "Initiative INBIJAS"
            }],
            espace: [{
                cycle: "2014", alias: 'decotaz',  title: "Ateliers DECOTAZ"
            },{
                cycle: "2015", alias: 'cafe-factory',  title: "Café Factory"
/*
            },{
                cycle: "2016", alias: 'elbechari',  title: "Espace El Bechari"
//*/
            }],
            person: [{
/*
                cycle: "2014", alias: 'tayaa-med-amine',  title: "TAYAA Med Amine"
            },{
                cycle: "2015", alias: 'tayaa-med-sghir',  title: "TAYAA Med Sghir"
            },{
//*/
                cycle: "2015", alias: 'lachhab-karim',    title: "LACHHAB Karim"
/*
            },{
                cycle: "2014", alias: 'gali-mahmoud',     title: "GALI Mahmoud"
//*/
            }],
        };

        for (var j=0 ; j<App.data.working.category.length ; j++) {
            var categ = App.data.working.category[j].name;

            for (var i=0 ; i<listing[categ].length ; i++) {
                if (listing[categ][i].rlink!=null) {
                    listing[categ][i].rlink = "http://"+listing[categ][i].alias+".tayaa.xyz";
                }

                App.data.working.projects.push({
                    label: categ,
                    title: listing[categ][i].title,
                    cover: '/images/working/'+listing[categ][i].alias+'.png',
                    links: {
                        web: listing[categ][i].rlink,
                    },
                    cycle: listing[categ][i].cycle,
                });
            }
        }
    },
    load: function($) {
        // MixItUp plugin
        // http://mixitup.io
        $('#workinglist').mixitup({
            targetSelector: '.working',
            filterSelector: '.filter',
            effects: ['fade'],
            easing: 'snap',
            // call the hover effect
            onMixEnd: Site.working.mixs()
        });
    },
    mixs: function() {
        // Simple parallax effect
        $('#workinglist .working').hover(
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

App.hook('init', Site.working.init);
App.hook('load', Site.working.load);
