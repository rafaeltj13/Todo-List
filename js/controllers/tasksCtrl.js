angular.module("todoList")

/**
 * Controller responsible for the tasks
 */
.controller("tasksCtrl", ['$scope', '$mdDialog', 'taskServices', '$state', '$mdToast', function($scope, $mdDialog, taskServices, $state, $mdToast) {

    refresh();

    /**
     * Opens a dialog with the description of the task.
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
        taskServices.finishTask(index);
        refresh();
    };

    /**
     * Adds a task to the task list.
     * 
     * @param {Object} task Task to be added.
     */
    $scope.addTask = function (task) {
        taskServices.addTask(task);
        refresh();
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
     * @return {boolean} {@code true) if the there are no tasks in the list, {@code false} otherwise.
     */
    $scope.checkTasksLength = function () {
        return $scope.tasks.length === 0;
    };

    /**
     * Set the scope attributes.
     */
    function refresh() {
        $scope.tasks = taskServices.getTasks();
        $scope.difficulties = taskServices.getDifficulties();
    };
}]);