var allCtrl = angular.module('allCtrl', ['ngAnimate']);

allCtrl.controller('MyCtrl', ['$scope', '$http', function($scope, $http){
$http.get('faid.json').success(function(data){
$scope.list = data;	
$scope.listOrder = 'name';
});
}]);

allCtrl.controller('ItemCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
$http.get('faid.json').success(function(data){
$scope.list = data;
$scope.whichItem = $routeParams.itemId;							
});
}]);