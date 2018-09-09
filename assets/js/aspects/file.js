Site.skillbar = {
    init: function() {
        App.vues.push('resume');

        App.data.resume = {
            skills: [
                { title: "Web skills", group: [
{ title: 'PHP 7.0+', metrise: '100%' },
{ title: 'Wordpress', metrise: '95%' },
{ title: 'Django', metrise: '65%' },
{ title: 'Laravel', metrise: '35%' },
                ] },
                { title: "Programming skills", group: [
{ title: 'PHP 7.0+', metrise: '100%' },
{ title: 'Wordpress', metrise: '95%' },
{ title: 'Django', metrise: '65%' },
{ title: 'Laravel', metrise: '35%' },
                ] },
            ],
            projects: [
{ label: 'logo',      title: 'Project #1', cover: 'images/portfolio/1.jpg', cycle: "2008", links: { web: "" } },
{ label: 'catWeb',    title: 'Project #2', cover: 'images/portfolio/2.jpg', cycle: "2010", links: { web: "" } },
{ label: 'catMotion', title: 'Project #3', cover: 'images/portfolio/3.jpg', cycle: "2012", links: { web: "" } },
            ],
        };
    },
    load: function($) {
        $('.tabs-resume').click(function() {
            $('.skillbar').each(function() {
                $(this).find('.skillbar-bar').width(0);
            });

            $('.skillbar').each(function() {
                $(this).find('.skillbar-bar').animate({
                    width: $(this).attr('data-percent')
                }, 2000);
            });
        });

        $('#resume').prev('h2.resp-accordion').click(function() {
            $('.skillbar').each(function() {
                $(this).find('.skillbar-bar').width(0);
            });

            $('.skillbar').each(function() {
                $(this).find('.skillbar-bar').animate({
                    width: $(this).attr('data-percent')
                }, 2000);
            });
        });
    },
};

App.hook('init', Site.skillbar.init);
App.hook('load', Site.skillbar.load);

