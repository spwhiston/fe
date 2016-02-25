(function(){

	'use strict';

	angular.module('myApp.flickrGallery', [])
		.factory('appCache', appCache)

	appCache.$inject = ['$window'];

	function appCache($window) {

		var localStorage = {
			get : get,
			put: put,
			remove : remove,
			removeAll : removeAll
		}

		return localStorage;

		function get(cacheName) {
			var cached = JSON.parse($window.localStorage.getItem(cacheName));
			if (cached == null) {
			    return null;
			}
			return cached.data;
		};
		function put(cacheName, data) {
			var dataToCache = { data: data };
			var objectToSaveToJson = JSON.stringify(dataToCache);
			$window.localStorage.setItem(cacheName, objectToSaveToJson);
		};
		function remove(cacheName) {
			$window.localStorage.removeItem(cacheName);
		};
		function removeAll() {
			$window.localStorage.clear();
		};

	}

})();