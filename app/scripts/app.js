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
	$scope.expanders = [
		{title: 'Title 1',
		text: 'Contenu 1'},
		{title: 'Title 2',
		text: 'Contenu 2'},
		{title: 'Title 3',
		text: 'Contenu 3'}
	];
});

app.directive("accordion", function(){
	return {
		restrict: 'EA',
		replace: true,
		transclude: true,
		template:"<div ng-transclude></div>",
		controller: function(){
			var expanders = [];
			this.gotOpened = function(selectedExpander){
				expanders.forEach(function(expander){
					if(selectedExpander != expander){
						expander.showMe = false;
					}
				});
			};
			this.addExpander = function(expander){
				expanders.push(expander);
			};
		}
	};
});


app.directive("expander", function(){
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        require: '^?accordion',
        scope: {title: '=expanderTitle'},
        template: '<div>' +
        '<div class="title" ng-click="toggle()">{{title}}</div>' +
        '<div class="body" ng-show="showMe" ng-transclude></div>' +
        '</div>',
        link: function(scope, element, attrs, accordionController){
            scope.showMe = false;
            accordionController.addExpander(scope);
            scope.toggle = function toggle(){
                scope.showMe = !scope.showMe;
                accordionController.gotOpened(scope);
            };
        }
    };
});