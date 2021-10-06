jQuery('document').ready(function($){
    var menuBtb = $('.menu-icon'),
    menu = $('.navegacion ul');

    menuBtb.click(function(){

        if(menu.hasClass('show')){

            menu.removeClass('show');

        } else{
            menu.addClass('show');
        }   


    });

    

});