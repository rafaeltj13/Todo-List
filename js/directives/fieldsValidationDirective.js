angular.module("todoList")

/**
 * Directive responsible for validate form's fields.
 */
.directive("fieldValidation", function(){

    return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, element, attributes, ngModel) {

            /**
             * Checks if a string is not undefined, null or blank.
             * 
             * @param {String} string String to be validated.
             * @return {boolean} {@code true} if the specified string is not undefined, null or blank, {@code false} otherwise.
             */
            ngModel.$validators.validateString = function (string) {
                return !(string === undefined || string === null || string.trim() === "");
            };

            /**
             * Checks if a number is not undefined and negative
             * 
             * @param {Number} value Integer to be validated.
             * @return {boolean} {@code true} if the specified number is not undefined and negative
             */
            ngModel.$validators.validatePositiveNumber = function (value) {
                return !(value === undefined || value <= 0);
            };
        }
    };
});