angular.module("todoList")

.directive("validations", function(){
    return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, element, attributes, ngModel) {

            ngModel.$validators.validateString = function (string) {
                if(string === undefined || string === null || string.trim() === "")
                    return false;
                return true;
            };

            ngModel.$validators.validateInteger = function (value) {
                if(value === undefined || value <= 0)
                    return false;
                return true;
            };
        }
    };
});