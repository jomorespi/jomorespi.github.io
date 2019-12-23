$(document).ready(function(){
    
    $('#index-link').click(function(){
        $(this).addClass('active');
        $('#skills-link').removeClass('active');
        $('#experience-link').removeClass('active');
        
        $('section#index').addClass('active');
        $('section#skills').removeClass('active');
        $('section#experience').removeClass('active');

        $('#app-header h1 span').html('index.html');
    });
    
    $('#skills-link').click(function(){
        $(this).addClass('active');
        $('#index-link').removeClass('active');
        $('#experience-link').removeClass('active');
        
        $('section#skills').addClass('active');
        $('section#index').removeClass('active');
        $('section#experience').removeClass('active');

        $('#app-header h1 span').html('skills.css');
    });
    
    $('#experience-link').click(function(){
        $(this).addClass('active');
        $('#index-link').removeClass('active');
        $('#skills-link').removeClass('active');
        
        $('section#experience').addClass('active');
        $('section#skills').removeClass('active');
        $('section#index').removeClass('active');

        $('#app-header h1 span').html('experience.js');
    });
    
});