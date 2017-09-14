angular.module("todoList")

.controller("tasksCtrl", ['$scope', '$mdDialog', 'taskServices', '$state', function($scope, $mdDialog, taskServices, $state) {

    refresh();

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

    function refresh() {
        $scope.tasks = taskServices.tasks;
        $scope.tasks.sort(orderTasksByPriority);
        $scope.difficulties = taskServices.difficulties;
    };

    function orderTasksByPriority(task1, task2) {
        if (task1.priority > task2.priority)
            return -1;
        if (task1.priority < task2.priority)
            return 1;
        return 0;
    };
}]);