(function () {
'use strict';

var shoppingList = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Bread",
    quantity: '1'
  }
];

var boughtList = [ ];

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope) {
  $scope.shoppingList = shoppingList;
  $scope.boughtList = boughtList;

  $scope.addToBought = function () {
    var newItem = {
      name: $scope.newItemName,
      quantity: $scope.newItemQuantity
    };

    $scope.shoppingList.push(newItem);
  };

  $scope.addToList = function () {
    var newItem = {
      name: $scope.newItemName,
      quantity: $scope.newItemQuantity
    };

    $scope.shoppingList.push(newItem);
  };

  $scope.removeFromList = function () {
    var newItem = {
      name: $scope.newItemName,
      quantity: $scope.newItemQuantity
    };

    $scope.shoppingList.push(newItem);
  };

  }

})();
