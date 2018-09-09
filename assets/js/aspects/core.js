var App = {
    vues: ['profile'],
    data: {
        profile: {
            who: {
                name: "TAYAA Med Amine",
                date: 'August 1, 1987',
                city: "Taza, Morocco",
                mail: 'amine@tayaa.me',
                call: "+212 (6) 44 76 46 08",
                link: 'amine.tayaa.me',
            },
            bio: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec nulla sagittis, scelerisque mi vitae, congue turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec nulla sagittis, scelerisque mi vitae, congue turpis.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec nulla sagittis, scelerisque mi vitae, congue turpis. ",
            ],
        },
    },
    hook: function (event, callback) {
        if (typeof(App.objs.events[event])=='undefined') {
            App.objs.events[event] = [];
        }

        App.objs.events[event].push(callback);
    },
    slot: function (event, args=[]) {
        var hnd;

        for (var i=0 ; i<App.objs.events[event].length ; i++) {
            hnd = App.objs.events[event][i];

            hnd(args[0]);
            /*
            try {
                hnd(args[0]);
            } catch (ex) {
                console.log("Failed initializing : ", hnd, ex);
            }
            //*/
        }
    },
    objs: {
        events: {},
        mouseX: null,
        mouseY: null,
        imageH: null,
    },
    init: function () {
        /* Calling the initialization function */
        $(init);

        /* The images need to re-initialize on load and on resize, or else the areas
         * where each image is displayed will be wrong. */
        $(window).load(init);
        $(window).resize(init);

        /* Setting the mousemove event caller */
        $(window).mousemove(getMousePosition);

        /* This function is called on document ready, on load and on resize
         * and initiallizes all the images */
        function init() {

            /* Instanciate the mouse position variables */
            App.objs.mouseX = 0;
            App.objs.mouseY = 0;

            /* Instanciate a HeadImage class for every image */
            App.objs.imageH = new HeadImage("one");

        }

        /* This function is called on mouse move and gets the mouse position. 
         * It also  calls the HeadImage function to display the correct image*/
        function getMousePosition(event) {

            /* Setting the mouse position variables */
            App.objs.mouseX = event.pageX;
            App.objs.mouseY = event.pageY;

            /*Calling the setImageDirection function of the HeadImage class
             * to display the correct image*/
            App.objs.imageH.setImageDirection();
        }

        App.slot('init');
    },
    load: function ($) {
        var narrow = App.vues;

        App.vues = {};

        for (var i=0 ; i<narrow.length ; i++) {
            App.vues[narrow[i]] = new Vue({
                el: '#'+narrow[i],
                data: App.data[narrow[i]],
            });
        }

        App.slot('load', [$]);
    },
};

