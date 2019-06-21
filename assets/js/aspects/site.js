var Site = {
    profile: {
        init: function() {
            App.vues.push('profile');

            App.data.profile = {
                who: {
                    name: "TAYAA Med Amine",
                    date: 'August 1, 1987',
                    city: "Taza, Morocco",
                    mail: 'amine@tayaa.me',
                    call: "+212 (6) 44 76 46 08",
                    link: 'amine.tayaa.me',
                },
                bio: [
                    "Passionate Self-Learner looking to promote the adoption &amp; usage of Technology in the everyday life of everyone.",
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
    },
};

App.hook('init', Site.profile.init);
App.hook('load', Site.profile.load);
