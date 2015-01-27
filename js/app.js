var myApp = angular.module('myApp', ['allCtrl','ngRoute']);

myApp.directive('tooltip', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).hover(function(){
                // on mouseenter
                $(element).tooltip('show');
            }, function(){
                // on mouseleave
                $(element).tooltip('hide');
            });
        }
    };
});

myApp.directive('toggle', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      if (attrs.toggle=="tooltip"){
        $(element).tooltip();
      }
      if (attrs.toggle=="popover"){
        $(element).popover();
      }
    }
  };
})

myApp.config(['$routeProvider', function($routeProvider){
$routeProvider. when('/',{
	templateUrl: 'ipart.html',
	controller: 'MyCtrl'
}). 
when('/item/:itemId',{
	templateUrl: 'item.html',
	controller: 'ItemCtrl'
}).
otherwise({redirectTo: '/'});


}]);




