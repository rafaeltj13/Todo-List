angular.module("todoList")

.controller("tasksCtrl", ['$scope', '$mdDialog', 'taskServices', '$state', function($scope, $mdDialog, taskServices, $state) {

    refreshTasks();

    $scope.openTask = function (task, event) {
        $mdDialog.show(
            $mdDialog.alert()
              .title(task.name)
              .textContent(task.description)
              .ok('Entendi!')
              .targetEvent(event)
          );
    };

    $scope.finishTask = function (index) {
        taskServices.tasks.splice(index, 1);
    };

    $scope.addTask = function (task) {
        taskServices.tasks.push(task);
        console.log($scope.tasks);
        $state.go('home');
    };

    function refreshTasks() {
        $scope.tasks = taskServices.tasks;
    };

}]);