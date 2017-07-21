(function () {
'use strict';

angular.module('lunchCheckerApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.item = "";

  $scope.checkNumOfItems = function () {
    $scope.message = "";
    var itemArray = $scope.item.split(',');
    //Empty items between commas are counted
    if(itemArray.length == 1 && (itemArray[0] == "" || itemArray[0] == " ")) {
      $scope.message = "Please enter data first";
      return $scope.message;
    }
    else if(itemArray.length > 0 && itemArray.length < 4) {
      $scope.message = "Enjoy!";
      return $scope.message;
    }
    else {
      $scope.message = "Too much!";
      return $scope.message;
    }
  };
}
})();
