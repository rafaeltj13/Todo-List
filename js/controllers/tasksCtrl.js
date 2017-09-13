angular.module("todoList")

.controller("tasksCtrl", ['$scope', '$mdDialog', function($scope, $mdDialog) {

    $scope.tasks = [
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

    $scope.openTask = function (task, event) {
        $mdDialog.show(
            $mdDialog.alert()
              .title(task.name)
              .textContent(task.description)
              .ok('Entendi!')
              .targetEvent(event)
          );
    };

    $scope.finishTask = function (task) {
        console.log(task);
    }

}]);