Site.services = {
    post: {

    },
    taxo: {

    },
    init: function() {
      App.vues.push('services');

      App.data.services = {
        arts: [
          { icon: 'fa fa-signal',   name: "IoT Maker" },
          { icon: 'fa fa-heart',    name: "DevOps Advocate" },
          { icon: 'fa fa-compass',  name: "Tech Enthusiast" },
          { icon: 'fa fa-suitcase', name: "Business Consultant" },
          { icon: 'fa fa-linux',    name: "FOSS Guru" },
          { icon: 'fa fa-cog',      name: "ITC Contractor" },
        ],
      };
    },
    load: function($) {
        
    },
};

App.hook('init', Site.services.init);
App.hook('load', Site.services.load);

