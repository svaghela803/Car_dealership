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

const car1 = new Car('Aldi', 4000, 'Petrol');

const Dealership = function() {
    let _manufacturer = _manufacturer;
    let _price = _price;
    let _engineType = _engineType;
}
