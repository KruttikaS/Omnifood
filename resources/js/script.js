/*jslint browser: true*/
/*global $, jQuery*/

/* for sticky navigation*/
$(document).ready(function(){
    $('.js--section-features').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
    },{
    offset: '70px;'
    });
    
/*For scrolling to elements*/    
    
    $('.js--scroll-to-plans').click(function (){
        $('html,body').animate({scrollTop:$('.js--section-plans').offset().top},1000);
    })
    $('.js--scroll-to-features').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-features').offset().top},1000);
    })
    
/*Navigation links*/
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
 /*Logo Nav*/   
    $('.logo-nav').click(function(){
        $('html,body').animate({scrollTop:$('header').offset().top},1000)
    })
    
    
  /*Animations */  
    
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animate_animated animate__fadeIn');
    },{
        offset:'50%'
    });
    
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animate_animated animate__fadeInUp');
    },{
        offset:'50%'
    });
    
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animate_animated animate__fadeIn');
    },{
        offset:'50%'
    });
    
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animate_animated animate__pulse');
    },{
        offset:'50%'
    });
    
    /*Mobile navigation*/
    
$('.js--nav-icon').click(function (){
    var nav=$('.js--main-nav');
    var icon=$('.js--nav-icon ion-icon');
    nav.slideToggle(200);
//    if(icon.has(name:'menu-outline')){
//        icon.add(name:'close-outline');
//        icon.remove(name:'menu-outline');
//    }else{
//        icon.remove(name:"close-outline");
//        icon.add(name:"menu-outline");
//    }
    
    if(icon.attr('name','menu-outline')){
        icon.attr('name','close-outline');
        icon.removeAttr('name','menu-outline');
    }
    
    if(icon.attr('name','close-outline')){
        icon.removeAttr('name','close-outline');
        icon.attr('name','menu-outline');
    }
    
    
    
    
});
    
    
});