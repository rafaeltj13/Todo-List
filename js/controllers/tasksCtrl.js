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

    $scope.cleanForm = function () {
        $scope.task = {};
    };

    $scope.checkTasksLength = function () {
        if($scope.tasks.length === 0)
            return true;
        return false;
    };

    function refresh() {
        $scope.tasks = taskServices.getTasks();
        $scope.tasks.sort(taskServices.orderTasksByPriority);
        $scope.difficulties = taskServices.getDifficulties();
    };
}])
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('altTheme')
      .primaryPalette('deep-orange');
});