(function(){
	'use strict';

	angular.module('myApp.flickrGallery')
		.factory('flickr',flickr);

		flickr.$inject = ['$http', '$q'];

	function flickr($http, $q){

		var flickr = {
			getPhotos : getPhotos
		}

		return flickr;
		function getPhotos(tags) {
			var url = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK&tags='+tags;
			return $http.jsonp(url)
				.then(function(response){
					return response;
				});
			}				
		}

})();