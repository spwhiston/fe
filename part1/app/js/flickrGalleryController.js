(function(){
	'use strict';

	angular.module('myApp.flickrGallery')
		.controller('flickrGalleryController', flickrGalleryController);

	flickrGalleryController.$inject = ['flickr', 'appCache'];

	function flickrGalleryController(flickr, appCache) {

		var vm = this;
		vm.photos;
		vm.selectedList = [];
		vm.tag = 'london';

		if (appCache.get('selectedPhotos') !== null) {
			vm.selectedList = appCache.get('selectedPhotos');
		}

		flickr.getPhotos(vm.tag).then(function(response){
			vm.photos = response.data.items;
			for(var i=0;i< vm.photos.length;i++) {
				 var link = vm.photos[i].link; 
				 var inSelection = inArray(vm.selectedList, link);
				if(!inSelection) {
					vm.photos[i].selected = true;
				}
			}

		});
	
		vm.selectPhoto = function(object){
			
			object.selected = !object.selected;
			
			var name = object.link;
			var inArrayIndex = inArray(vm.selectedList, name);
			
			if(!inArrayIndex) {
				vm.selectedList.splice(0, 1);				
			} else {				
				vm.selectedList.push(name);
			}			
			appCache.put('selectedPhotos', vm.selectedList);
		};

		function inArray(arr, string) {
			return (arr.indexOf(string) >= 0)? false : arr.indexOf(string);
		}

	}
})();