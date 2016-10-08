angular.module("cart", []).factory("cart", function () {
    var cartItems = [];
    return {
        addProduct: function (id, name, price) {
            var isFound;
            for (var i = 0; i < cartItems.length; i++) {
                if (cartItems[i].id === id) {
                    isFound = true;
                    cartItems[i].count++;
                    break;
                }
            }
            if (!isFound) cartItems.push({
                "id": id
                , "name": name
                , "price": price
                , "count": 1
            });
        }
        , removeProduct: function (id) {
            for (var i = 0; i < cartItems.length; i++) {
                if (cartItems[i].id === id) {
                    cartItems.splice(i, 1);
                    break;
                }
            }
        }
        , getProducts: function () {
            return cartItems;
        }
    }
}).directive("cartSummary", ["cart", function (cart) {
    return {
         restrict: "E",
         templateUrl: "components/cart/cartSummary.html",
         replace:true,
         controller: ['$scope', function ($scope) {
            var cartData = cart.getProducts();
            $scope.total = function () {
                var total = 0;
                for (var i = 0; i < cartData.length; i++) {
                    total += (cartData[i].price * cartData[i].count);
                }
                return total;
            }
            $scope.itemCount = function () {
                var total = 0;
                for (var i = 0; i < cartData.length; i++) {
                    total += cartData[i].count;
                }
                return total;
            }
        }]
    };
}]);