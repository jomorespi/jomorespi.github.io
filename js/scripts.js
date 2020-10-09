$(document).ready(function(){
    $('.link').click(function(){
        var link = $(this).attr('data-link');

        $('section').removeClass('active');
        $('.link').removeClass('active');
        $(this).addClass('active');
        $('#' + link).addClass('active');

        if(link == 'index') {
            $('h1 > span').html('index.html');
        } else if(link == 'skills') {
            $('h1 > span').html('skills.css');
        } else if(link == 'experience') {
            $('h1 > span').html('experience.js');
        }
    });

    $('#app-header > div').mouseover(function(){
        $('#app-header > div').addClass('hover');
    });

    $('#app-header > div').mouseout(function(){
        $('#app-header > div').removeClass('hover');
    });

    $('#app-header > div:first-child').click(function(){
        $('#tabs-container').hide();
        $('#desktop-icon').addClass('show');
    });
    
    $('#app-header > div:nth-child(2)').click(function(){
        $('#tabs-container').addClass('minimized');
        $('#dock').addClass('show');
    });

    $('#app-header > div:nth-child(3)').click(function(){
        $('#tabs-container').toggleClass('maximized');
    });

    $('#dock img').click(function(){
        $('#tabs-container').removeClass('minimized');
        $('#dock').removeClass('show');
    });

    $('#desktop-icon').click(function(){
        $(this).addClass('focus');
    });

    $('#desktop-icon').dblclick(function(){
        $(this).removeClass('show');
        $(this).removeClass('focus');
        $('#tabs-container').show();
    });

    $(document).on("click",function(e) {
        var desktopicon = $("#desktop-icon");
            if (!desktopicon.is(e.target) && desktopicon.has(e.target).length === 0) { 
                $('#desktop-icon').removeClass('focus');
            }
   });
});