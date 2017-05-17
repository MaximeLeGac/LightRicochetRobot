angular.module('app.controllers')
.controller('mainController', function($scope, $rootScope) {

    $scope.mapIndex = 0;

    var size = 8;

    $rootScope.map = [size];
    for (var x = 0; x < size; x++) {
        var line = [size];
        for (var y = 0; y < size; y++) {
            line[y] = y
        }
        $rootScope.map[x] = line;
    }

    $scope.start = function() {
        console.log('start');
    }

});