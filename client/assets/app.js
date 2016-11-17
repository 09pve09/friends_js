var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
$routeProvider
  .when('/',{
      templateUrl: 'partials/showall.html'
      // controller: 'PlayersController'
  })
  .when('/new',{
      templateUrl: 'partials/new.html',
      controller: 'newController'
  })
  .when('/edit/:id',{
      templateUrl: 'partials/edit.html',
      controller: 'editController'
  })
  .when('/show/:id',{
    templateUrl: 'partials/showone.html',
    controller: 'showoneController'
  })
  // .otherwise({
  //   redirectTo: '/'
  // });
});
