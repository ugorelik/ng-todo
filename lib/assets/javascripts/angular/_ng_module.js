var app = angular.module("UgModule", ['ngResource']); //, 'ui.bootstrap', 'ui.directives'
app.config(["$httpProvider", function ($httpProvider) {
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}]);

app.directive("prevent", function () {
  return {
    link: function (scope, ele, attr) {
      ele.click(function (event) {
        event.preventDefault();
      });
    }
  };
});