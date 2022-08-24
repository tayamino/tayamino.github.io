Site.develop = {
    post: {

    },
    taxo: {

    },
    init: function() {
        App.vues.push('develop');

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
/*
                cycle: "2013", alias: 'openshift2use', title: "OpenShift 2 Use"
            },{
                cycle: "2015", alias: 'floydhub2use', title: "Floyd-Hub 2 Use"
//*/
            },{
                cycle: "2014", alias: 'heroku2use', title: "Heroku 2 Use"
            },{
                cycle: "2016", alias: 'vagrant2use', title: "Vagrant 2 Use"
            },{
                cycle: "2017", alias: 'docker2use', title: "Docker 2 Use"
/*
            },{
                cycle: "2018", alias: 'libvirt2use', title: "LibVirt 2 Use"
            },{
                cycle: "2019", alias: 'cloud2use', title: "LibCloud 2 Use"
            },{
                cycle: "2020", alias: 'kubernetes2use', title: "Kubernetes 2 Use"
//*/
            }],
            operating: [{
                cycle: "2011", alias: 'ubuntu2use', title: "Ubuntu 10 Use",
            },{
                cycle: "2012", alias: 'debian2use', title: "Debian 2 Use",
/*
            },{
                cycle: "2013", alias: 'zentyal2use', title: "Zentyal 2 Use",
            },{
                cycle: "2014", alias: 'macos2use', title: "MacOS 2 Use",
            },{
                cycle: "2015", alias: 'windows2use', title: "Windows 2 Use",
            },{
                cycle: "2016", alias: 'openwrt2use', title: "OpenWRT 10 Use",
//*/
            },{
                cycle: "2017", alias: 'raspbian2use', title: "RaspBian 2 Use",
            },{
                cycle: "2018", alias: 'android2use', title: "Android 2 Use",
            },{
                cycle: "2019", alias: 'chromeos2use', title: "Chrome OS 2 Use",
            }],
            languages: [{
                cycle: "2014", alias: 'python2use', title: "Python 2 Use",
            },{
                cycle: "2015", alias: 'nodejs2use', title: "Node.js 2 Use",
            },{
                cycle: "2016", alias: 'php2use', title: "PHP 2 Use",
            },{
                cycle: "2017", alias: 'shell2use', title: "Shell 2 Use",
            }],
            framework: [{
                cycle: "2014", alias: 'flask2use',  title: "Flask 2 Use",
            },{
                cycle: "2015", alias: 'django2use',  title: "Django 2 Use",
            },{
                cycle: "2014", alias: 'express2use',  title: "Express 2 Use",
/*
            },{
                cycle: "2016", alias: 'crossbar2use',  title: "CrossBar 2 Use",
            },{
                cycle: "2017", alias: 'airflow2use',  title: "AirFlow 2 Use",
            },{
                cycle: "2015", alias: 'parse2use',  title: "Parse 2 Use",
            },{
                cycle: "2016", alias: 'hubot2use',  title: "Hubot 2 Use",
            },{
                cycle: "2015", alias: 'laravel2use',  title: "Laravel 2 Use",
//*/
            },{
                cycle: "2016", alias: 'wordpress2use',  title: "WordPress 2 Use",
            }],
        };

        App.data.develop = {
            category: [
{ name: 'platforms', text: 'Platform' },
{ name: 'operating', text: 'Operating System' },
{ name: 'languages', text: 'Programming Language' },
{ name: 'framework', text: 'Framework' }
            ],
            projects: [
            ],
        };

        var mapping = {
            operating: 'library4nodejs', // 'system',
            languages: 'library4nodejs', // 'runtime',
            platforms: 'library4nodejs', // 'platform',
            framework: 'framework', // 'framework',
        };

        for (var j=0 ; j<App.data.develop.category.length ; j++) {
            var categ = App.data.develop.category[j].name;

            for (var i=0 ; i<listing[categ].length ; i++) {
                entry = {
                    alias: listing[categ][i].alias,
                    label: categ,
                    title: listing[categ][i].title,
                    cover: '/images/cover/'+listing[categ][i].alias+'.png',
                    links: [],
                    cycle: categ,
                };

                switch (listing[categ][i].alias) {
                    case "python":
                    case "flask":
                    case "django":
                    case "airflow":
                        entry.links.push({
                            file: "pip",
                            link: "https://pypi.org/project/"+entry.alias,
                        });
                        break;
                    case "nodejs2use":
                    case "express2use":
                    case "hubot2use":
                        entry.links.push({
                            file: "npm",
                            link: "https://npmjs.com/package/"+entry.alias,
                        });
                        break;
                    case "php2use":
                    case "laravel2use":
                    case "wordpress2use":
                        entry.links.push({
                            file: "web",
                            link: "https://packagist.org/packages/tayamino/"+entry.alias,
                        });
                        break;
                    case "network2use":
                    case "filesystem2use":
                    case "vocabular2use":
                    case "dataset2use":
                        entry.links.push({
                            file: "npm",
                            link: "https://npmjs.com/package/"+entry.alias,
                        });
                        //entry.links["python"] = "https://pypi.org/project/"+entry.alias;
                        //entry.links["php"] = "https://packagist.org/packages/tayamino/"+entry.alias;
                        break;
                    case "autobahn2use":
                    case "graphql2use":
                    case "linguist2use":
                    case "mosquitto2use":
                        entry.links.push({
                            file: "npm",
                            link: "https://npmjs.com/package/"+entry.alias,
                        });
                        //entry.links["python"] = "https://pypi.org/project/"+entry.alias;
                        //entry.links["php"] = "https://packagist.org/packages/tayamino/"+entry.alias;
                        break;
                }

                switch (categ) {
                    case "platforms":
                        entry.rlink = "http://bitbucket.org/"+categ+"/starter";
                        break;
                    case "operating":
                        entry.rlink = "http://bitbucket.org/"+categ+"/goodies";
                        break;
                    case "languages":
                        entry.rlink = "http://bitbucket.org/"+categ+"/runtime";
                        break;
                    case "framework":
                        entry.rlink = "http://bitbucket.org/"+categ+"/framework";
                        break;
                    default:
                        entry.rlink = "http://bitbucket.org/"+listing[categ][i].alias+"/"+mapping[categ]+".git";
                        break;
                }

                entry.rlink = "http://bitbucket.org/"+listing[categ][i].alias+"/"+mapping[categ]+".git";

                App.data.develop.projects.push(entry);
            }
        }
    },
    load: function($) {
        // MixItUp plugin
        // http://mixitup.io
        $('#developlist').mixitup({
            targetSelector: '.portfolio',
            filterSelector: '.filter',
            effects: ['fade'],
            easing: 'snap',
            // call the hover effect
            onMixEnd: Site.develop.mixs()
        });
    },
    mixs: function() {
        // Simple parallax effect
        $('#developlist .portfolio').hover(
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
