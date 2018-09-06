Site.iconmenu = {
    objs: null,
    init: function() {
        
    },
    load: function($) {
        $(".resp-tabs-container h2.resp-accordion").each(function(){
	        if($(this).hasClass('resp-tab-active')){
		        $(this).append("<i class='glyphicon glyphicon-chevron-up arrow-tabs'></i>");
	        }else {
		        $(this).append("<i class='glyphicon glyphicon-chevron-down arrow-tabs'></i>");
	        }
        });

        $(".resp-tabs-container h2.resp-accordion").click(function(){
	        if($(this).hasClass('resp-tab-active')){
		        $(this).find("i.arrow-tabs").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
	        }
	        
	        $(".resp-tabs-container h2.resp-accordion").each(function(){
		        if(!$(this).hasClass('resp-tab-active')){
			        $(this).find("i.arrow-tabs").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
		        }
          });
        });
    },
};

App.hook('init', Site.iconmenu.init);
App.hook('load', Site.iconmenu.load);

