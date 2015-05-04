'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    /*$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];*/

    //demo of angular's directives : ng-repeat (loop), and ng-model (2 way data binding), ng-submit
    //$scope.todos = [];
    // Using local storage instead of static
    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function () {
      localStorageService.set('todos', $scope.todos);
    }, true);


    // Angular expression addTodo()
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    // Angular expression removeTodo()
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
