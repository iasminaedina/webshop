(function(){

	var productsService = function($http){

			var categoriesSelected = [],
			products = [];

		//Get products from database
		var getProducts = function(){
			return $http.get("data/products.json")
						.then(function(response){
							return response.data;
						})
		};

        //Get product id from database
		var getProduct = function(id){
			return $http.get("data/products.json")
						.then(function(response){
							return findProductInArray(response.data, id);
						})
		}
      
		//Search for product in array by id
		var findProductInArray = function(data, id){
			return data.filter(function(element){
				if(element.id === id){
					return element;
				}
			});
		}

		//Get categories from database
		var getCategories = function(){
			return $http.get("data/categories.json")
						.then(function(response){
							return response.data;
						})
		};

         //Get category selected
		var getCategoriesSelected = function(){
      		return categoriesSelected;
      	}

      	 //Category change
        var categoryChange = function(category){
			var i = categoriesSelected.indexOf(category);
            if (i > -1) {
                categoriesSelected.splice(i, 1);
            } 
            else {
                categoriesSelected.push(category);
            }

        };
        
        //Filter products by category selected
        var productFilter = function(product){
            if (categoriesSelected.length > 0) {
                if (categoriesSelected.indexOf(product.category) < 0){
                    return;
                }
            }
            return product;
        }  


		return {
			getProducts: getProducts,
			getProduct: getProduct,
			getCategories: getCategories,
			productFilter: productFilter,
			categoryChange: categoryChange,
			getCategoriesSelected: getCategoriesSelected
		}

	}
	

	angular
		.module("Main")
		.factory("productsService", productsService); 

}());