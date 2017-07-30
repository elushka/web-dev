(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuyItem =  this;

    toBuyItem.items = ShoppingListCheckOffService.getShoppingItems();

    toBuyItem.purchaseItem = function (itemIndex) {
        ShoppingListCheckOffService.purchaseItem(itemIndex);
    }

    toBuyItem.removeItem = function(itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
    }

    toBuyItem.addItem = function(itemName, quantity) {
      ShoppingListCheckOffService.addItem(itemName, quantity);
    }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtItem =  this;

    boughtItem.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
    var service = this;

    var shoppingList = [
      {
        name: "bottle of milk",
        quantity: "1"
      },
      {
        name: "donuts",
        quantity: "200"
      },
      {
        name: "cookies",
        quantity: "300"
      },
      {
        name: "chocolates",
        quantity: "5"
      },
      {
        name: "bread",
        quantity: '1'
      }
    ];

  var boughtList = [];

  service.getShoppingItems = function () {
    return shoppingList;
  };

  service.getBoughtItems = function () {
    return boughtList;
  };

  service.purchaseItem = function (itemIndex) {
    boughtList.push(shoppingList[itemIndex]);
    shoppingList.splice(itemIndex, 1);
  };

  service.removeItem = function (itemIndex) {
    shoppingList.splice(itemIndex, 1);
  };

  service.addItem = function (itemName, quantity) {
  var item = {
    name: itemName,
    quantity: quantity
  };
  shoppingList.push(item);
  };

}

})();
