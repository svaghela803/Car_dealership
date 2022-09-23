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

const car1 = new Car('Audi', 10000, 'Electric');
const car2 = new Car('Ford', 3000, 'Hybrid');
const car3 = new Car('Audi', 24000, 'Electric')

const Dealership = function(name, capacity) {
this.name = name;
this.capacity = capacity;
this.stock = []; 
}

Dealership.prototype.getName = function() { return this.name};
Dealership.prototype.setName = function(name) { this.name = this.name };
Dealership.prototype.getCapacity = function() { return this.capacity};
Dealership.prototype.setCapacity = function(capacity) { this.capacity = this.capacity };
Dealership.prototype.getName = function() { return this.name};
Dealership.prototype.setName = function(name) { this.name = this.name };
Dealership.prototype.getStock = function() { return this.stock};
Dealership.prototype.setStock = function(stock) { this.stock = this.stock};

Dealership.prototype.addCar = function (newCar) {
    this.car = newCar;
    return stock.push(Car)};

Dealership.prototype.countStock = function() {
    return stock.length};

 Dealership.prototype.CarManufacturer= function() {
        return Car.map (({manufacturer})) => manufacturer};

        Dealership.prototype.getCarManufacturerName= function() {
            return Car.filter (car => manufacturer('Audi'))};

const CarManufacturer
const stock = ['Aldi', 'BMW', 'Ford'];
