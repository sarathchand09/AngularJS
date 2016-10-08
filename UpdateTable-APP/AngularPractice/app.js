var myapp = angular.module('myapp', []);
myapp.filter("checkedItems", function () {
    return function (data, showcomplete) {
        var result = [];
        angular.forEach(data, function (value) {
            if (value.done == false || showcomplete == true) {
                result.push(value);
            }
        });
        return result;
    }
});
myapp.controller('myctrl', ['$scope', '$http', function ($scope, $http) {
    $scope.IncompleteTechnologies = function () {
        var count = 0;
        angular.forEach($scope.data, function (value) {
            if (!value.done) count++;
        });
        return count;
    }
    $scope.warninglevel = function () {
        return $scope.IncompleteTechnologies() < 3 ? "label-success" : "label-warning";
    }
    $scope.addnewitem = function (item) {
        $scope.data.push({
            no: ""
            , tech: item
            , done: false
        });
    }
    $scope.showdata = function () {
        $http.get('items.json').success(function (data) {
            $scope.data = data;
        }).error(function (data, status) {
            console.log("call to server failed:" + data);
        });
    }
}]);
//myapp.run(function ($http) {
//    $http.get("items.json").success(function (data) {
//        model.items = data;
//    });
//});