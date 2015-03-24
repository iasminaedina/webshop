(function(){

	angular
		.module("Main.products", [])
		.controller("productsController", productsController);

	function productsController($scope, productsService, cartService){
		
		var modelProducts = function(data){
			$scope.products = data;
		}

		$scope.addToCart = function(product){
			var quantity = this.quantity;
			this.price = product.price;
			cartService.addProductToCart(product, quantity);
		}

		var modelCategories = function(data){
			$scope.categories = data;
		}

		productsService.getProducts()
			.then(modelProducts);

		productsService.getCategories()
			.then(modelCategories);

		var updateCategoriesSelected = function(){
			$scope.categoriesSelected = productsService.getCategoriesSelected();
		}

		$scope.productFilter = function(product){
			return productsService.productFilter(product);
		}

		$scope.categoryChange = function(category){
			productsService.categoryChange(category);
			updateCategoriesSelected();
		}

		updateCategoriesSelected();

	}

}());