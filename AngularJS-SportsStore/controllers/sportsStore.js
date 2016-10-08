angular.module("sportsStore").constant('dataUrl', 'http://localhost:2403/products').controller("sportsStoreCtrl", ['$scope', '$http', 'dataUrl', function ($scope, $http, dataUrl) {
    $scope.data = {};
    
    $http({
        method:"GET",
        url:dataUrl
    }).then(function success(products){
        $scope.data.products = products.data;
    },function error(data){
         $scope.data.error = data;
    });
     
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