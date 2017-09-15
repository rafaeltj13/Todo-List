angular.module("todoList")

.controller("tasksCtrl", ['$scope', '$mdDialog', 'taskServices', '$state', 'Task', function($scope, $mdDialog, taskServices, $state, Task) {

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
        taskServices.finishTask(index).then(function (){
            refresh();
        });
    };

    $scope.addTask = function (task) {
        let newTask = new Task(task);
        taskServices.addTask(newTask).then(function (){
            refresh();
        });
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