angular.module("todoList")

/**
 * Controller responsible for the tasks
 */
.controller("tasksCtrl", ['$scope', '$mdDialog', 'taskServices', '$state', 'Task', '$mdToast',
 function($scope, $mdDialog, taskServices, $state, Task, $mdToast) {

    refresh();

    /**
     * Open a dialog with the description of the task.
     * 
     * @param {Object} task Task selected by the user.
     * @param event Event triggering action.
     */
    $scope.openTask = function (task, event) {
        $mdDialog.show(
            $mdDialog.alert()
              .title(task.name)
              .textContent(task.description)
              .ok('Entendi!')
              .targetEvent(event)
          );
    };

    /**
     * Finish a task by the index.
     * 
     * @param {Number} index Index of the task.
     */
    $scope.finishTask = function (index) {
        taskServices.finishTask(index).then(function (){
            refresh();
        });
    };

    /**
     * Creates and add a task into task list.
     * 
     * @param {Object} task Task to be added.
     */
    $scope.addTask = function (task) {
        let newTask = new Task(task);
        taskServices.addTask(newTask).then(function (){
            refresh();
        });
    };

    /**
     * Clears the fields in the form.
     */
    $scope.cleanForm = function () {
        $scope.task = {};
    };

    /**
     * Checks if the length of the task list is zero.
     * 
     * @return {boolean} if the task has 0 objects.
     */
    $scope.checkTasksLength = function () {
        if($scope.tasks.length === 0)
            return true;
        return false;
    };

    /**
     * Set the scope attributes.
     */
    function refresh() {
        $scope.tasks = taskServices.getTasks();
        $scope.tasks.sort(taskServices.orderTasksByPriority);
        $scope.difficulties = taskServices.getDifficulties();
    };
}])

/**
 * Configuration of the angular material theme.
 */
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('altTheme')
      .primaryPalette('orange');
});