(function($){
    $(function(){

        $('.button-collapse').sideNav();

    }); // end of document ready
})(jQuery); // end of jQuery name space

search = $('#search');

search.focus(function(){
    $('#user-profile-container').removeClass("idx");
    $('#logo-container').removeClass("idx");
    $('#shopping-cart').removeClass("idx");
});

search.focusout(function(){
    $('#user-profile-container').addClass("idx");
    $('#logo-container').addClass("idx");
    $('#shopping-cart').addClass("idx");
});

$('.user-dropdown').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false,
        hover: false,
        gutter: 0,
        belowOrigin: true
    }
);
