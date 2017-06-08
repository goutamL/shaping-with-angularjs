(function(){
	var app = angular.module("store-directives", []);

	app.directive("productDescription",function(){
		return{
			restrict:"E",
			templateUrl:"partials/product-description.html"
		};
	});

	app.directive("productSpecs", function(){
		return {
			restrict: "A",
			templateUrl: 'partials/product-specs.html'
		};
	});

	app.directive("productTabs",function(){
		return{
			restrict:"E",
			templateUrl:"partials/product-tabs.html",
			controller:function(){
				this.tab = 1;

				this.isSet = function(selectedTab){
					return this.tab===selectedTab;
				};
				this.setTab = function(newTab){
				this.tab = newTab;
				};				
			},
			controllerAs:"tab"
		};
	});

  app.directive("productGallery",function(){
    return{
      restrict:"E",
      templateUrl:"partials/product-gallery.html",
      controller:function(){
            this.current=0;

            this.setCurrent= function(newGallery){
              this.current = newGallery || 0 ;
              };
      },
      controllerAs:"gallery"
    };
  });

})();