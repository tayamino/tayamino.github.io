var App = {
    vues: {},
    data: {
        person: {
        },
        skills: {
        },
        worked: {
            category: [
{ name: 'catMotion', title: 'Motion creation' },
{ name: 'catWeb',    title: 'Web sites' },
{ name: 'logo',      title: 'Logo design' },
            ],
            projects: [
{ label: 'logo',      title: 'Project #1', cover: 'images/portfolio/1.jpg', cycle: "2008" },
{ label: 'catWeb',    title: 'Project #2', cover: 'images/portfolio/2.jpg', cycle: "2010" },
{ label: 'catMotion', title: 'Project #3', cover: 'images/portfolio/3.jpg', cycle: "2012" },
{ label: 'logo',      title: 'Project #4', cover: 'images/portfolio/4.jpg', cycle: "2014" },
{ label: 'catWeb',    title: 'Project #5', cover: 'images/portfolio/5.jpg', cycle: "2016" },
{ label: 'catMotion', title: 'Project #6', cover: 'images/portfolio/6.jpg', cycle: "2018" },
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
        App.slot('load', [$]);
    },
};

