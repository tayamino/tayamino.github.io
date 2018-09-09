Site.skillbar = {
    init: function() {
        App.vues.push('resume');

        App.data.resume = {
            skill: [
                { title: "Programming", group: [
{ title: 'PHP 7.0+', metrise: '100%' },
{ title: 'Wordpress', metrise: '95%' },
{ title: 'Django', metrise: '65%' },
{ title: 'Laravel', metrise: '35%' },
                ] },
                { title: "Web skills", group: [
{ title: 'HTML 5', metrise: '100%' },
{ title: 'CSS 3', metrise: '95%' },
{ title: 'Javascript', metrise: '65%' },
{ title: 'Vue.js', metrise: '35%' },
                ] },
                { title: "Platforms", group: [
{ title: 'PHP 7.0+', metrise: '100%' },
{ title: 'Wordpress', metrise: '95%' },
{ title: 'Django', metrise: '65%' },
{ title: 'Laravel', metrise: '35%' },
                ] },
            ],
            where: [
{ owner: "Freelance",     cycle: "2009-2013", roles: ['IT Developer'], feels: "Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus." },
{ owner: "Some company",  cycle: "2013-2015", roles: ['Web Developer'], feels: "Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus." },
{ owner: "Other company", cycle: "2015-2018", roles: ['Front-End Developer'], feels: "Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus." },
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

