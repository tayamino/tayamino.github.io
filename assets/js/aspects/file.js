Site.skillbar = {
    init: function() {
        App.vues.push('resume');

        App.data.resume = {
            where: [
{ owner: "Dev Freelancer",     cycle: "2008-2010", roles: ['IT Developer'], feels: "", detail: [
  "Various experiences working as a consultant with startups (Skills : Linux, Shell, Python, NoSQL, ETL, ...)",
  "Valuable experience working on End-to-End Web projects",
  "Freelancing (small jobs). Including: PHP, MySQL, Windows and Linux servers.",
] },
{ owner: "Vaya Studio",        cycle: "2010", roles: ['Web Developer'], feels: "", detail: [
  "Integrating WP-theme using HTML5 / CSS3 / jQuery",
  "Developping WordPress plugins to extend core functionnalities (URL-Rewrites, custom Post Types, Semantic SEO, Custom templates per taxonomy ...)",
  "Optimizing the website using Nginx, Memcache.",
  "Developping custom crawlers for the news team of the website (5 journalists dispatching the data through XMPP/Web-UI).",
  "Maintaining the local network using a (Zentyal server / NAS / Printing).",
  "Deployment & Supervision of cloud-based instances (web server / cloud desktops / backoffice instances)",
] },
{ owner: "Web Freelancer",     cycle: "2011", roles: ['Web Developer'], feels: "Mostly jobs in WordPress, Prestashop and related web technologies. ", detail: [

] },
{ owner: "Connectik Services", cycle: "2011-2012", roles: ['Founder','CTO'], feels: "", detail: [
  "ASP.NET / C# / VB.NET",
  "Python (mainly Django and related)",
  "PHP 5 / jQuery / WordPress",
  "Working on business solutions (mainly OpenERP, OpenKM) : deployment / plugin developpement",
] },
{ owner: "SawtBladi Platform", cycle: "2013", roles: ['Developer','SysAdmin'], feels: "", detail: [
  "Integrating WP-theme using HTML5 / CSS3 / jQuery",
  "Developping WordPress plugins to extend core functionnalities (URL-Rewrites, custom Post Types, Semantic SEO, Custom templates per taxonomy ...)",
  "Optimizing the website using Nginx, Memcache.",
  "Maintaining the local network using a (Zentyal server / NAS / Printing).",
  "Developping custom crawlers for the news team of the website (5 journalists dispatching the data through XMPP/Web-UI).",
  "Deployment & Supervision of cloud-based instances (web server / cloud desktops / backoffice instances)",
] },
{ owner: "Enochian Designs",   cycle: "2014-2015", roles: ['Co-Founder','CTO'], feels: "", detail: [
  "Web-based Business Applications (Django + Analytics + Reporting)",
  "Custom Dashboards (TWBT + Flask/Django/Slim-PHP)",
  "Adopting the "12-factor app" principles, resulting in a full xAAS deployments (OpenShift / Heroku / EC2+Ansible)",
  "Embracing an efficient approach through providing all clients with a Responsive Design and Semantic SEO (enhancing the So-Lo-Mo aspects of the Web).",
  "BASH / PHP 7 / Python 2.7 / Node.JS",
  "HTML5 / CSS3 / D3",
] },
{ owner: "Varaa Solutions",    cycle: "2016-2017", roles: ['Developer','Maker'], feels: "", detail: [

] },
{ owner: "IoT Freelancer",     cycle: "2017-2018", roles: ['Developer','Maker'], feels: "Democratization of IoT technologies and products was a golden opportunity to practice what I've been preaching my self to do.", detail: [

] },
            ],
            cours: [
{ owner: "Lycee Ibn Barri", cycle: "2004-2005", degree: "Baccalaureat", track: "Sciences Ex" },
{ owner: "E.M.S.I Rabat",   cycle: "2005-2007", degree: "Ingenieur",    track: "Automatisme &amp; Informatique Industrielle" },
{ owner: "PIGIER Taza",     cycle: "2007-2009", degree: "Technicien",   track: "Gestion Informatique" },
            ],
            skill: [
                { title: "Programming", group: [
{ title: 'Python 2.7', metrise: '100%' },
{ title: 'PHP 7.x', metrise: '75%' },
{ title: 'Python 3+', metrise: '50%' },
{ title: 'Node.JS', metrise: '35%' },
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
                { title: "Operating Systems", group: [
{ title: 'Ubuntu',  metrise: '100%' },
{ title: 'Debian',  metrise: '95%' },
{ title: 'Heroku',  metrise: '65%' },
{ title: 'Windows', metrise: '35%' },
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
