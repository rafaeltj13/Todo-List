angular.module("todoList")

/**
 * Directive responsible for the validations.
 */
.directive("validations", function(){

    return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, element, attributes, ngModel) {

            /**
             * Validates a string.
             * 
             * @param {String} string String to be validated.
             * @return {boolean} Boolean with the validation.
             */
            ngModel.$validators.validateString = function (string) {
                if(string === undefined || string === null || string.trim() === "")
                    return false;
                return true;
            };

            /**
             * Validates a integer.
             * 
             * @param {Number} value Integer to be validated.
             * @return {boolean} Boolean with the validation.
             */
            ngModel.$validators.validateInteger = function (value) {
                if(value === undefined || value <= 0)
                    return false;
                return true;
            };
        }
    };
});