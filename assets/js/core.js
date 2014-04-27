$(document).ready(function() {
 
  $("#owl-slider").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 2000,
      paginationSpeed : 800,
      singleItem: true,
      autoPlay: true,
      pagination: false,
      paginationNumbers: false,
      autoHeight: false
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
  
  $(window).scroll(function() {
		$('#main-nav').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow) {
				$(this).addClass("fadeIn");
			}
		});
	});
  
  $("#main-nav").sticky({topSpacing:0});
  
});