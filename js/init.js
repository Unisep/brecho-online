(function($){
    $(function(){

        $('.button-collapse').sideNav();

    }); // end of document ready
})(jQuery); // end of jQuery name space

search = $('#search');

search.focus(function(){
    $('#user-profile-container').removeClass("idx");
    $('#logo-container').removeClass("idx");
});

search.focusout(function(){
    $('#user-profile-container').addClass("idx");
    $('#logo-container').addClass("idx");
});

