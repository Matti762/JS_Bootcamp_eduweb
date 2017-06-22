(function($){

var url = "http://code.eduweb.pl/bootcamp/users/";

$("#get").on("click", function(){
    
    $.getJSON(url, { get_param: "name, username, email, phone" }, function(data) {

    $.each(data, function(index, element) {
        
        $("body").append($("<ul>")
        .append($("<li>", { text: element.name }  ))
        .append($("<li>", { text: element.username } ))
        .append($("<li>", { text: element.email } ))
        .append($("<li>", { text: element.phone } ))
        .append($("<br/>"))
        );
});

}).done(function() {
    console.log( "second success" );
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "complete" );
  });

})

}
)(jQuery);

