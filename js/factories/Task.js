angular.module("todoList")

/**
 * Task factory.
 */
.factory('Task', [function () {

    /**
     * Task constructor.
     * 
     * @param {Object} task Object containing task informations.
     * @constructor
     */
    function Task(task) {
        this.name = task.name;
        this.priority = task.priority;
        this.description = task.description;
        this.difficulty = task.difficulty;
    };

    Task.prototype.constructor = Task;

    return Task;
    
}]);