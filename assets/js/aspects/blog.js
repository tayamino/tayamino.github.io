Site.blog = {
    objs: null,
    init: function() {
        
    },
    load: function($) {
        // More blog
        $('a.read_m').click(function() {
            var pagina = $(this).attr('href');
            var postdetail = pagina + '-page';

            if (pagina.indexOf("#post-") != -1) {

                $('#blog-page').hide();

                $(postdetail).show();
                $(".tabs-blog").trigger('click');
            }

            return false;

        });

        // More blog
        $('a.read_more').click(function() {
            var pagina = $(this).attr('href');
            var postdetail = pagina + '-page';

            if (pagina.indexOf("#post-") != -1) {

                $('#blog-page').hide();

                $(postdetail).show();
                $(".tabs-blog").trigger('click');
            }

            return false;

        });

        //pagination All
        $('.content-post a').click(function() {
            var pagina = $(this).attr('href');

            if (pagina == "#blog") {

                $('.content-post').hide();
                $('#blog-page').show();
                $(".tabs-blog").trigger('click');

            }

            return false;

        });

        //pagination blog
        $('.content-post #pagination').click(function() {


            var pagina = $(this).attr('href');
            var postdetail = pagina + '-page';

            if (pagina.indexOf("#post-") != -1) {

                $('#blog-page').hide();
                $('.content-post').hide();

                $(postdetail).show();
                $(".tabs-blog").trigger('click');
            }

            return false;

        });
    },
};

App.hook('init', Site.blog.init);
App.hook('load', Site.blog.load);

