(function(){
    "use strict";

    angular
        .module("Main.cart",[] )
        .controller("cartController", cartController);

    function cartController($scope, cartService) {
        
        //Delete Product in cart
        $scope.removeItem = function(product){
        cartService.removeItem(product);
        }

        //Add quantity of product in cart
        $scope.increaseQuantity = function(product){
        cartService.increaseQuantity(product);
        }
        
        //Substract quantity of product in cart
        $scope.decreaseQuantity = function(product){
            cartService.decreaseQuantity(product);
        }
}



}());