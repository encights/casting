var root = angular.module('root',[]);
//  Popup controller  //



root.controller('ratingctrl',function($scope){
  $scope.max = 5;
  $scope.ratingVal = 2;
  $scope.readonly = false;
  $scope.onHover = function(val){
    $scope.hoverVal = val;
  };
  $scope.onLeave = function(){
    $scope.hoverVal = null;
  }
  $scope.onChange = function(val){
    $scope.ratingVal = val;
  }

});
root.directive('star', function () {
  return {
    template: '<ul class="rating" ng-mouseleave="leave()">' +
        '<li ng-repeat="star in stars" ng-class="star" ng-click="click($index + 1)" ng-mouseover="over($index + 1)">' +
        '\u2605' +
        '</li>' +
        '</ul>',
    scope: {
      ratingValue: '=',
      max: '=',
      readonly: '@',
      onHover: '=',
      onLeave: '='
    },
    controller: function($scope){
      $scope.ratingValue = $scope.ratingValue || 0;
      $scope.max = $scope.max || 5;
      $scope.click = function(val){
        if ($scope.readonly && $scope.readonly === 'true') {
          return;
        }
        $scope.ratingValue = val;
      };
      $scope.over = function(val){
        $scope.onHover(val);
      };
      $scope.leave = function(){
        $scope.onLeave();
      }
    },
    link: function (scope, elem, attrs) {
      elem.css("text-align", "center");
      var updateStars = function () {
        scope.stars = [];
        for (var i = 0; i < scope.max; i++) {
          scope.stars.push({
            filled: i < scope.ratingValue
          });
        }
      };
      updateStars();
 
      scope.$watch('ratingValue', function (oldVal, newVal) {
        if (newVal) {
          updateStars();
        }
      });
      scope.$watch('max', function (oldVal, newVal) {
        if (newVal) {
          updateStars();
        }
      });
    }
  };
});

//  slider   //

    root.controller('popupController', function ($scope) {
        $scope.showPopup = false;
        $scope.errorMessage = false;

        $scope.isPopupVisble = function () {
            $scope.showPopup = true;
        };
        $scope.hidePrompt = function () {
     
            $scope.showPopup = false;
        };
        $scope.deleteRecord = function() {
         
            if (endDate == "Invalid Date") {
                $scope.errorMessage = true;
                return;
            }
            $scope.hidePrompt();
        };
		
});
//  Popup controller  END //

			// click anywhere dropdown  //
			
root.controller('dropctrl', function($scope){

})
	
 root.directive('clickAnywhereButHere', function($document){
  return {
    restrict: 'A',
    link: function(scope, elem, attr, ctrl) {
      elem.bind('click', function(e) {
        // this part keeps it from firing the click on the document.
        e.stopPropagation();
      });
      $document.bind('click', function() {
        // magic here.
        scope.$apply(attr.clickAnywhereButHere);
      })
    }
  }
});
			// click anywhere dropdown END  //

