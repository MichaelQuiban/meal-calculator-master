//The customer will have a name, and a preference for food.
var Diner = function(name) {
	this.name = name;
	this.dishes = [];
};

//Push dish into dishes array.
Diner.prototype.addDishes = function() {
	for (var i = 0; i < arguments.length; i++) {
		this.dishes.push(arguments[i]);
	};
};

//The name of the Dish, example: "Eggs", and the price which is $6.00.
var Dish = function(name, price) {
	this.name = name;
	this.price = price;
};

//We need to charge these people, Bill will conta
var Bill = function() {
	this.diners = [];
};

//Iterate whatever is passed through the function, then push that into diners. Example: "Michael".
Bill.prototype.addDiners = function() {
	for (var i = 0; i < arguments.length; i++) {
		this.diners.push(arguments[i]);
	};
};

//Performs in a similar way with addDiners, we're also going to dig deeper inside each diner and grab the food's price.
Bill.prototype.getTotal = function() {
	var total = 0;
	for (var i = 0; i < this.diners.length; i++) {
		for (var j = 0; j < this.diners[i].dishes.length; j++) {
			total += this.diners[i].dishes[j].price;
		};
	};
	return total;
};

Bill.prototype.getTax = function() {
	var tax = 0;
	for (var i = 0; i < this.diners.length; i++) {
		for (var j = 0; j < this.diners[i].dishes.length; j++) {
			tax += 0.09 * this.diners[i].dishes[j].price;
		};
	};
	return tax;
};

//Generate a tip which is 20% of the total price.
Bill.prototype.getTip = function() {
	var tip = 0;
	for (var i = 0; i < this.diners.length; i++) {
		for (var j = 0; j < this.diners[i].dishes.length; j++) {
			tip += 0.2 * this.diners[i].dishes[j].price;
		}
	}
	return tip;
}

//Ingredients which create is put inside the dish array.
var Eggs = new Dish("Eggs", 6.00);
var Coffee = new Dish("Coffee", 1.99);
var Bacon = new Dish("Canadian Bacon", 3.99);
var Toast = new Dish("Toast", 1.99);
var Oranges = new Dish("Oranges", 0.99);

//People who need food! These are our official diners.
var Michael = new Diner("Michael");
var Tony = new Diner("Tony");
var Nick = new Diner("Nick");

//The diners need to eat, create an order using the addDishes function.
Michael.addDishes(Eggs, Coffee);
Tony.addDishes(Toast, Oranges, Oranges, Bacon);
Nick.addDishes(Coffee, Coffee, Coffee, Bacon);

//This will initiliaze the bill.
var myBill = new Bill();

//
myBill.addDiners(Michael, Tony, Nick);

//Print Bill
console.log("Your food total is " + "$" + myBill.getTotal().toFixed(2) + " with a sales tax of: "+ "$" + myBill.getTax().toFixed(2));
console.log("Thanks! can you please give the waitress: " + "$" + myBill.getTip().toFixed(2) + "," + " for her great customer service!");
console.log("Waitress: That's 20%! Thanks for the awesome tip!");