'use strict';

/**
 * @ngdoc function
 * @name firstAppAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firstAppAngularApp
 */
angular.module('firstAppAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
