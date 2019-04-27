App.hook('load', function($) {
    /*Page Preloading*/
    $(window).load(function() {
        $('#spinner').fadeOut(200);
        $('#preloader').delay(200).fadeOut('slow');
        $('.wrapper').fadeIn(200);
        $('#custumize-style').fadeIn(200);
    });
}, "Loading");

App.hook('load', function($) {
    $('.collapse_tabs').click(function() {
        if ($(this).hasClass('collapsed')) {
            $(this).find('i.glyphicon').removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
        } else {
            $(this).find('i.glyphicon').removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
        }
    });
}, "Tabs profile");

App.hook('load', function($) {
    $('#verticalTab').easyResponsiveTabs({
        type: 'vertical',
        width: 'auto',
        fit: true
    });

    $("h2.resp-accordion").click(function() {
        $(this).find(".icon_menu").addClass("icon_menu_active");
        $("h2.resp-accordion").not(this).find(".icon_menu").removeClass("icon_menu_active");

        /*	Scroll To */
        $('html, body').animate({scrollTop: $('h2.resp-accordion').offset().top - 50}, 600);
    });

    $(".resp-tabs-list li").click(function() {
        $(this).find(".icon_menu").addClass("icon_menu_active");
        $(".resp-tabs-list li").not(this).find(".icon_menu").removeClass("icon_menu_active");
    });


    $(".resp-tabs-list li").hover(function() {
        $(this).find(".icon_menu").addClass("icon_menu_hover");
    }, function() {
        $(this).find(".icon_menu").removeClass("icon_menu_hover");
    });

    $("h2.resp-accordion").hover(function() {
        $(this).find(".icon_menu").addClass("icon_menu_hover");
    }, function() {
        $(this).find(".icon_menu").removeClass("icon_menu_hover");
    });
}, "easyResponsiveTabs");

App.hook('load', function($) {
    $(".content_2").mCustomScrollbar({
        theme: "dark-2",
        contentTouchScroll: true,
        advanced: {
            updateOnContentResize: true,
            updateOnBrowserResize: true,
            autoScrollOnFocus: false
        }
    });
}, "Scroll tabs");

App.hook('load', function($) {
    var animation_style = 'bounceIn';

    $('.dropdown-select').change(function() {
        animation_style = $('.dropdown-select').val();
    });

    $('ul.resp-tabs-list li[class^=tabs-]').click(function() {

        var tab_name = $(this).attr('data-tab-name');

        $('.resp-tabs-container').addClass('animated ' + animation_style);
        $('.resp-tabs-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $('.resp-tabs-container').removeClass('animated ' + animation_style);
        });

        $(".content_2").mCustomScrollbar("destroy");
        $(".content_2").mCustomScrollbar({
            theme: "dark-2",
            contentTouchScroll: true,
            advanced: {
                updateOnContentResize: true,
                updateOnBrowserResize: true,
                autoScrollOnFocus: false
            }
        });

        if (tab_name == "contact")
            initialize();

        return false;
    });

    $("#verticalTab h2.resp-accordion").click(function() {
        initialize();
    });
}, "Effect tabs");

App.hook('load', function($) {
    function redimensionnement() {

        if (window.matchMedia("(max-width: 800px)").matches) {
            $(".content_2").mCustomScrollbar("destroy");
            $(".resp-vtabs .resp-tabs-container").css("height", "100%");
            $(".content_2").css("height", "100%");
        } else {

            $(".resp-vtabs .resp-tabs-container").css("height", "580px");
            $(".content_2").css("height", "580px");
            $(".content_2").mCustomScrollbar("destroy");
            $(".content_2").mCustomScrollbar({
                theme: "dark-2",
                contentTouchScroll: true,
                advanced: {
                    updateOnContentResize: true,
                    updateOnBrowserResize: true,
                    autoScrollOnFocus: false
                }
            });

        }

    }

    // On lie l'événement resize à la fonction
    window.addEventListener('load', redimensionnement, false);
    window.addEventListener('resize', redimensionnement, false);

    $("#verticalTab h2.resp-accordion").click(function() {
        initialize();
    });
}, "redimensionnement");

/*
App.hook('load', function($) {
    $("a[rel^='portfolio']").prettyPhoto({
        animation_speed: 'fast', // fast/slow/normal
        social_tools: '',
        theme: 'pp_default',
        horizontal_padding: 5,
        deeplinking: false,
    });
}, "prettyPhoto");
//*/

/*
App.hook('load', function($) {
    var map;
    function initialize() {
        map = new GMaps({
            div: '#map',
            lat: -37.817917,
            lng: 144.965065,
            zoom: 16

        });
        map.addMarker({
            lat: -37.81792,
            lng: 144.96506,
            title: 'Marker with InfoWindow',
            icon: 'images/pins-map/map-marker.png',
            infoWindow: {
                content: '<p>Melbourne Victoria, 300, Australia</p>'
            }
        });
    }
}, "Google Maps");
//*/

App.hook('load', function($) {
    $('input:radio[name=page_builder]').on('change', function() {
		$('input:radio[name=page_builder]').each(function () {
			var $this = $(this);
	
			if ($(this).prop('checked')) {
				window.location.replace($this.val());
			}
		});
		
        return false;
    });
}, "Change for demo page");

