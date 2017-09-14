angular.module("todoList")

.factory("taskServices", function (){

    let tasks = [
        {
            name: "Dotar",
            priority: "5",
            description: "Testando descrição",
            difficulty: "Fácil"
        },
        {
            name: "Estudar",
            priority: "4",
            description: "Descrição sendo testada",
            difficulty: "Difícil"
        }
    ];

    let difficulties = ['Fácil', 'Médio', 'Difícil'];

    return {
        tasks: tasks,
        difficulties: difficulties
    };

});