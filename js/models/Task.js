angular.module("todoList")

.factory('Task', [function () {

    /**
     * Construtor da task
     * 
     * @param {Object} task Objeto contendo informações da task
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