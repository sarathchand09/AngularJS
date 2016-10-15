angular.module("sportsStoreAdmin")
.constant("authUrl", "http://localhost:2403/users/login")
.constant("ordersUrl","http://localhost:2403/orders")
.controller("authCtrl", ['$scope','$http','$location','authUrl',function($scope, $http, $location, authUrl) {
        
$scope.authenticate = function (user, pass) {
   if(user === 'sarath' && pass === 'sarath'){
        $location.path("/main");
    }    
     $scope.authenticationError = "username or password is wrong,Login failed";
}
/*$http.post(authUrl, {
    username: user,
    password: pass
}, {
    withCredentials: true
}).success(function (data) {
    $location.path("/main");
}).error(function (error) {
    $scope.authenticationError = error;
});
    
}*/
}])
.controller("mainCtrl",['$scope',function($scope){
    
    $scope.screens = ["products","orders"];
    $scope.current =  $scope.screens[0];
    
    $scope.setScreen = function(index){
         $scope.current = $scope.screens[index];
     }
     
    $scope.getScreen = function(){
         return $scope.current == $scope.screens[0] ? "/AngularJS-SportsStore/views/adminProducts.html" : "/AngularJS-SportsStore/views/adminOrders.html";
     }
     
}])

.controller("ordersCtrl",['$scope','$http','ordersUrl',function($scope,$http,ordersUrl){
    $scope.orders = [];
    $http({
        method:"GET",
        url:ordersUrl
    }).then(function success(orders){
        $scope.orders = orders.data;
        
    },function error(error){
        $scope.error = error;
    });
    $scope.selectedOrder;
    
    $scope.selectOrder = function(order){
        $scope.selectedOrder = order;
    }
    $scope.calcTotal = function(order) {
        var total = 0;
        for (var i = 0; i < order.products.length; i++) {
            total +=order.products[i].count * order.products[i].price;
        }
        return total;
    }
}]);