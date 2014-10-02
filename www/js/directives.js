angular.module('vaitkus.directives', [])

.directive("fullHeight", function(){
  return function(scope, element, attr) {
    var parent = element.parent().parent();
    var parentHeight = parent.prop("offsetHeight");
    console.log(parentHeight);
    var elementHeight = parentHeight - attr.heightOffset;
    
    element.css("height", elementHeight + "px");
  };
});
