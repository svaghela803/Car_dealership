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


Dealership.prototype.addCar = function (newCar) {
    this.car = newCar;
    return stock.push(Car)};


 Dealership.prototype.CarManufacturer= function() {
        return Car.map (({manufacturer})) => manufacturer};

        Dealership.prototype.getCarManufacturerName= function() {
            return Car.filter (car => manufacturer('Audi'))};

const CarManufacturer
const stock = ['Aldi', 'BMW', 'Ford'];
