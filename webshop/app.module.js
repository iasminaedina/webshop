(function() {
    'use strict';

    angular
        .module('Main', [
        	'ngRoute',
            'Main.products',
            'Main.product',
            'Main.cart'
            ]
        )

        .run(function($rootScope){
            $rootScope.cartProducts = {};
            $rootScope.cartTotal = 0;
        })

        .config(function($routeProvider){
        	$routeProvider
        		.when('/product/:id', {
        			templateUrl: './products/product.html',
        			controller: 'productController'
        		})
                .when('/cart', {
                templateUrl: './cart/cart.html',
                controller: 'cartController'
                })
                .when('/checkout',{
                templateUrl: './checkout/checkout.html',
                controller: 'cartController'
                })
        		.when('/', {
        			templateUrl: './products/products.html',
        			controller: 'productsController'
        		})
        		.otherwise({ redirectTo: '/' });
        })
}());
