(function(){

	angular
		.module("Main.product", [])
		.controller("productController", productController);

	function productController($scope, productsService, $routeParams, cartService){

		var modelProduct = function(productArray){
			$scope.product = productArray[0];
		}

		productsService.getProduct($routeParams.id)
			.then(modelProduct);

		$scope.addToCart = function(product){
			var quantity = this.quantity;
			this.price = product.price;
			cartService.addProductToCart(product, quantity);
		}

	}

}());