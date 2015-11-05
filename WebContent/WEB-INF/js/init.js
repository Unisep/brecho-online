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


$('.user-dropdown').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
);
