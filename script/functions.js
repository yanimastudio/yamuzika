jQuery(document).ready(function($) {

	'use strict';
    //***************************
    // Sticky Header Function
    //***************************
	  jQuery(window).scroll(function() {
	      if (jQuery(this).scrollTop() > 170){  
	          jQuery('body').addClass("music-sticky");
	      }
	      else{
	          jQuery('body').removeClass("music-sticky");
	      }
	  });

    //***************************
    // ThumbSlider Functions
    //***************************
    jQuery('.music-images-thumb').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.music-images-list'
        });
        jQuery('.music-images-list').slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          asNavFor: '.music-images-thumb',
          dots: false,
          vertical: true,
          prevArrow: "<span class='slick-arrow-left'><i class='fa fa-angle-left'></i></span>",
          nextArrow: "<span class='slick-arrow-right'><i class='fa fa-angle-right'></i></span>",
          centerMode: false,
          focusOnSelect: true,
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: true,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    vertical: true,
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: true,
                  }
                }
              ],
        });
    //***************************
    // BannerOne Functions
    //***************************
      jQuery('.music-bannerone').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots: false,
          arrows: false,
          fade: true,
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    //***************************
    // Twitter Slider Functions
    //***************************
      jQuery('.music-twitter-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots: true,
          arrows: false,
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    //***************************
    // Partner Slider Functions
    //***************************
      jQuery('.music-partner-slider').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots: false,
          prevArrow: "<span class='slick-arrow-left'><i class='fa fa-angle-left'></i></span>",
          nextArrow: "<span class='slick-arrow-right'><i class='fa fa-angle-right'></i></span>",
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });

    //***************************
    // Click to Top Button
    //***************************
    jQuery('.music-backtop-btn').on("click", function() {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    //***************************
    // Countdown Function
    //***************************
    var austDay = new Date();
    austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
    jQuery('#eventcountdown').countdown({until: austDay});
    jQuery('#year').text(austDay.getFullYear());

    //***************************
    // CartToggle Function
    //***************************
    jQuery('a.music-cartbtn').on("click", function(){
          jQuery('.music-cart-box').slideToggle('slow');
          return false;
      });
      jQuery('html').on("click", function() { jQuery(".music-cart-box").fadeOut(); });
    jQuery('.music-navicons,.music-cartsection').on("click", function(event){ event.stopPropagation(); });

    //*******************************
    // BannerPlayer Toggle Function
    //******************************
    jQuery('a.music-playlist-btn').on("click", function(){
        jQuery('.music-banner-player .jp-playlist').slideToggle('slow');
        return false;
    });
    jQuery('a.music-playlist-btn').on("click", function(){
        jQuery('.music-banner-player').toggleClass('music-selected-color');
        return false;
    });
    

    //***************************
    // Fancybox Function
    //***************************
    jQuery(".fancybox").fancybox({
      openEffect  : 'elastic',
      closeEffect : 'elastic',
    });

    // Tooltip Functions
    jQuery('[data-toggle="tooltip"]').tooltip();
    
    // Masonry Functions
    jQuery('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        fitWidth: true
      }
    });

    //***************************
    // Event Calendar Function
    //***************************
    var d = new Date();
    var y = d.getFullYear();
    var m = d.getMonth();
    jQuery('#calendar').fullCalendar({
      draggable: false,
      showTime: false,
      events: [
      
        {
          id: 1,
          title: "MetLife Stadium ...",
          start: "2016-10-04 00:00:00",
          end: "2016-10-08 00:00:00",
          tooltip: "<small>08:00pm - 12:00am</small> <span>Few Tickets</span> <h6>Forosol-Maxico City</h6>"
          
        },
        {
          id: 2,
          title: "Forosol-Maxico City",
          start: "2016-10-16 13:00:00",
          end: "2016-10-18 16:00:00",
          tooltip: "<small>08:00pm - 12:00am</small> <span>Few Tickets</span> <h6>Forosol-Maxico City</h6>"
        },
        {
          id: 3,
          title: "Rose Bowl ...",
          start: "2016-10-26 13:00:00",
          end: "2016-10-26 16:00:00",
          tooltip: "<small>08:00pm - 12:00am</small> <span>Few Tickets</span> <h6>Forosol-Maxico City</h6>"
        },
        {
          id: 4,
          title: "Manchester Etihad Stadium - UK",
          start: "2016-11-01 13:00:00",
          end: "2016-11-02 16:00:00",
          tooltip: "<small>08:00pm - 12:00am</small> <span>Few Tickets</span> <h6>Forosol-Maxico City</h6>"
        },
        {
          id: 3,
          title: "Rose Bowl ...",
          start: "2016-12-26 13:00:00",
          end: "2016-12-26 16:00:00",
          tooltip: "<small>08:00pm - 12:00am</small> <span>Few Tickets</span> <h6>Forosol-Maxico City</h6>"
        },
        {
          id: 3,
          title: "Manchester Etihad Stadium - UK",
          start: "2016-11-13 13:00:00",
          end: "2016-11-17 16:00:00",
          tooltip: "<small>08:00pm - 12:00am</small> <span>Few Tickets</span> <h6>Forosol-Maxico City</h6>"
        },
        {
          id: 3,
          title: "Forosol-Maxico City",
          start: "2016-11-6 13:00:00",
          end: "2016-11-8 16:00:00",
          tooltip: "<small>08:00pm - 12:00am</small> <span>Few Tickets</span> <h6>Forosol-Maxico City</h6>"
        },
        {
          id: 3,
          title: "Forosol-Maxico City",
          start: "2016-11-28 13:00:00",
          end: "2016-11-30 16:00:00",
          tooltip: "<small>08:00pm - 12:00am</small> <span>Few Tickets</span> <h6>Forosol-Maxico City</h6>"
        },
      ],


      eventMouseover: function(calEvent, jsEvent) {
          var tooltip = '<div class="tooltipevent" style="position:absolute;z-index:10001;">' + calEvent.tooltip + '</div>';
          jQuery("body").append(tooltip);
          jQuery(this).mouseover(function(e) {
              jQuery(this).css('z-index', 10000);
              jQuery('.tooltipevent').fadeIn('500');
              jQuery('.tooltipevent').fadeTo('10', 1.9);
          }).mousemove(function(e) {
              jQuery('.tooltipevent').css('top', e.pageY - 220);
              jQuery('.tooltipevent').css('left', e.pageX - 80);
          });
      },

      eventMouseout: function(calEvent, jsEvent) {
          jQuery(this).css('z-index', 8);
          jQuery('.tooltipevent').remove();
      },

    });

});



//***************************
// GoogleMap Function
//***************************
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"simplified"},{"color":"#4e5256"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#4e5256"},{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#ffffff"},{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"simplified"},{"hue":"#ff0000"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"simplified"},{"color":"#007ec8"},{"saturation":"-29"},{"lightness":"56"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":"82"},{"lightness":"-6"},{"gamma":"1"},{"hue":"#006dff"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#007ec8"},{"lightness":"56"},{"saturation":"-29"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#e5e8ed"},{"visibility":"on"}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        title: 'Snazzy!'
    });
}



//***************************
// FilterAble Function
//***************************
jQuery(window).on('load', function() {

var $grid = $('.music-plane-gallery').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'a', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.filters-button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'a', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

});