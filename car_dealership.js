const Car = function(manufacturer, price, engineType) {
    this.manufacturer = manufacturer;
    this.price = price;
    this.engineType = engineType;
}

Car.prototype.getManufacturer = function() { return this.manufacturer};
Car.prototype.setManufacturer = function(manufacturer) { this.manufacturer = manufacturer };
Car.prototype.setPrice = function(price) { this.price = price };
Car.prototype.getPrice = function() { return this.price };
Car.prototype.setEngineType = function(engineType) { this.engineType = engineType};
Car.prototype.getEngineType = function() { return this.engineType };

const Audi = new Car('Audi', 4000, 'Electric');

const Dealership = function() {
this.name = name;
this.capacity = capacity;
this.stock = [];

Dealership.prototype.getName = function() { return this.name};
Dealership.prototype.setName = function(manufacturer) { this.name = this.name };

Dealership.prototype.addCar = function () { return stock.push(Car)};
Dealership.prototype.countStock = function() {return stock.length};
this.getCourses = () => _courses;
}

const stock = ['Aldi', 'BMW', 'Ford'];
