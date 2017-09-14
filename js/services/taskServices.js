angular.module("todoList")

.factory("taskServices", function (){

    let tasks = [
        {
            name: "Dotar",
            priority: "Alta",
            description: "Testando descrição"
        },
        {
            name: "Estudar",
            priority: "Baixa",
            description: "Descrição sendo testada"
        }
    ];

    return {
        tasks: tasks
    };

});