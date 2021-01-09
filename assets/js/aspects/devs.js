Site.develop = {
    post: {

    },
    taxo: {

    },
    init: function() {
        App.vues.push('develop');

        App.data.develop = {
            category: [
{ name: 'platforms', text: 'Platform' },
{ name: 'operating', text: 'Operating System' },
{ name: 'languages', text: 'Programming Language' },
{ name: 'framework', text: 'Framework' },
            ],
            projects: [
            ],
        };

        var mapping = {
            operating: 'system',
            languages: 'runtime',
            platforms: 'platform',
            framework: 'framework',
        };

        var listing = {
            /*
            modelings: [{
                cycle: "2014", alias: 'system2use', title: "System 2 Use"
            },{
                cycle: "2015", alias: 'runtime2use', title: "Runtime 2 Use"
            },{
                cycle: "2016", alias: 'backend2use', title: "Backend 2 Use"
            },{
                cycle: "2017", alias: 'cloud2use', title: "Cloud 2 Use"
            }],
            //*/
            platforms: [{
                cycle: "2013", alias: 'openshift2use', title: "OpenShift 2 Use"
            },{
                cycle: "2014", alias: 'heroku2use', title: "Heroku 2 Use"
            },{
                cycle: "2015", alias: 'floydhub2use', title: "Floyd-Hub 2 Use"
            },{
                cycle: "2016", alias: 'vagrant2use', title: "Vagrant 2 Use"
            },{
                cycle: "2017", alias: 'docker2use', title: "Docker 2 Use"
            /*
            },{
                cycle: "2018", alias: 'libvirt2use', title: "LibVirt 2 Use"
            },{
                cycle: "2019", alias: 'cloud2use', title: "LibCloud 2 Use"
            //*/
            },{
                cycle: "2020", alias: 'kubernetes2use', title: "Kubernetes 2 Use"
            }],
            operating: [{
                cycle: "2011", alias: 'ubuntu2use', title: "Ubuntu 10 Use"
            },{
                cycle: "2012", alias: 'debian2use', title: "Debian 2 Use"
            },{
                cycle: "2013", alias: 'zentyal2use', title: "Zentyal 2 Use"
            },{
                cycle: "2014", alias: 'macos2use', title: "MacOS 2 Use"
            },{
                cycle: "2015", alias: 'windows2use', title: "Windows 2 Use"
            },{
                cycle: "2016", alias: 'openwrt2use', title: "OpenWRT 10 Use"
            },{
                cycle: "2017", alias: 'raspbian2use', title: "RaspBian 2 Use"
            },{
                cycle: "2018", alias: 'android2use', title: "Android 2 Use"
            },{
                cycle: "2019", alias: 'chromeos2use', title: "Chrome OS 2 Use"
            }],
            languages: [{
                cycle: "2014", alias: 'python2use', title: "Python 2 Use"
            },{
                cycle: "2015", alias: 'nodejs2use', title: "Node.js 2 Use"
            },{
                cycle: "2016", alias: 'php2use', title: "PHP 2 Use"
            },{
                cycle: "2017", alias: 'shell2use', title: "Shell 2 Use"
            }],
            framework: [{
                cycle: "2014", alias: 'flask2use',  title: "Flask 2 Use"
            },{
                cycle: "2015", alias: 'django2use',  title: "Django 2 Use"
            },{
                cycle: "2016", alias: 'crossbar2use',  title: "CrossBar 2 Use"
            },{
                cycle: "2017", alias: 'airflow2use',  title: "AirFlow 2 Use"
            },{
                cycle: "2014", alias: 'express2use',  title: "Express 2 Use"
            },{
                cycle: "2015", alias: 'parse2use',  title: "Parse 2 Use"
            },{
                cycle: "2016", alias: 'hubot2use',  title: "Hubot 2 Use"
            },{
                cycle: "2014", alias: 'flight2use',  title: "Flight 2 Use"
            },{
                cycle: "2015", alias: 'laravel2use',  title: "Laravel 2 Use"
            },{
                cycle: "2016", alias: 'wordpress2use',  title: "WordPress 2 Use"
            }],
        };

        for (var j=0 ; j<App.data.develop.category.length ; j++) {
            var categ = App.data.develop.category[j].name;

            for (var i=0 ; i<listing[categ].length ; i++) {
                listing[categ][i].rlink = mapping[categ];

                if (!(listing[categ][i].image)) {
                    listing[categ][i].image = '/images/cover/'+listing[categ][i].alias+'.png';
                }

                App.data.develop.projects.push({
                    label: categ,
                    title: listing[categ][i].title,
                    cover: listing[categ][i].image,
                    links: {
        web: "http://bitbucket.org/"+listing[categ][i].alias+"/"+listing[categ][i].rlink+".git",
                    },
                    cycle: listing[categ][i].cycle,
                });
            }
        }
    },
    load: function($) {
        // MixItUp plugin
        // http://mixitup.io
        $('#sourcelist').mixitup({
            targetSelector: '.source',
            filterSelector: '.filter',
            effects: ['fade'],
            easing: 'snap',
            // call the hover effect
            onMixEnd: Site.develop.mixs()
        });
    },
    mixs: function() {
        // Simple parallax effect
        $('#sourcelist .source').hover(
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

App.hook('init', Site.develop.init);
App.hook('load', Site.develop.load);
