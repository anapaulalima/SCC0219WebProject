//codigo retirado de https://bitbucket.org/carlosasj/contacts_front/src/c4ecb9a8099d717fba661b394504d2009c7b4ec7/js/directives/file-input.js?at=master&fileviewer=file-view-default

angular.module('correileganteApp')
    .directive('fileInput', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            link: function (scope, el, attrs) {
                el.bind('change',function () {
                    $parse(attrs.fileInput).assign(scope,  el[0].files);
                    scope.$apply();
                })
            }
        }
    }]);