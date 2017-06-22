(function($){

    $(document).ready(function(){
            //1.
            $(".grid, .grid-12").css("color", "red");
            //2
            $(".nav a[href^='http']").css("color", "green");
            //3
            $( "[type=checkbox], [type=radio]" ).not(":checked").addClass( "highlight" );
            //4
            $("div#text p:empty").first().addClass( "highlight" );
            //5
            $(".pagination-item:not(span)").css("color", "yellow");
}
    )
}
    
)(jQuery);