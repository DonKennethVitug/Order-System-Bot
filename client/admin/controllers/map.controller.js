(function (angular) {
  'use strict';
  var app = angular.module('app');

  app.controller(
    'map.controller',
    [
      '$log',
      function($log) {
        var mc = {};

        mc.model = {};

        mc.model.map;
        mc.model.mapOptions;
        mc.model.mapId = document.getElementById("google-map-default");
        mc.model.searchBox;
        mc.model.places;
        mc.model.address;
        mc.model.geocoder;
        mc.model.center;
        mc.model.marker;
        mc.model.coor = {
          'lat': '', 
          'lng': ''
        };

        //Map initialization  
          var mapInitialize = function(lat, lng) {

            mc.model.coor['lat'] = lat;
            mc.model.coor['lng'] = lng;
            mc.model.mapOptions = {
              center: mc.model.coor,
              zoom: 6,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              disableDefaultUI: true,
              disableDoubleClickZoom: true
            };
            mc.model.map = new google.maps.Map(mc.model.mapId, mc.model.mapOptions); 
            mc.model.geocoder = new google.maps.Geocoder();

          }
        //End Map initialization

        var init = function() {
          mapInitialize(12.879721, 121.77401699999996);
          $log.debug("map.controller initialize");
        };
        init();

        angular.extend(this, {
          model: mc.model
        });
      }
    ]
  )

})(angular)