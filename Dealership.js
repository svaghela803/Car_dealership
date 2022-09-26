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