var App = {
    hook: function (event, callback) {
        if (typeof(App.objs.events[event])=='undefined') {
            App.objs.events[event] = [];
        }

        App.objs.events[event].push(callback);
    },
    slot: function (event, args) {
        var hnd;

        for (var i=0 ; i<App.objs.events[event].length ; i++) {
            hnd = App.objs.events[event][i];

            try {
                hnd.call(args);
            } catch (ex) {
                console.log("Failed initializing : ", hnd, ex);
            }
        }
    },
    objs: {
        events: {},
    },
    init: function () {
        var mouseX;
        var mouseY;
        var imageOne;

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
            mouseX = 0;
            mouseY = 0;

            /* Instanciate a HeadImage class for every image */
            imageOne = new HeadImage("one");

        }

        /* This function is called on mouse move and gets the mouse position. 
         * It also calls the HeadImage function to display the correct image*/
        function getMousePosition(event) {

            /* Setting the mouse position variables */
            mouseX = event.pageX;
            mouseY = event.pageY;

            /*Calling the setImageDirection function of the HeadImage class
             * to display the correct image*/
            imageOne.setImageDirection();

        }

        App.slot('init');
    },
    load: function ($) {
        App.slot('load', [$]);
    },
};

