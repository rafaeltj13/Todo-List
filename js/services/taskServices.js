angular.module("todoList")

.factory("taskServices", ['$state', 'DIFFICULTIES', function ($state, DIFFICULTIES){

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

    let difficulties = [DIFFICULTIES.EASY, DIFFICULTIES.MEDIUM, DIFFICULTIES.HARD];

    let addTask = function (task) {
        tasks.push(task);
        $state.go('home');
    };

    let finishTask = function (taskIndex) {
        tasks.splice(taskIndex, 1);
    };

    return {
        tasks: tasks,
        difficulties: difficulties,
        addTask: addTask,
        finishTask: finishTask
    };

}]);