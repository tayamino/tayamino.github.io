Site.skillbar = {
    init: function() {
        App.vues.push('resume');

        App.data.resume = {
            where: [
{ owner: "Dev Freelancer",     cycle: "2008-2010", roles: ['IT Developer'], feels: "Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus." },
{ owner: "Vaya Studio",        cycle: "2010", roles: ['Web Developer'], feels: "Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus." },
{ owner: "Web Freelancer",     cycle: "2011", roles: ['Web Developer'], feels: "Mostly jobs in WordPress, Prestashop and related web technologies. " },
{ owner: "Connectik Services", cycle: "2012-2013", roles: ['Founder','CTO'], feels: "" },
{ owner: "Enochian Designs",   cycle: "2014-2015", roles: ['Co-Founder','CTO'], feels: "" },
{ owner: "IoT Freelancer",     cycle: "2016-2017", roles: ['Developer','Maker'], feels: "Democratization of IoT technologies and products was a golden opportunity to practice what I've been preaching my self to do." },
            ],
            skill: [
                { title: "Programming", group: [
{ title: 'PHP 7.0+', metrise: '100%' },
{ title: 'Wordpress', metrise: '95%' },
{ title: 'Django', metrise: '65%' },
{ title: 'Laravel', metrise: '35%' },
                ] },
                { title: "Frameworks", group: [
{ title: 'Django', metrise: '100%' },
{ title: 'Wordpress', metrise: '95%' },
{ title: '', metrise: '65%' },
{ title: 'Laravel', metrise: '35%' },
                ] },
                { title: "Web skills", group: [
{ title: 'HTML 5', metrise: '100%' },
{ title: 'CSS 3', metrise: '95%' },
{ title: 'Javascript', metrise: '65%' },
{ title: 'Vue.js', metrise: '35%' },
                ] },
                { title: "Platforms", group: [
{ title: 'Ubuntu', metrise: '100%' },
{ title: 'Debian', metrise: '95%' },
{ title: 'Heroku', metrise: '65%' },
{ title: 'Others', metrise: '35%' },
                ] },
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

