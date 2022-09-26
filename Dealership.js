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

    //Counting all cars
    Dealership.prototype.count = function() {
        return this.cars.length};

    //Adding a new car
    Dealership.prototype.add = function (car){
        //check if current count of cars is less than the maxNumberofCars
        if(this.count() < this.maxNumberOfCars) {
            this.cars.push(car)
        }
    }
    //returns each car's manufacturer
    Dealership.prototype.carsWithManufacturer = function(){
        return this.cars.map( (car) => car.manufacture)
    }

    //returns total value of cars
    Dealership.prototype.total = function(){
        return this.cars.map(car => car.price).reduce((total, price) => total + price)
    }