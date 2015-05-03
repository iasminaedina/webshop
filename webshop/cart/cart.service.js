(function() {
    "use strict";

    var cartService = function ($http, $rootScope) {
        

        //Get products that have been added to cart
        var addProductToCart = function(product, quantity){
            if($rootScope.cartProducts[product.name]){
                $rootScope.cartProducts[product.name].quantity += quantity;
            }
            else{
                $rootScope.cartProducts[product.name] = {
                    product: product,
                    quantity: quantity,
                    total: quantity * product.price
                }
            }   
        //calculate cart total
            calcCartTotal(quantity * product.price);
        }

        //increase quantity of product by 1, recalculate total
        var increaseQuantity = function(product){
            calcProductTotal(product, 1);
            calcCartTotal(product.price);
        }

        //decrease quantity of product by 1, recalculate total
        var decreaseQuantity = function(product){
            if($rootScope.cartProducts[product.name].quantity > 1){
                calcProductTotal(product, -1);
                calcCartTotal(product.price * -1);
            }
        }

        //calculate cart total
        var calcCartTotal = function(amount){
            $rootScope.cartTotal += amount;
        }

        var calcProductTotal = function(product, quantity){
            var cartProduct = $rootScope.cartProducts[product.name];
            cartProduct.quantity += quantity;
            cartProduct.total = cartProduct.quantity * cartProduct.product.price;
        }

        //remove product from cart, recalculate total
        var removeItem = function(product){
        var cartProduct = $rootScope.cartProducts[product.name];
        var cartProductTotal = cartProduct.product.price * cartProduct.quantity;
        calcCartTotal(cartProductTotal * -1);
        delete $rootScope.cartProducts[product.name];
        }

        return {
            addProductToCart: addProductToCart,
            removeItem: removeItem,
            increaseQuantity: increaseQuantity,
            decreaseQuantity: decreaseQuantity
        }
    }

    angular
    .module("Main")
    .factory("cartService", cartService)

}());