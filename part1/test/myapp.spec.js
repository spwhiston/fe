describe('my App', function(){
	var $controller, $q, $rootScope, flickrGalleryController, mockFlickrService, mockAppCache;

	beforeEach(function() {
		module('myApp.flickrGallery');


		mockFlickrService = {
			getPhotos: function () {
				var deferred = $q.defer();		        
		        deferred.resolve({
		        	data: {
		        		items: [{
		        			title: 'Photo One',
		        			link: 'http://www.photo-one.com',
		        			selected: false
		        		},{
		        			title: 'Photo Two',
		        			link: 'http://www.photo-two.com',
		        			selected: false
		        		}]
		        	}
		        });
		        return deferred.promise;			        
			}
		};		

		mockAppCache = {
			get: function (cacheName) {
				if(cacheName === 'selectedPhotos') {
					return [];
				}
			},
			put: function(cacheName, data) {
				return [];
			}
		};

		module(function ($provide) {
			$provide.value('flickr', mockFlickrService);
			$provide.value('appCache', mockAppCache);
		});

		inject(function(_$controller_, _$q_, _$rootScope_ ){
			$controller = _$controller_;
			$q = _$q_;
			$rootScope = _$rootScope_;

		});
		
		flickrGalleryController = $controller('flickrGalleryController', {});
		$rootScope.$apply();
	});	

	
	describe('on init', function(){

		it('Should return Two photo Objects and expect the title to equal "Photo One" ', function(){
			expect(flickrGalleryController.photos.length).toEqual(2);
			expect(flickrGalleryController.photos[0].title).toEqual('Photo One');
		});
		
		it('should set property of selected to "true" if the object link is cached.', function(){
			mockAppCache.get = function(){
				return ['http://www.photo-one.com'];
			}
			flickrGalleryController = $controller('flickrGalleryController', {});
			$rootScope.$apply();			
			expect(flickrGalleryController.photos[0].selected).toEqual(true);
		});
	});

	describe('Selecting an Image', function(){
		it('should set property of selected to "false" if the image is clicked.', function(){
			mockAppCache.get = function(){
				return ['http://www.photo-one.com'];
			}
			flickrGalleryController = $controller('flickrGalleryController', {});
			$rootScope.$apply();

			var objectOne = flickrGalleryController.photos[0];

			flickrGalleryController.selectPhoto(objectOne);					
			expect(objectOne.selected).toEqual(false);
		});	

		it('should set property of selected to "true" if the image is clicked.', function(){
			flickrGalleryController = $controller('flickrGalleryController', {});
			$rootScope.$apply();

			var objectOne = flickrGalleryController.photos[1];

			flickrGalleryController.selectPhoto(objectOne);					
			expect(objectOne.selected).toEqual(true);
		});	

		it('should remove link id from local storage when the object is false.', function(){
			
			mockAppCache.get = function(){
				return ['http://www.photo-two.com'];
			}

			flickrGalleryController = $controller('flickrGalleryController', {});
			$rootScope.$apply();
			
			var objectOne = flickrGalleryController.photos[1];
			flickrGalleryController.selectPhoto(objectOne);	
			expect(flickrGalleryController.selectedList).toEqual([]);
		});	

		it('should add link id from local storage when the object is true.', function(){
			
			flickrGalleryController = $controller('flickrGalleryController', {});
			$rootScope.$apply();
			
			var objectOne = flickrGalleryController.photos[1];
			flickrGalleryController.selectPhoto(objectOne);	
			expect(flickrGalleryController.selectedList).toEqual(['http://www.photo-two.com']);
		});	

	});

});