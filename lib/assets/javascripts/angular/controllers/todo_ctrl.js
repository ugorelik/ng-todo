app = angular.module("UgModule");

app.controller("TodoCtrl",["$scope", "$http", function ($scope, $http) {
  $scope.hello ="hello world";
  

  $scope.getTodos = function(){
    $http.get('/todos').success(function (data) {
      console.log(data);
      $scope.incompleteTodos = data;
    });

    $http.get('/todos', {params: {scope: 'complete'}}).success(function (data) {
      console.log(data);
      $scope.completeTodos = data;
    });
  };

  $scope.createTodo = function(todo){
    $http.post('/todos', {todo: todo}).success(function (data) {
      console.log(data);

      if (!todo.id)
        $scope.incompleteTodos.push(data);

      $scope.new_todo = {};
      $("form textarea").focus();
    });
  };

  $scope.editTodo = function(todo){
    $scope.new_todo = todo;
  };

  $scope.completeTodo = function (todo, index) {
    todo.is_complete = true;
    $scope.createTodo (todo);
    $scope.incompleteTodos.splice(index,1);
    $scope.completeTodos.push(todo);

  }

  $scope.getTodos();
}]);