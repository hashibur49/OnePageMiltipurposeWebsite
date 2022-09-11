$(document).ready(function(){

  // Main SLider
    $(".slider-area").owlCarousel({
      'items': 1,
      'loop': true,
      'autoplay':true,
    }   
    );

    // Client SLider
    $(".client").owlCarousel({
      'items': 3,
      'loop': true,
      'autoplay':true, 
      'margin': 30,
      'center': true
    }   
    );

    // Counter Active
    $('.counter').counterUp();
  });