var app = angular.module("UgModule", ['ngResource']); //, 'ui.bootstrap', 'ui.directives'
app.config(["$httpProvider", function ($httpProvider) {
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}]);

app.filter("markdown", function () {
  return function (text) {
    var md = "";
    if(!!text)
      md = markdown.toHTML(text);
    return md;
  };
});

app.directive('ugHover', function () {
  return {
    link: function (scope, ele, attr) {
      ele.children('.actions').addClass('hidden');
      ele.hover(function (event) {
        ele.children().removeClass('hidden');
      },
      function (event) {
        ele.children('.actions').addClass('hidden')
      });
    }
  };
});

app.directive('markdown', function () {
  return {
    restrict: 'E',
    link: function (scope, ele, attr) {
      var text = ele.text();
      ele.html(markdown.toHTML(text));
    }
  };
});