(function( $ ){
  $.fn.mapNav = function(options) {
    var defaults = { 
      mapElement: this,
      locationSelector: "[data-role=location]"
    };
    var options = $.extend({}, defaults, options);

    // Get Locations and set center if not set
    var locations = [];
    $("[data-role=location]").each(function(){
      locations.push(new location(this.text, $(this).data("latitude"), $(this).data("longitude")));
    });
    if(! options.center){
      options.center = locations[0].latlng;
    };

    // Output Map and Markers 	
    options.map = new google.maps.Map($(options.mapElement).get(0), options);
    for ( var i=locations.length-1; i>=0; --i ){
      locations[i].setMarker();
    };


    // Location Object
    function location(name, latitude, longitude) {
      this.name = name
      this.latlng = new google.maps.LatLng(latitude, longitude);
      this.focus = function() {
        options.map.panTo(this.latlng); 
      }

      this.setMarker = function() {
        var marker = new google.maps.Marker({
          position: this.latlng,
          map: options.map
        });
      }
    };


    // Respond to navigation
    $(options.locationSelector).click(function(){
      locations[$(this).index(options.locationSelector)].focus();
      return false;
    });
  }
})( jQuery );