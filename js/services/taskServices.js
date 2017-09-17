angular.module("todoList")

/**
 * Service responsable for task's operations.
 */
.factory("taskServices", ['$state', 'DIFFICULTIES', 'STATES', 'Task', function ($state, DIFFICULTIES, STATES, Task){

    let tasks = [];

    let difficulties = [DIFFICULTIES.EASY, DIFFICULTIES.MEDIUM, DIFFICULTIES.HARD];

    /**
     * Returns created tasks.
     * 
     * @return Array with all the active tasks.
     */
    let getTasks = function () {
        return tasks;
    };

    /**
     * Returns the predefined difficulties.
     * 
     * @return Array with the difficulties of the task.
     */
    let getDifficulties = function () {
        return difficulties;
    };

    /**
     * Creates and add a task into task list.
     * 
     * @param {Object} task Task to be added.
     */
    let addTask = function (task) {
        let newTask = new Task(task);
        tasks.push(newTask);
        tasks.sort(orderTasksByPriority);
        $state.go(STATES.HOME);
    };

    /**
     * Removes a task from the task list.
     * 
     * @param {Number} taskIndex Index of the task to be removed.
     */
    let finishTask = function (taskIndex) {
        tasks.splice(taskIndex, 1);
    };

    /**
     * Compares tasks by the priority.
     * 
     * @param {Object} task1 First task to be compared.
     * @param {Object} task2 Second task to be compared.
     * @return {Number} Highest priority number.
     */
    let orderTasksByPriority = function (task1, task2) {
        let ascending = 1;
        let descending = -1;
        let neutral = 0;

        if (task1.priority > task2.priority)
            return descending;
        if (task1.priority < task2.priority)
            return ascending;
        return neutral;
    };

    return {
        getTasks: getTasks,
        getDifficulties: getDifficulties,
        addTask: addTask,
        finishTask: finishTask,
        orderTasksByPriority: orderTasksByPriority
    };

}]);