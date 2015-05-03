(function(){

	angular
		.module("Main.products", [])
		.controller("productsController", productsController);

	function productsController($scope, productsService, cartService){
		
		var modelProducts = function(data){
			$scope.products = data;
		}

         //Add product to Cart
		$scope.addToCart = function(product){
			var quantity = this.quantity;
			this.price = product.price;
			cartService.addProductToCart(product, quantity);
		}

        //Categories
		var modelCategories = function(data){
			$scope.categories = data;
		}

        //Get products and categories 
		productsService.getProducts()
			.then(modelProducts);

		productsService.getCategories()
			.then(modelCategories);

        //Selected categories
		var updateCategoriesSelected = function(){
			$scope.categoriesSelected = productsService.getCategoriesSelected();
		}

         //Filter products by categories
		$scope.productFilter = function(product){
			return productsService.productFilter(product);
		}

        //Change selected category
		$scope.categoryChange = function(category){
			productsService.categoryChange(category);
			updateCategoriesSelected();
		}

		updateCategoriesSelected();

	}

}());