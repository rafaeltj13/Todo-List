angular.module("todoList")

.factory("taskServices", ['$state', 'DIFFICULTIES', 'STATES', function ($state, DIFFICULTIES, STATES){

    let tasks = [
        {
            name: "Dotar",
            priority: "5",
            description: "Testando descrição",
            difficulty: "Fácil"
        },
        {
            name: "Estudar",
            priority: "1",
            description: "Descrição sendo testada",
            difficulty: "Difícil"
        }
    ];

    let getTasks = function () {
        return tasks;
    };

    let difficulties = [DIFFICULTIES.EASY, DIFFICULTIES.MEDIUM, DIFFICULTIES.HARD];

    let getDifficulties = function () {
        return difficulties;
    };

    let addTask = function (task) {
        tasks.push(task);
        $state.go(STATES.HOME);
    };

    let finishTask = function (taskIndex) {
        tasks.splice(taskIndex, 1);
    };

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