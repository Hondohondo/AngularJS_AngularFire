var app = angular.module('app', ['ngRoute', 'firebase']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/home', {
      template: '<home></home>'
    })
    .otherwise('/home')

})