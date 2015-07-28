window.addEventListener("resize");

/*insert SlimMenu when window below 800px*/  
if ( $(window).width() > 800 ) {
        $("ul.nav").addClass("slimmenu");
        $("ul.nav").removeClass("navList");
        $("ul.nav").attr("id", "navigation");
} else {
        $("ul.nav").addClass("navList");
        $("ul.nav").removeClass("slimmenu");
        $("ul.nav").removeAttr("id");
    }


