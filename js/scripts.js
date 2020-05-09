$(document).ready(function(){
    $('.link').click(function(){
        var link = $(this).attr('data-link');

        $('section').removeClass('active');
        $('.link').removeClass('active');
        $(this).addClass('active');
        $('#' + link).addClass('active');
    });
});