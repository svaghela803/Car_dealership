const Dealership = function(name, maxNumberOfCars) {
    this.name = name;
    this.maxNumberOfCars = maxNumberOfCars;
    this.cars = []; 
    }
    
    Dealership.prototype.getName = function() { return this.name};
    Dealership.prototype.setName = function(name) { this.name = this.name };
    Dealership.prototype.getMaxNumberOfCars = function() { return this.capacity};
    Dealership.prototype.setMaxNumberOfCars = function(maxNumberOfCars) { this.maxNumberOfCars = this.maxNumberOfCars };
    Dealership.prototype.getName = function() { return this.name};
    Dealership.prototype.setName = function(name) { this.name = this.name };
    Dealership.prototype.getCars = function() { return this.cars};
    Dealership.prototype.setCars = function(cars) { this.cars = this.cars};

    Dealership.prototype.count = function() {
        return this.cars.length};