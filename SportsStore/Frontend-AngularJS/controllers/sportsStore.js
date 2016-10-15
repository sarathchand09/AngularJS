angular.module("sportsStore").constant('dataUrl', 'http://localhost:2403/products')
    .constant("orderUrl", "http://localhost:2403/orders")
    .controller("sportsStoreCtrl", ['$scope', '$http', '$location','dataUrl', 'orderUrl','cart',function ($scope, $http, $location,dataUrl,orderUrl,cart) {
    $scope.data = {};
    
    $http({
        method:"GET",
        url:dataUrl
    }).then(function success(products){
        $scope.data.products = products.data;
    },function error(data){
         $scope.data.error = data;
    });
     
    $scope.sendOrder = function(shippingDetails){
            var order = angular.copy(shippingDetails);
            order.products = cart.getProducts();
            
            $http({
                method:"POST",
                url:orderUrl,
                data:order
            })
            .then(function success(dataObj){
                console.log("inside success",dataObj);
                 $scope.data.orderId = dataObj.data.id;
                cart.getProducts().length = 0;
            },function error(error){
                console.log("inside error",error);
                $scope.data.orderError = error;
            }).finally(function(){
                $location.path("/complete");
            });
    }
        
}]).controller("cartSummaryController", ['cart', function (cart) {
    $scope.cartData = cart.getProducts();
    $scope.total = function () {
        var total = 0;
        for (var i = 0; i < $scope.cartData.length; i++) 
            total += ($scope.cartData[i].price * $scope.cartData[i].count);
        return total;
    }
    $scope.remove = function (id) {
        cart.removeProduct(id);
    }
}]);