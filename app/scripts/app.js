'use strict';

/**
 * @ngdoc overview
 * @name firstAppAngularApp
 * @description
 * # firstAppAngularApp
 *
 * Main module of the application.
 */
var app = angular
  .module('firstAppAngularApp', []);

app.controller("TitleController", function($scope){
	$scope.title = "Titre";
	$scope.text = "Contenu";
});

app.directive("expander", function(){
	return {
		restrict: 'EA',
		replace: true,
		transclude: true,
		scope: {title:'=expanderTitle'},
		template:'<div>'+
		'<div class="title" ng-click="toogle()">{{title}}</div>'+
		'<div class="body" ng-show="showMe" ng-transclude></div>'+
		'</div>',
		link: function(scope, element, attrs){
			scope.showMe = false;
			scope.toogle = function toogle(){
				scope.showMe = !scope.showMe;
			};
		}
	};
});