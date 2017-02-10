var Diner = function(name) {
	this.name = name;
	this.dishes = [];
};

//Push dish into dishes
Diner.prototype.addDishes = function() {
	for (var i = 0; i < arguments.length; i++) {
		this.dishes.push(arguments[i]);
	};
};

var Dish = function(name, price) {
	this.name = name;
	this.price = price;
};

var Bill = function() {
	this.diners = [];
};

Bill.prototype.addDiners = function() {
	for (var i = 0; i < arguments.length; i++) {
		this.diners.push(arguments[i]);
	};
};

Bill.prototype.getTotal = function() {
	var total = 0;
	for (var i = 0; i < this.diners.length; i++) {
		for (var j = 0; j < this.diners[i].dishes.length; j++){
			total += this.diners[i].dishes[j].price;
		};
	};
	return total;
};

//Ingredients
var Eggs = new Dish("Eggs", 6.00);
var Coffee = new Dish("Coffee", 1.99);
var Bacon = new Dish("Canadian Bacon", 3.99);
var Toast = new Dish("Toast", 1.99);
var Oranges = new Dish("Oranges", 0.99);

//People who need food!
var Michael = new Diner("Michael");
var Tony = new Diner("Tony");
var Nick = new Diner("Nick");

//Get them food!
Michael.addDishes(Eggs, Coffee);
Tony.addDishes(Toast, Oranges, Oranges, Bacon);
Nick.addDishes(Coffee, Coffee, Coffee, Bacon);

//
var myBill = new Bill();

myBill.addDiners(Michael, Tony, Nick);

//Get Tip
//Print Bill
console.log(myBill);
console.log(myBill.getTotal().toFixed(2));