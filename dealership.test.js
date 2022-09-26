test ("Dealership - count()", () = {
    let name = "Test D";
    let maxNumberOfCars = 10;
    let cars = [new Car("", 100, ""), new Car("", 100, "")];

    let dealership = new Dealership(name, maxNumberOfCars);
    dealership.cars = cars;

    expect(dealership.count()).toBe(2);
});