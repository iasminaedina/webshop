(function(){

	angular
		.module("Main.product", [])
		.controller("productController", productController);

	function productController($scope, productsService, $routeParams, cartService){

		var modelProduct = function(productArray){
			$scope.product = productArray[0];
		}
		
        //Get product by id
		productsService.getProduct($routeParams.id)
			.then(modelProduct);

        //Add product to cart
		$scope.addToCart = function(product){
			var quantity = this.quantity;
			this.price = product.price;
			cartService.addProductToCart(product, quantity);
		}

	}

}());